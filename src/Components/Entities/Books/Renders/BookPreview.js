import React, { Component } from 'react'
import Row from 'Components/Utilities/Layout/Containers/Row'
import Column from 'Components/Utilities/Layout/Containers/Column'
import './BookPreview.css'

export default class BookPreview extends Component {
  render() {
    return (
      <div className="BookPreview">
      <Row className="align-items-sm-center">
        <Column size={{sm:4}}>
          <img src={this.props.book.image} className="img-fluid" alt={this.props.book.title} />
        </Column>
        <Column size={{sm:8}}>
          <a href={this.props.book.link} className="title">
              <h3 className="mb-0" dangerouslySetInnerHTML={{ __html: this.props.book.title }}>
              </h3>
          </a>
          <p className="mt-0">
          </p>
          <span>
            {this.props.book.price}
          </span>
          <div dangerouslySetInnerHTML={{ __html: this.props.book.description }}>
          </div>
          <div>
            <a href={this.props.book.link} className="btn btn-primary">
              Buy Now
            </a>
          </div>
        </Column>
      </Row>
      </div>
    )
  }
}
