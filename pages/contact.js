import Page from "../components/page";

export default function Contact() {
  function formSubmit(e) {}
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
