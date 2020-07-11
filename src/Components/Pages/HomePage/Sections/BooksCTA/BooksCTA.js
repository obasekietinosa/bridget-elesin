import React from 'react'
import Container from 'Components/Utilities/Layout/Containers/Container'
import Column from 'Components/Utilities/Layout/Containers/Column'
import Section from 'Components/Utilities/Layout/Containers/Section'
import Row from 'Components/Utilities/Layout/Containers/Row'
import { Link } from 'react-router-dom'

export default function BooksCTA() {
  return (
    <Section bg="white" color="black"  style={{padding:"50px 0"}} className="BooksCTA">
      <Container>
        <Row className="align-items-md-center text-center">
        <Column size={{md: "6"}}>
          <img className="img-fluid" style={{maxHeight:"500px"}} alt="Bridget's Family Books" src="https://services.etin.space/demos/bridgetelesin/books.png" />
        </Column>
        <Column size={{md: "6"}}>
          <h4>IMPROVE YOUR RELATIONSHIP WITH YOUR FAMILY</h4>
          <p>
            Bridget Elesin's books on family can 
            give you insight you need to build meaningful
            family ties.
            She is the author of the book; 
            Fathers, You must take the lead. 
            The creator of The complete woman Program, 
            Marriage mindset network and fatherhood mastery.
          </p>
          <Link to="/books" className="btn btn-primary">See All Books</Link>
        </Column>
        </Row>
      </Container>
    </Section>
  )
}