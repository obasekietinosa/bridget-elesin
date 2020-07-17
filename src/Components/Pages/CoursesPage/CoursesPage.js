import React from 'react'
import Container from 'Components/Utilities/Layout/Containers/Container'
import Column from 'Components/Utilities/Layout/Containers/Column'
import Section from 'Components/Utilities/Layout/Containers/Section'
import Row from 'Components/Utilities/Layout/Containers/Row'
import CoursesList from "Components/Entities/Courses/CoursesList"
import CoursePreview from "Components/Entities/Courses/Renders/CoursePreview"

export default function CoursesPage () {
  return (
    <Section>
      <Container>
        <Row>
        <Column className="text-center">
          <h1>ALL MY COURSES</h1>
          <p>
            Find all my courses here.
          </p>
        </Column>
        <Column>
          <CoursesList
            layout={{
              component: React.Fragment,
              props: {}
            }}
            renderAs={CoursePreview}
          />
        </Column>
        </Row>
      </Container>
    </Section>
  )
}
