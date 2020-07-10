import React from 'react'
import Container from 'Components/Utilities/Layout/Containers/Container'
import Column from 'Components/Utilities/Layout/Containers/Column'
import Section from 'Components/Utilities/Layout/Containers/Section'
import SubscribeForm from 'Components/Entities/NewsletterSubscriptions/Renders/SubscribeForm'
import SubscribeToNewsletter from 'Components/Entities/NewsletterSubscriptions/SubscribeToNewsletter'
import Row from 'Components/Utilities/Layout/Containers/Row'

export default function SubscribeCTA() {
  return (
    <Section bg="black" color="white"  style={{padding:"50px 0"}} className="Categories">
      <Container>
        <Row className="text-center">
        <Column offset={{md: "3"}} size={{md: "6"}}>
          <h4>FRESH INSPIRATION FOR YOUR INBOX</h4>
          <p>
            Join my mailing list to get updates when I release a new course, organize events
            or have great stuff to share. 
          </p>
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