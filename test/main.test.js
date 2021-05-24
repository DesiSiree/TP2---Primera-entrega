import { createEmailController } from "../src/EmailController.js"

async function main() {
   
    const emailController = await createEmailController('ort.proy.integrador.21@gmail.com', 'Ort123456');

    emailController.sendEmailPlainText('Yo', 'ort.proy.integrador.21@gmail.com', '1,2,3 probando - prueba Envio de mails', '1,2,3 probando');
    emailController.sendEmailWithAttachment('Yo', 'ort.proy.integrador.21@gmail.com', '1,2,3 probando - Pueba envio de mails');
    emailController.sendEmailWithImageAndAttachment('Yo', 'ort.proy.integrador.21@gmail.com', '1,2,3 probando - Pueba envio de mails');
}

main()