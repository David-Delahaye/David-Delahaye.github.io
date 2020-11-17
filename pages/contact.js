import Page from "../components/page";
import { useState } from "react";
import Head from "next/head";
const testKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
const siteKey = "6LeXAOQZAAAAAI80z63u0g34D0xpkmffsQkc8L6D";

export default function Contact() {
  const [message, setMessage] = useState("");
  async function formSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log("submit");
    const body = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      captcha: grecaptcha.getResponse(),
    };
    const response = await fetch("/api/mail", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(body),
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    setMessage(jsonResponse.message);
  }

  return (
    <main>
      <Head>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </Head>
      <section>
        <h2>Contact Me!</h2>
        <em>
          If you'd like to chat fill in the form below and i'll get back to you
          within a few days!
        </em>
      </section>
      <section>
        <form
          className="contact"
          name="contact"
          method="post"
          onSubmit={(e) => {
            formSubmit(e);
          }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="line">
            <label>
              Name*
              <input name="name" type="text" placeholder=" " required />
            </label>
            <label>
              Email*
              <input name="email" type="email" placeholder=" " required />
            </label>
          </div>
          <label>
            How can i help?*
            <textarea name="message" placeholder=" " required />
          </label>
          <div className="g-recaptcha" data-sitekey={siteKey} />
          <button>Submit</button>
        </form>
        {message !== "" ? <div>{message}</div> : ""}
      </section>
    </main>
  );
}
