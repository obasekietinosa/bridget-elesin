import React, { Component } from 'react'
// import Loading from 'Components/Utilities/Loading/Loading'

export default class BooksList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      books: [],
      status: "BOOKS_LOADING"
    }
  }

  componentDidMount() {
    if (! this.context.booksLoaded) {
      this.getBooks(this.props.limit)
    }
  }

  getBooks = (limit = 50) => {
    fetch('https://refactored-octo-giggle.firebaseio.com/books.json')
      .then(res => res.json())
      .then(data => {
        let books = Object.values(data)
        this.setState({books, status: 'BOOKS_LOADED'})
      })
  }

  render() {
    let books = this.props.books ?? this.state.books ?? [];
    const Book = this.props.renderAs
    const Layout = this.props.layout.component
    return (
      <Layout {...this.props.layout.props} >
        {
          books.map((book, key) => (
              <Book 
                key={key}
                book={{
                  title: book.title,
                  image: book.image,
                  description: book.description,
                  price: book.price,
                  link: book.link
                }}
             />
            )
          )
        }
      </Layout>
    )
  }
}
