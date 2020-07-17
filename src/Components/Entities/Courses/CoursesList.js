import React, { Component } from 'react'
// import Loading from 'Components/Utilities/Loading/Loading'

export default class CoursesList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      courses: [],
      status: "COURSES_LOADING"
    }
  }

  componentDidMount() {
    if (! this.context.coursesLoaded) {
      this.getCourses(this.props.limit)
    }
  }

  getCourses = (limit = 50) => {
    fetch('https://refactored-octo-giggle.firebaseio.com/courses.json')
      .then(res => res.json())
      .then(data => {
        let courses = Object.values(data)
        this.setState({courses, status: 'COURSES_LOADED'})
      })
  }

  render() {
    let courses = this.props.courses ?? this.state.courses ?? [];
    const Course = this.props.renderAs
    const Layout = this.props.layout.component
    return (
      <Layout {...this.props.layout.props} >
        {
          courses.map((course, key) => (
              <Course 
                key={key}
                course={{
                  title: course.title,
                  image: course.image,
                  description: course.description,
                  price: course.price,
                  link: course.link
                }}
             />
            )
          )
        }
      </Layout>
    )
  }
}
