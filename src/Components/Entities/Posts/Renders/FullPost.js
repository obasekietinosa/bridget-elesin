import React from 'react'
import Helmet from 'react-helmet'
import PostDate from './PostDate'
import PostAuthor from './PostAuthor'
import SocialShare from 'Components/Utilities/SocialShare/SocialShare'
import SyntaxHighlight from 'Components/Utilities/SyntaxHighlight/SyntaxHighlight'
import { htmlDecode } from 'Helpers/Helpers'
import './FullPost.css'
import Container from 'Components/Utilities/Layout/Containers/Container'
import Row from 'Components/Utilities/Layout/Containers/Row'
import Column from 'Components/Utilities/Layout/Containers/Column'

export default function FullPost({ post }) {
  return (
    <div className="FullPost">
      <Helmet>
        <title>{htmlDecode(post.title)} - WeTalkSound</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${htmlDecode(post.title)} - WeTalkSound`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={`https://blog.wetalksound.co/posts/${post.slug}`} />
        <meta name="twitter:title" content={`${htmlDecode(post.title)} - WeTalkSound`} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <header style={{padding: "50px 0"}}>
        <Container>
          <Row className="align-items-md-center">
            <Column size="12" className="mb-3">
              <span className="category"><small>{post.category}</small></span>
              <h1
                dangerouslySetInnerHTML={{ __html: post.title }}
              >
              </h1>
              <p>
                <small>
                  <PostDate date={post.date} />
                </small>
              </p>
              <PostAuthor
                author={
                  {
                    name: post.author.name,
                    slug: post.author.slug,
                    avatar: post.author.image,
                  }
                }
              />
              <Row>
                <Column size="12">
                  <h5>Share this article:</h5>
                  <SocialShare text={"Read " + htmlDecode(post.title) + " on BridgetElesin.com"} url={`https://bridgetelesin.com/posts/${post.slug}`} tag={"BridgetElesinTalks"} />
                </Column>
              </Row>
            </Column>
          </Row>
        </Container>
      </header>
      <Container>
        <Row>
          <Column size="12">
            <div style={{padding: "50px 0"}} className="blog-content">
              <SyntaxHighlight content={post.content} />
            </div>
          </Column>
        </Row>
      </Container>
    </div>
  )
}
