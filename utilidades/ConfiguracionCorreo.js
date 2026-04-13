import sgMail from "@sendgrid/mail";

console.log("API KEY:", process.env.SENDGRID_API_KEY);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const enviarCorreo = async (datosCorreo) => {
  return await sgMail.send(datosCorreo);
};
