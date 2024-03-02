export async function sendWhatsAppMessage(to: string, message: string) {
  try {    
    const response = await fetch('https://graph.facebook.com/v18.0/197028526837376/messages', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer EAATXUkWOVCkBO0cV2zDF2ZC6Wfj5UcDCdqDtzJctImGOgoGSqV7WhQJ8ZA56ffAUYD0N84oaCFy1BAZAmSdI0eL4ZCMvap7mo1ZC7ZAq4P7v3WB2PzmhGJjYo5ST2G1SJFh7OgQaIIXt4JnRMl0CzjQnJpR4ZBg1sDiqppRGqtVKl2srwoTAxvf6ZCiwZCWEGCfkyox3xadk1Lf8La0I1OzAMViqw3YguiG4ZD',
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
