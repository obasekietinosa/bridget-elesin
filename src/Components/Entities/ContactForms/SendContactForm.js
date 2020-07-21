import React, { Component } from 'react'
// import Loading from 'Components/Utilities/Loading/Loading'

export default class SendContactForm extends Component {
  constructor(props) {
        super(props)
        this.state = {
            status: "Done",
            message: ""
        }
    }

  sendMessage = newMessage => {
    this.setState({ message:"Please wait", status: "Loading" })
    fetch("https://blog-admin.wetalksound.co/newsletter/ContactForm.php", {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      switch (data.status) {
          case "Success":
            this.setState({ status: "Done", message: "Success! You'll receive an email for my next publication"})
            break;

          case "Duplicate":
            this.setState({ status: "Done", message: "Thanks! Seems like you've already sent this message."})
            break;
      
          default:
            throw new Error('Something went wrong')
        }
    })
    .catch(error => {
      let message = "There was an error adding your email. Please try again."
      this.setState({ message, status:"Error" })
    })
  }

  render() {
    const ContactForm = this.props.renderAs
    const Layout = this.props.layout.component
    return (
      <Layout {...this.props.layout.props} >
        <ContactForm onSubmit={this.sendMessage} message={this.state.message} status={this.state.status} />
      </Layout>
    )
  }
}
