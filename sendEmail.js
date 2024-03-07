const { Resend } = require('resend');

const resend = new Resend('re_f7DtZRkb_3cb4xDhUMXQP95T63wkGhiVH');

exports.sendEmail = async (name, email, telephone, message) => {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'gabrielpires2991@gmail.com',
    subject: 'Nova mensagem recebida!',
    text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${telephone}\nMensagem: ${message}`,
  });
};
