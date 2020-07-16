import React from 'react'
import Container from 'Components/Utilities/Layout/Containers/Container'
import Column from 'Components/Utilities/Layout/Containers/Column'
import Section from 'Components/Utilities/Layout/Containers/Section'
import Row from 'Components/Utilities/Layout/Containers/Row'
import BooksList from "Components/Entities/Books/BooksList"
import BookPreview from "Components/Entities/Books/Renders/BookPreview"

export default function BooksPage () {
  return (
    <Section>
      <Container>
        <Row>
        <Column className="text-center">
          <h1>ALL MY BOOKS</h1>
          <p>
            Find all my books and magazine publications here.
          </p>
        </Column>
        <Column>
          <BooksList
            layout={{
              component: React.Fragment,
              props: {}
            }}
            renderAs={BookPreview}
          />
        </Column>
        </Row>
      </Container>
    </Section>
  )
}
