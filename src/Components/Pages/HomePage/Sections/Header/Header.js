import React, { Component } from 'react';
import './Header.css';
import Container from 'Components/Utilities/Layout/Containers/Container';
import Column from 'Components/Utilities/Layout/Containers/Column';
import Row from 'Components/Utilities/Layout/Containers/Row';
export default class Header extends Component{
  render() {
    return (
      <header className="Header text-center">
        <Container>
          <Row className="align-items-md-center">
            <Column size={{md: "6"}}>
                <img 
                  src="https://services.etin.space/demos/bridgetelesin/WHTY.png" 
                  className="img-fluid"
                  alt=""
                />
            </Column>
            <Column size={{md: "6"}}>
                <h1>Live Your Best Life!</h1>
                <h4>
                  •iConnect •iEncourage •iCoach •iMentor
                </h4>
                <p>
                  I am a firm believer in leaving everyone better than I met them.
                </p>
            </Column>
          </Row>
        </Container>
      </header>
    );
  }
};
