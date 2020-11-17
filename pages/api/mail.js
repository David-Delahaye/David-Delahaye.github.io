import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  console.log(req.body);
  try {
    await sendgrid.send({
      to: "daviddelahaye3@gmail.com",
      from: "delahaye3@hotmail.co.uk",
      subject: "Form-Submit @ david-delahaye.co.uk",
      html: `<h2>New form submit @ david-delahaye.co.uk</h2>
        <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        </ul>
        <p>${req.body.message}</p>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
};
