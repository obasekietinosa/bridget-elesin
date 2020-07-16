import React from 'react'
import Container from 'Components/Utilities/Layout/Containers/Container'
import Column from 'Components/Utilities/Layout/Containers/Column'
import Section from 'Components/Utilities/Layout/Containers/Section'
import Row from 'Components/Utilities/Layout/Containers/Row'
import { Link } from 'react-router-dom'

export default function AboutMe() {
  return (
    <Section bg="light-grey" style={{padding:"50px 0"}} className="AboutMe">
      <Container>
        <Row className="align-items-md-center">
        <Column className="order-md-12" size={{md: "6"}}>
          <img 
            alt="Bridget Elesin's Masterclasses" 
            src="https://services.etin.space/demos/bridgetelesin/dazzle.png" 
            className="img-fluid" 
          />
        </Column>
        <Column size={{md: "6"}}>
          <h5>Meet</h5>
          <h3>BRIDGET ELESIN</h3>
          <p>
            Bridget Elesin teaches individuals how to live their best life with transformational results. 
            She is passionate about the family and ensuring men become better fathers while working with 
            their wives as a team to build the family. 
            She is also a firm believer in leaving everyone she meets better than the way she met them.
          </p>
          <Link to="/about" className="btn btn-primary">Meet Bridget</Link>
        </Column>
        </Row>
      </Container>
    </Section>
  )
}