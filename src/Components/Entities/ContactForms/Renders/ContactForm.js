import React, { useState } from 'react'
import ContainerWithRow from 'Components/Utilities/Layout/Containers/ContainerWithRow'
import Column from 'Components/Utilities/Layout/Containers/Column'

export default function ContactForm({ onSubmit, message, status  }) {

  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ subject, setSubject ] = useState("")
  const [ contactMessage, setContactMessage ] = useState("")
  const [ errors, setErrors ] = useState([])

  if (status === "Done") {
    setName("")
    setEmail("")
    setSubject("")
    setContactMessage("")
  }

  const validate = () => {
    let errors = []
    if (name.length === 0){
      errors.push("Name cannot be blank")
    }
    if (email.length === 0 && !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))){
      errors.push("Please use a valid email address")
    }
    if (subject.length === 0){
      errors.push("State cannot be blank")
    }
    if (contactMessage.length === 0){
      errors.push("State cannot be blank")
    }
    setErrors(errors)
    return errors.length === 0
  }
  
  const handleChange = (event) => {
    let name = event.target.getAttribute('name')
    eval(`set${name.charAt(0).toUpperCase() + name.slice(1)}`)(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if(!validate()) return

    let newContactForm = {
      name, email, subject, contactMessage
    }
    onSubmit(newContactForm)
  }

  return (
    <>
      <ContainerWithRow>
        <Column size="12">
          <form onSubmit={handleSubmit} className="form">
            <input
              placeholder="Your Name*"
              onChange={handleChange}
              value={name}
              id="name"
              name="name"
              type="text"
              className="form-control mb-3"
            />
            <input
              placeholder="Your Email*"
              onChange={handleChange}
              value={email}
              id="email"
              name="email"
              type="text"
              className="form-control mb-3"
            />
            <input
              placeholder="Subject*"
              onChange={handleChange}
              value={subject}
              id="subject"
              name="subject"
              type="text"
              className="form-control mb-3"
            />
            <textarea 
              placeholder="Your Message Here*"
              onChange={handleChange}
              value={contactMessage}
              id="contactMessage"
              name="contactMessage"
              className="form-control mb-3"
            />
            <button type="submit" className="btn btn-primary">Send</button>
            <div className="text-center">
              {
                errors.map((error, key) => (
                  <p style={{color: "white", padding: "3px", background: "red", marginBottom: "3px"}} key={key}>
                    {error}
                  </p>
                ))
              }
              <p>{message}</p>
            </div>
          </form>
        </Column>
      </ContainerWithRow>
    </>

  )
}
