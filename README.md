## Team name
⟹ Core Coder Conquerors

## Category
⟹ Best Module for XM/XP or XM Cloud

## Description
⟹ Distribute Item Audit update notifications to the designated WhatsApp numbers.

 - Receive timely updates regarding item changes directly on your registered WhatsApp phone numbers.

 - Access past item updates effortlessly through WhatsApp, providing convenient historical tracking.

 - This establishes the initial steps for integrating WhatsApp into our system.

 - What problem was solved? 
 
    - By receiving real-time item updates, content authors and reviewers can promptly take necessary actions, ensuring efficient workflow management.

## Video link

⟹ Video [Core Coder Conquerors Demo Video](docs/Core%20Coder%20Conquerors%20Demo.webm?raw=true)

## Pre-requisites and Dependencies

⟹ XM Cloud license file
## Installation instructions
⟹ Setup Facebook Developer Account

1. Create a Facebook Developer Account and setup WhatsApp API based on this document [Create a Facebook Developer Account and setup WhatsApp API](docs/Create-Facebook-Developer-and-Setup-WhatsApp-API.pdf)

2. Once you have tested the Send Message from the WhatsApp Setup page, reply the same chat with some text. It can be any text. It is needed so that we can recieve the item update messages from our implementation. This seems to be required since "From" is a Test nuumber or we use the free service. Maybe in paid version this might not be needed.

⟹ XM cloud local instance setup

1. We had no Docker Desktop installed our local machine. Hence we have setup the Docker Engine binaries in our local. Check this to link https://blogs.perficient.com/2023/10/12/sitecore-containers-without-docker-desktop/ to setup Docker Engine in local if you do not have Docker Desktop.

2. Ensure local IIS and SOLR are stoped.

iisreset /stop

Run Services.msc and stop the SOLR service if any.

3. Run the Docker Engine.

4. Sign up for an account on https://portal.sitecorecloud.io/ if you don't have one. Since this feature we test in local, we don't need to be part of any organization in the Sitecore Cloud portal. We create the account for authentication purpose in our local.

1. git clone https://github.com/Sitecore-Hackathon/2024-Core-Coder-Conquerors.git
and cd .\2024-Core-Coder-Conquerors\

2. If you have Docker for Desktop, then please disable Docker Compose V2 By unchecking "Use Docker Compose V2" in Docker Compose General settings window. OR if you go with V2, then plese find docker-compose in up.ps1 file and replace with docker compose, and in docker-compose.override.yml, provide single forward slash instead of 2 forward slashes in the following line.
entrypoint: powershell -Command "& C://tools//entrypoints//iis//Development.ps1"

2. In an ADMIN terminal:

    ```ps1
    .\init.ps1 -InitEnv -LicenseXmlPath "C:\path\to\license.xml" -AdminPassword "DesiredAdminPassword"
    ```

3. Restart your terminal and run:

    ```ps1
    .\up.ps1
    ```

Once it opens the browser, login with Sitecore cloud portal user you have or created in the step 4.
### Configuration
⟹ Covered in Installation steps.
## Usage instructions
⟹ Setup in local XM Cloud instance and Test the items update upon workflow state changes.

1. Login to Local Sitecore XM Coud instance.

2. Install the Sitecore packages from /sitecore-packages folder, and overwrite upon prompt.

3. Traverse to Item : /sitecore/content/Skate Park/Skate Part Site/Settings/Items Audit Update Settings. Provide the WhatsApp phone numbers separated by comma (,) with Country code.

![Items Audit Update Settings](/docs/images/04_Items_Audit_Update_Settings.png?raw=true)

4. In the file .\2024-Core-Coder-Conquerors\src\sxastarter\src\pages\api\whatsapp.ts, find PROVIDE_Bearer_TOKEN_HERE and replace it with Bearer token from the WhatsApp API Setup Dashboard.  Save.
   
![Bearer Token in WhatsApp API setup](/docs/images/01_WhatsApp_Token.png?raw=true)

![Bearer Token in Next JS code](/docs/images/02_WhatsApp_Token_NextJS.png?raw=true)

5. Traverse to /sitecore/content/Skate Park/Skate Part Site/Home/Product Listing, Right click and insert new Product page item. Click on Review in ribbon > Submit. Provide the comment and submit. Then click on Approve. Provide the comment and submit. Both the times on state change, you must have recieved the WhatsApp messages on the registered numbers. 

![WhatsApp Images](/docs/images/03_WhatsApp_Chat.png?raw=true)

**If you don't receive the message please send some dummy text to the Test whatsapp number, and try creating new Product item again and go through the workflow.**

Product Workflow is applied to Product Template.
![Bearer Token in Next JS code](/docs/images/05_Product_Workflow.png?raw=true)

6. Please check the Video for steps to test the feature.

## Future Improvements

1. Send message to take action as commands - Approve, Reject and Approve in whatsapp. 
2. XM cloud Webhook is not called when item > submitted > rejected > submitted again case. Frist 2 states it calls the webhook and 3rd item i.e. submit again does not call the webhook. This happened in local, not sure in the XM Cloud App. We will investigate this in detail.
3. Include URL of the changed item,  include important field names and values, in the message.
4. Renew Bearer token if no more valid or every 24 hours programmatically.
   
## References

WhatsApp API Setup https://www.youtube.com/watch?v=ul_9qe_fiTY

WhatsApp Message Formating https://faq.whatsapp.com/539178204879377/?cms_platform=web

## Team: Core Coder Conquerors
⟹ Developers:

Jitendra Chilate  : https://www.linkedin.com/in/jitendra-chilate/

Jitesh Tambekar   : https://www.linkedin.com/in/jitesh-tambekar-73490924/

Sandeepkumar Gupta: https://www.linkedin.com/in/gupta-sandeepkumar/ 
