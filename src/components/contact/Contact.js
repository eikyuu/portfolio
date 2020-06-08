import React from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "./Contact.css";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      name: "",
      email: "",
      subject: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    const templateId = "template_UymVgJzV";

    this.sendmessage(templateId, {
      message_html: this.state.message,
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
    });
  }

  sendmessage(templateId, variables) {
    emailjs
      .send("gmail", templateId, variables, "user_zi0mU8CyTugL7pYbFrQ4h")
      .then((res) => {
        toast.success("Email bien envoyer");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(() => toast.error("Erreur dans la distribution de l'email"));
  }

  render() {
    return (
      <footer className="contact bg-primary">
        <form className="mailing">
          <div className="container">
            <h1 className="contact_h1 mt-5">PRENDRE CONTACT ?</h1>
            <div className="form-group">
              <label for="name" className="text-white mt-5">
                Votre Nom
              </label>
              <input
                className="form-control"
                name="name"
                type="text"
                checked={this.state.name}
                onChange={this.handleChange}
                placeholder="Dupont Jean"
                required
              />
            </div>
            <div className="form-group">
              <label for="name" className="text-white">
                Sujet du message
              </label>
              <input
                className="form-control"
                name="subject"
                type="text"
                checked={this.state.subject}
                onChange={this.handleChange}
                placeholder="Sujet de votre message"
                required
              />
            </div>
            <div className="form-group">
              <label for="name" className="text-white">
                Votre email
              </label>
              <input
                className="form-control"
                name="email"
                type="email"
                checked={this.state.email}
                onChange={this.handleChange}
                placeholder="dupont@mail.com."
                required
              />
            </div>
            <div className="form-group">
              <label for="name" className="text-white">
                Votre message
              </label>
              <textarea
                className="form-control"
                id="mailing"
                name="message"
                onChange={this.handleChange}
                placeholder="Message..."
                required
                value={this.state.message}
              />
            </div>

            <input
              type="button"
              value="Envoyer"
              className="btn btn-secondary"
              onClick={this.handleSubmit}
            />
          </div>
        </form>
      </footer>
    );
  }
}
