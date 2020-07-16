import React from 'react'
import Container from 'Components/Utilities/Layout/Containers/Container'
import Column from 'Components/Utilities/Layout/Containers/Column'
import Section from 'Components/Utilities/Layout/Containers/Section'
import Row from 'Components/Utilities/Layout/Containers/Row'

export default function FeaturedPodcast() {
  return (
    <Section bg="black" color="white"  style={{padding:"50px 0"}} className="Categories">
      <Container>
        <Row className="text-center">
        <Column offset={{md: "3"}} size={{md: "6"}}>
          <h4>SONIC INSPIRATION TO GUIDE YOU TO YOUR BEST LIFE</h4>
          <p>
            Listen to our podcast, "The Complete Family Show", 
            A family focused podcast that helps to build and sustain families, 
            discussing real issues and proffering real solutions.
          </p>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe 
              src="https://anchor.fm/teamelesin/embed/episodes/Your-relationships-and-your-marriage-egjhhe/a-a2m3rsf" 
              frameborder="0" 
              scrolling="yes"
              title="Featured Podcast"
            >
            </iframe>
          </div>
        </Column>
        </Row>
      </Container>
    </Section>
  )
}