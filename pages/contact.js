import Page from "../components/page";

export default function Contact() {
  async function formSubmit(e) {
    e.preventDefault();
  }

  function formSubmit(e) {
    e.preventDefault();
    grecaptcha.ready(function () {
      grecaptcha
        .execute(process.env.reCAPTCHA_site_key, { action: "submit" })
        .then(async function (token) {
          console.log(token);
          const body = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
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
          return response.json(); // parses JSON response into native JavaScript objects
        });
    });
  }

  return (
    <main>
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
          <button>Submit</button>
        </form>
      </section>
    </main>
  );
}
