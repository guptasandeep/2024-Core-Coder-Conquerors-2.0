export async function sendWhatsAppMessage(to: string, message: string) {
  try {    
    const response = await fetch('https://graph.facebook.com/v18.0/197028526837376/messages', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer PROVIDE_Bearer_TOKEN_HERE',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to,
        type: 'text',
        text: {
          preview_url: false,
          body: message
        }
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send WhatsApp message');
    }
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    throw new Error('Failed to send WhatsApp message');
  }
}
