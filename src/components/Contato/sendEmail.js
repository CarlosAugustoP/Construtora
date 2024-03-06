import { Resend } from 'resend';  

const resend = new Resend('api_do_resend');

export const sendEmail = async (name, email, telephone, message) => {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'gabrielpires2991@gmail.com',
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
  });
}
