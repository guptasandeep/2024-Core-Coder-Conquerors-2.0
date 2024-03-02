import { request, gql } from 'graphql-request';

const endpoint = process.env.SITECORE_API_HOST+'/sitecore/api/graph/edge';
export async function fetchItemsAuditUpdateSettings() {
  const query = gql`
    query {
      item(path: "/sitecore/content/Skate Park/Skate Part Site/Settings/Items Audit Update Settings", language: "en") {
        recipientWhatsAppNumbers: field(name: "Recipient WhatsApp numbers") {
          ... on TextField {
            value
          }
        }
        whatsAppMessageTemplate: field(name: "WhatsApp Message Template") {
          ... on TextField {
            value
          }
        }
      }
    }
  `;

  const headers = {
    'sc_apikey': '{CE75F657-76AD-4D3F-A2F9-D0E82012EF26}'
  };

  try {
    const data = await request(endpoint, query, undefined, headers);
    return data;
  } catch (error) {
    console.error('Error fetching WhatsApp numbers:', error);
    throw new Error('Failed to fetch WhatsApp numbers');
  }
}
