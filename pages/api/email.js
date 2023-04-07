/* eslint-disable operator-linebreak */
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import qr from 'qr-image';

dotenv.config();

export default async (req, res) => {
  console.log(req.body);
  console.log(process.env.EMAIL);
  console.log(process.env.PASSWORD);
  const { name, email } = req.body;

  const qrCode = qr.imageSync(`${email}`, { type: 'png' });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOption = {
    from: `${process.env.EMAIL}`,
    to: `${email}`,
    subject: 'Your QR Code for Arithemania 2.0',
    html:
      `<p>Dear ${name},</p>` +
      '<p>We are excited to have you participate in Arithemania 2.0, the flagship hackathon of Shunya. We require all participants to have a unique QR code that will be scanned every time you enter or leave the premises of the hackathon, as well as before having any meals (lunch, dinner, snacks, and breakfast).</p>' +
      '<p>Attached to this email, you will find your unique QR code. Please make sure to save it on your mobile device and have it ready for scanning when necessary. The code will be your pass to enter the hackathon premises, and it will also help us keep track of the number of participants at any given time.</p>' +
      '<p>We thank you for your cooperation in ensuring the safety and success of Arithemania 2.0. If you have any queries or concerns, please feel free to contact us at shunya@pes.edu. If your team dropped out of the Hackathon please ignore the following message</p>' +
      '<p>Best regards,</p>' +
      '<p>Shunya - The official Math club of pes</p>', // HTML body
    attachments: [
      {
        filename: `${name}.png`,
        content: qrCode,
      },
    ],
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log(err);
      console.log(data);
      res.send(`error${JSON.stringify(err)}`);
    } else {
      console.log('mail send');
      res.send('success');
    }
  });
};
