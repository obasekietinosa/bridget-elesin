import React from "react"
import PostList from "Components/Entities/Posts/PostList"
import CardColumns from "Components/Utilities/Layout/Containers/CardColumns"
import PostPreviewCard from "Components/Entities/Posts/Renders/PostPreviewCard"
import { Link } from "react-router-dom"

export default function MostRecentPosts() {
  return (
    <section className="MostRecentPosts">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center">From My Blog</h3>
            <PostList
              limit={6}
              layout={{
                component: CardColumns,
                props: {}
              }}
              renderAs={PostPreviewCard}
            />
            <center>
              <Link to="/posts" className="btn btn-primary">See More Posts</Link>
            </center>
          </div>
        </div>
      </div>
    </section>
  )
}