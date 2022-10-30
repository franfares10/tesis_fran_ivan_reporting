const nodemailer = require("nodemailer");
require("dotenv").config();

const mandarMail = async (reportAttachment, filename, mailResponsable) => {
    try{
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 25,
            service: "gmail",
            auth: {
            user: process.env.MAILDRESSY,
            pass: process.env.PASSWORDDRESSY,
            },
            tls: {
            rejectUnauthorized: false,
            },
        });

        const mailOptions = {
                                from: process.env.MAILDRESSY,
                                to: mailResponsable,
                                subject: "DRESSY - MONTHLY REPORT",
                                html: "<h1>DRESSY</h1><p>Para acceder al dashboard virtual, clikear https://charts.mongodb.com/charts-tesisreporting-dumle/public/dashboards/635d88d2-6f8f-4aad-83d1-b4fcbd36a511</p>",
                                attachments: [
                                {
                                    filename,
                                    content: reportAttachment,
                                    contentType:
                                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                                },
                                ],
                            }

        await transporter.sendMail(mailOptions);
        
    }
    catch (err) 
    {
        console.log(err);
    }
};

module.exports = {
  mandarMail,
};
