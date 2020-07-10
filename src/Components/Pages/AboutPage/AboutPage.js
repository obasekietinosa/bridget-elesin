import React from 'react'
import Container from 'Components/Utilities/Layout/Containers/Container'
import Column from 'Components/Utilities/Layout/Containers/Column'
import Section from 'Components/Utilities/Layout/Containers/Section'
import Row from 'Components/Utilities/Layout/Containers/Row'

export default function AboutPage() {
  return (
    <Section bg="white" className="AboutPage">
      <Container>
        <Row className="align-items-md-center">
        <Column>
          <img 
            alt="Bridget Elesin's Masterclasses" 
            src="https://services.etin.space/demos/bridgetelesin/intro.png" 
            className="img-fluid" 
          />
          <h1>About Me</h1>
          <p>
            Bridget Elesin teaches individuals how to live their best life with transformational results. 
            She is passionate about the family and ensuring men become better fathers 
            while working with their wives as a team to build the family. 
          </p>
          <p>
            She is also a firm believer in leaving everyone she meets better than the way she met them. 
            She is a graduate of Edo State university , now Ambrose Ali university Ekpoma, 
            Edo State where she studied Geography and Regional planning. 
          </p>
          <p>
            She also has a Post graduate Diploma in Public administration from the University of Benin, Benin City, Edo State 
            and a diploma in Theology from the All Nations For Christ Bible Institute in Benin City, Edo State.
            Bridget Elesin is a certified John C. Maxwell Coach, Trainer, Teacher and Speaker, 
            Marriage Masters Mentor from the institute of marriage and family affairs U.S.A and a family life Practitioner.
          </p>
          <p>
            She is joyfully married to Tunde Elesin and makes her home in Lagos with her three blessed and prophetic children. 
          </p>
          <p>
            She is the author of the book; Fathers, You must take the lead. 
            The creator of The complete woman Program, Marriage mindset network and fatherhood mastery.
          </p>
        </Column>
        </Row>
      </Container>
    </Section>
  )
}