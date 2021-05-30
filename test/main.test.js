import { createEmailService } from "../src/EmailService.js"

async function main() {
   
    const emailService = await createEmailService('ort.proy.integrador.21@gmail.com', 'Ort123456');

    //emailService.sendEmailPlainText('Yo', 'ort.proy.integrador.21@gmail.com', '1,2,3 probando - prueba Envio de mails', '1,2,3 probando');
    //emailService.sendEmailWithAttachment('Yo', 'ort.proy.integrador.21@gmail.com', '1,2,3 probando - Pueba envio de mails');
    //emailService.sendEmailWithImageAndAttachment('Yo', 'ort.proy.integrador.21@gmail.com', '1,2,3 probando - Pueba envio de mails');
    const fecha = new Date();
    
    const datosObj = {
      nombre: "Nombre: Pepito Perez",
      sede: "Sede: Centro",
      hoy: "Fecha: " + fecha.toLocaleDateString('en-GB'),
      tipoVacuna: "Vacuna: AstraZeneca",
      dosis: "Dosis: Primera dosis",
    }; 

    emailService.sendEmailWithVacunateTemplate('ort.proy.integrador.21@gmail.com', datosObj);

}

main()