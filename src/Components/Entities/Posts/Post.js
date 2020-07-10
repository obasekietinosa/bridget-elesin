import React, { Component, Fragment } from 'react'
import BlogContext from 'Components/Contexts/BlogContext'
import Loading from 'Components/Utilities/Loading/Loading'
import Default from 'Components/Pages/DefaultPage/DefaultPage'
import { strip_tags } from 'Helpers/Helpers'

export default class Post extends Component {
  static contextType = BlogContext

  render() {
    let content = null
    let status = "POST_LOADING"
    let post = {}

    if (this.context.currentPost?.id === this.props.match.params.slug) {
      post = this.context.currentPost
      status = "POST_LOADED"
    }
    else if (this.context.notFound) {
      status = "POST_NOT_FOUND"
    }
    else{
      this.context.getPost(this.props.match.params.slug)
    }

    switch (status) {
      case "POST_LOADING":
        content = <Loading />
        break;
      case "POST_LOADED":
        const Post = this.props.renderAs
        const Layout = this.props.layout.component
        content = (
          <Layout {...this.props.layout.props} >
            <Post post={{
              title: post.title,
              excerpt: `${strip_tags(post.content).substr(0, 150)}...`,
              image: post['images'][0]['url'],
              slug: post.id,
              category: "",
              date: post.published,
              author: {
                name: post.author.displayName,
                slug: post.author.id,
                image: post.author.image.url
              },
              content: post.content
            }} />
          </Layout>
        )
        break;
      case "POST_NOT_FOUND":
        content = <Default />
        break
      default:
        break;
    }
    return (
      <Fragment>
        { content }
      </Fragment>
    )
  }
}