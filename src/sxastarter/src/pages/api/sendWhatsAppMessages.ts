import { NextApiRequest, NextApiResponse } from 'next';
import { fetchItemsAuditUpdateSettings } from './fetchItemsAuditUpdateSettings';
import { sendWhatsAppMessage } from './whatsapp';

export default async function sendWhatsAppMessagesHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const auditSettings = await fetchItemsAuditUpdateSettings();
    const whatsAppNumbersArray = auditSettings.item.recipientWhatsAppNumbers.value.split(',');
    const whatsAppMessageTemplate = auditSettings.item.whatsAppMessageTemplate.value;
    const currentTime = new Date().toLocaleString();
    const message = whatsAppMessageTemplate.replace('#CurrentDateTime#',currentTime)
    .replace('#ItemName#', req.body.DataItem.Name)
    .replace('#ItemID#', req.body.DataItem.Id)
    .replace('#PreviousState#', req.body.PreviousState?.DisplayName)
    .replace('#CurrentState#', req.body.NextState?.DisplayName);

    await Promise.all(whatsAppNumbersArray.map(async (whatsappPhoneNumber: string) => {
      await sendWhatsAppMessage(whatsappPhoneNumber, message);
    }));

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
