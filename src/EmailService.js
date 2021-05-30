import { createEmailSender } from "./EmailSender.js";
import { createEmailBuilder } from "./EmailBuilder.js";
import { crearConversorPdf } from './ConvertirAPDF.js';
import fs from 'fs';

async function createEmailService(user, pass) {

    const builder = await createEmailBuilder();
    const sender = await createEmailSender(user, pass);
    const pdfConversor = await crearConversorPdf('./pdfs/');

    return {

        sendEmailWithVacunateTemplate: async (to, datos) => {
            pdfConversor.pasarAPdf("Datos de la vacunacion:", "prueba", datos);
            let email = await builder.createEmailWithAttachment('Yo', to, "Prueba 1", "<h1> Probando hola hola holaaa ! </h1> <b> envio de archivos adjuntos ✔</b>", "prueba.pdf", "./pdfs/prueba.pdf", "application/pdf");
            sender.send(email);
        },

        /*sendEmailWithVacunateTemplate: async (from, to, subject) => {
            let emailOptions = await builder.createEmailWithImageAndAttachment(from, to, subject);
            sender.send(emailOptions);
        }*/
    }
}

export {createEmailService}