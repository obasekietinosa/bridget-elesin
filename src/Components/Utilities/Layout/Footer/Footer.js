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
          <Column size={{sm: "3", md:"6"}}>
            <h6>Bridget Elesin</h6>
            <p>
              Bridget Elesin teaches individuals how to live their best life with transformational results.
            </p>
            <Link className="btn btn-primary" to="/about">About</Link>
          </Column>
          <Column size={{sm: "3", md:"2"}}>
            <h6>Blog</h6>
            <p>
              <Link to="/contribute">Contribute</Link>
            </p>
            <p>
              <Link to="/credits">Credits</Link>
            </p>
          </Column>
          <Column size={{sm: "3", md:"2"}}>
            <h6>Categories</h6>
            <p>
              <Link to="/categories/music">Music</Link>
            </p>
            <p>
              <Link to="/categories/insights">Insights</Link>
            </p>
            <p>
              <Link to="/categories/conversation">Conversation</Link>
            </p>
            <p>
              <Link to="/categories/community">Community</Link>
            </p>
          </Column>
          <Column size={{sm: "3", md:"2"}}>
            <h6>Links</h6>
            <p>
              <a href="https://t.me/wetalksound">Our Community</a>
            </p>
            <p>
              <a href="https://wtxtra.agency">WTXtra</a>
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