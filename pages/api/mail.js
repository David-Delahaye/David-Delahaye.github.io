import sendgrid from "@sendgrid/mail";
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  console.log(req.body);

  let googleUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET}&response=${req.body.captcha}`;

  console.log(googleUrl);
  let captchaResponse = await fetch(googleUrl);
  let jsonResponse = await captchaResponse.json();
  console.log(jsonResponse);
  console.log("-----------");

  //fail
  if (jsonResponse.success === false) {
    res.status(500).json({ success: false, message: "captcha failed" });
  } else {
    //pass
    try {
      const from = process.env.SENDGRID_FROM;
      const to = process.env.SENDGRID_TO;
      await sendgrid.send({
        to: to,
        from: from,
        subject: "Form-Submit @ david-delahaye.co.uk",
        html: `<h2>New form submit @ david-delahaye.co.uk</h2>
          <ul>
          <li>Name: ${req.body.name}</li>
          <li>Email: ${req.body.email}</li>
          </ul>
          <p>${req.body.message}</p>`,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "message failed" });
    }

    return res.status(200).json({ success: true, message: "message sent" });
  }
};
