import React, { Component } from 'react'
import Row from 'Components/Utilities/Layout/Containers/Row'
import Column from 'Components/Utilities/Layout/Containers/Column'
import './CoursePreview.css'

export default class CoursePreview extends Component {
  render() {
    return (
      <div className="CoursePreview">
      <Row className="align-items-sm-center">
        <Column size={{sm:4}}>
          <img src={this.props.course.image} className="img-fluid" alt={this.props.course.title} />
        </Column>
        <Column size={{sm:8}}>
          <a href={this.props.course.link} className="title">
              <h3 className="mb-0" dangerouslySetInnerHTML={{ __html: this.props.course.title }}>
              </h3>
          </a>
          <p className="mt-0">
          </p>
          <span>
            {this.props.course.price}
          </span>
          <div dangerouslySetInnerHTML={{ __html: this.props.course.description }}>
          </div>
          <div>
            <a href={this.props.course.link} className="btn btn-primary">
              Buy Now
            </a>
          </div>
        </Column>
      </Row>
      </div>
    )
  }
}
