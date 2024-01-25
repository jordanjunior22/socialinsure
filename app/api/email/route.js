import nodemailer from 'nodemailer';

export async function POST(Request){
    const emailUser = process.env.GMAIL_EMAIL;
    const emailPass = process.env.GMAIL_PASSWORD;
    const data = await Request.json();
    const { name, email, message } = data;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: emailUser,
        pass: emailPass, // Use an app password or your Gmail password
      }
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: emailUser, // Replace with the recipient's email address
      subject: `New Message from ${email}`,
      text: `Name: ${name} \nEmail: ${email} \n\nMessage:\n${message}`
    };

    try {
      await transporter.sendMail(mailOptions);
      return Response.json({ message: 'Sending Successful...' });
    } catch (error) {
      console.error(error);
      return Response.json({ message: 'Error Sending...' });
    }
}
