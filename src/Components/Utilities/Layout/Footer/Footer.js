import React from 'react'
import './Footer.css'
import Row from 'Components/Utilities/Layout/Containers/Row'
import { Link } from 'react-router-dom'
import Container from 'Components/Utilities/Layout/Containers/Container'
import Column from 'Components/Utilities/Layout/Containers/Column'

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Column size={{sm: "6"}}>
            <h6>Bridget Elesin</h6>
            <p>
              I am Bridget Elesin and I teach individuals how to live their best life with transformational results.
            </p>
            <Link className="btn btn-primary" to="/about">About</Link>
          </Column>
          <Column size={{sm: "3"}}>
            <h6>Links</h6>
            <p>
              <Link to="/posts">Blog</Link>
            </p>
            <p>
              <a href="https://anchor.fm/teamelesin" rel="noopener noreferrer" target="_blank">Podcast</a>
            </p>
            <p>
              <Link to="/courses">Courses</Link>
            </p>
            <p>
              <Link to="/books">Books</Link>
            </p>
          </Column>
          <Column size={{sm: "3"}}>
            <h6>Connect</h6>
            <p>
              <Link to="/contact">Contact Me</Link>
            </p>
            <p>
              <a href="mailto:me@bridgetelesin.com" rel="noopener noreferrer" target="_blank">Email</a>
            </p>
            <p>
              <a href="https://facebook.com/bridgetelesin" rel="noopener noreferrer" target="_blank">Facebook</a>
            </p>
            <p>
              <a href="https://twitter.com/bridgetelesin" rel="noopener noreferrer" target="_blank">Twitter</a>
            </p>
            <p>
              <a href="https://instagram.com/bridgetelesin" rel="noopener noreferrer" target="_blank">Instagram</a>
            </p>
          </Column>
        </Row>
        <Row>
          <div className="col-12 text-center">
            <p>
              &copy; 2020, Bridget Elesin
            </p>
          </div>
        </Row>
      </Container>
    </footer>
  )
}