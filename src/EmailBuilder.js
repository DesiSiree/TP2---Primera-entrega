
async function createEmailBuilder(user, pass) {

    return {
        createEmailPlainText: async (from, to, subject, text) => {
            return {
                from: from,
                to: to,
                subject: subject,
                text: text,
            }
        },

        createEmailWithAttachment: async (from, to, subject) => {
            return {
                from: from,
                to: to,
                subject: subject,
                html: "<h1> Probando hola hola holaaa ! </h1> <b> envio de archivos adjuntos ✔</b>",         
                attachments: [{
                    filename: 'text.txt',
                    content: 'Se creo texto!!!!',
                    contentType: 'text/plain'},
                 { // use URL as an attachment
                    fileName: "license.txt",
                    filePath: "https://raw.github.com/andris9/Nodemailer/master/LICENSE"    
                }]
            }
        },

        createEmailWithImageAndAttachment: async (from, to, subject) => {
                return {
                    from: from,
                    to: to,
                    subject: subject,
                    html:'Embedded image: <img src="cid:codigoUnicoParafoto"/>',
                    attachments: [{
                        filename: 'image.jpg',
                        path: './imagen/image.jpg',
                        cid: 'codigoUnicoParafoto' //same cid value as in the html img src
                     },
                     {
                        filename: 'text.txt',
                        content: 'Estas son las condiciones para inscribirse ...... !!!!',
                        contentType: 'text/plain'}]
                };
        
        }
    }    
}

export { createEmailBuilder }