import React, { useState } from 'react'
import ContainerWithRow from 'Components/Utilities/Layout/Containers/ContainerWithRow'
import Column from 'Components/Utilities/Layout/Containers/Column'

export default function SubscribeForm({ onSubmit, message, status  }) {

  const [ email, setEmail ] = useState("")

  const updateEmailValue = (e) => {
    let email = e.target.value
    setEmail(email)
  }

  return (
    <>
      <ContainerWithRow>
        <Column size="12">
          <input
            placeholder="Your Email*"
            onChange={updateEmailValue}
            value={email}
            id="email"
            name="email"
            type="text"
            className="form-control mb-3"
          />
          <button onClick={() => { onSubmit(email) }} className="btn btn-primary">Sign Up!</button>
          <div className="text-center">
            <p>{message}</p>
          </div>
        </Column>
      </ContainerWithRow>
    </>

  )
}
