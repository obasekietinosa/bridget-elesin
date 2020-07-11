import React, { Component } from 'react'
// import Loading from 'Components/Utilities/Loading/Loading'
import BlogContext from 'Components/Contexts/BlogContext'
import { strip_tags } from 'Helpers/Helpers'

export default class PostList extends Component {

  componentDidMount() {
    if (! this.context.postsLoaded) {
      this.context.getPosts(this.props.limit)
    }
  }

  static contextType = BlogContext

  render() {
    let posts = this.props.posts ?? this.context.posts ?? [];
    const Post = this.props.renderAs
    const Layout = this.props.layout.component
    return (
      <Layout {...this.props.layout.props} >
        {
          posts.map((post, key) => (
              <Post 
                key={key}
                post={{
                  title: post.title,
                  datePublished: post.published,
                  image: post['images']?.[0]['url'] ?? "https://services.etin.space/demos/bridgetelesin/BridgetElesin.png",
                  category: "",
                  excerpt: `${strip_tags(post.content).substr(0, 75)}...`,
                  author: post.author.displayName,
                  link: "/posts/" + post.id
                }}
             />
            )
          )
        }
      </Layout>
    )
  }
}
