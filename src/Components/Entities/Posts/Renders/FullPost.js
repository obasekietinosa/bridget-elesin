import React from 'react'
import Helmet from 'react-helmet'
import PostDate from './PostDate'
import PostAuthor from './PostAuthor'
import SocialShare from 'Components/Utilities/SocialShare/SocialShare'
import SyntaxHighlight from 'Components/Utilities/SyntaxHighlight/SyntaxHighlight'
import { htmlDecode } from 'Helpers/Helpers'
import './FullPost.css'

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
      <header>
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-12 mb-3">
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
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="blog-content">
              <SyntaxHighlight content={post.content} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h5>Share this article:</h5>
            <SocialShare text={"Read " + htmlDecode(post.title) + " on BridgetElesin.com"} url={`https://bridgetelesin.com/posts/${post.slug}`} tag={"BridgetElesinTalks"} />
          </div>
        </div>
      </div>
    </div>
  )
}
