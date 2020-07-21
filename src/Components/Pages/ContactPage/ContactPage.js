import React from 'react'
import Container from 'Components/Utilities/Layout/Containers/Container'
import Column from 'Components/Utilities/Layout/Containers/Column'
import Section from 'Components/Utilities/Layout/Containers/Section'
import Row from 'Components/Utilities/Layout/Containers/Row'
import SendContactForm from 'Components/Entities/ContactForms/SendContactForm'
import ContactForm from 'Components/Entities/ContactForms/Renders/ContactForm'
import Flex from 'Components/Utilities/Layout/Containers/Flex'

export default function ContactPage() {
  return (
    <Section bg="white" color="black"  style={{height:"100vh" ,padding:"50px 0"}} className="Categories">
      <Flex 
        alignItems="center"
        justifyContent="center"
      >
        <Container>
          <Row className="text-center">
          <Column offset={{md: "3"}} size={{md: "6"}}>
            <h4>Get In Touch</h4>
            <p>
              Fill The Form Below To Send Me A Message 
            </p>
            <SendContactForm
              renderAs={ContactForm}
              layout={{
                component: React.Fragment,
                props: null
              }}
            />
          </Column>
          </Row>
        </Container>
      </Flex>
    </Section>
  )
}