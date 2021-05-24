import { createEmailSender } from "./EmailSender.js";
import { createEmailBuilder } from "./EmailBuilder.js";

async function createEmailController(user, pass) {

    const builder = await createEmailBuilder();
    const sender = await createEmailSender(user, pass);

    return {
        sendEmailPlainText: async (from, to, subject, text) => {
            let emailOptions = await builder.createEmailPlainText(from, to, subject, text);
            sender.send(emailOptions);
        },
        
        sendEmailWithAttachment: async (from, to, subject) => {
            let emailOptions = await builder.createEmailWithAttachment(from, to, subject);
            sender.send(emailOptions);
        },
        sendEmailWithImageAndAttachment: async (from, to, subject) => {
            let emailOptions = await builder.createEmailWithImageAndAttachment(from, to, subject);
            sender.send(emailOptions);
        }
    }
}

export {createEmailController}