import React from 'react'
import Container from 'Components/Utilities/Layout/Containers/Container'
import Column from 'Components/Utilities/Layout/Containers/Column'
import Section from 'Components/Utilities/Layout/Containers/Section'
import SubscribeForm from 'Components/Entities/NewsletterSubscriptions/Renders/SubscribeForm'
import SubscribeToNewsletter from 'Components/Entities/NewsletterSubscriptions/SubscribeToNewsletter'
import Row from 'Components/Utilities/Layout/Containers/Row'

export default function SubscribeCTA() {
  return (
    <Section bg="white" className="Categories">
      <Container>
        <Row className="align-items-md-center">
        <Column size={{md: "6"}}>
          <img 
            alt="Bridget Elesin's Masterclasses" 
            src="https://services.etin.space/demos/bridgetelesin/intro.png" 
            className="img-fluid" 
          />
        </Column>
        <Column size={{md: "6"}}>
          <h4>5-DAY CONFIDENCE BOOST</h4>
          <SubscribeToNewsletter 
            renderAs={SubscribeForm}
            layout={{
              component: React.Fragment,
              props:{}
            }}
          />
        </Column>
        </Row>
      </Container>
    </Section>
  )
}