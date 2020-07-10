import React, { Component } from 'react';
import './App.css';
import Navbar from 'Components/Utilities/Layout/Navbar/Navbar';
import { Switch, Route, BrowserRouter, StaticRouter } from 'react-router-dom';
import HomePage from 'Components/Pages/HomePage/HomePage';
import AllPostsPage from 'Components/Pages/AllPostsPage/AllPostsPage';
import PostPage from 'Components/Pages/PostPage/PostPage';
import CategoryPage from 'Components/Pages/CategoryPage/CategoryPage';
import DefaultPage from 'Components/Pages/DefaultPage/DefaultPage';
import { BlogProvider } from 'Components/Contexts/BlogContext';
import BlogService from 'Services/BlogService';
import Helmet from 'react-helmet'
import Footer from 'Components/Utilities/Layout/Footer/Footer';
import ScrollToTop from 'Components/Utilities/Routing/ScrollToTop'

const AppRoutes = () => (
  <>
    <Navbar />
    <ScrollToTop />
    <main>
      <Switch>
        <Route exact path="/" >
          <HomePage />
        </Route>
        <Route exact path='/posts'>
          <AllPostsPage />
        </Route>
        <Route exact path='/posts/:slug' component={PostPage} />
        <Route exact path='/categories/:slug' component={CategoryPage} />
        <Route component={DefaultPage} />
      </Switch>
    </main>
    <Footer />
  </>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.blogService = new BlogService()
    this.state = {
      postsLoaded: true,
      posts: this.props.initialState.posts ?? [],
      currentPost: this.props.initialState.currentPost,
      categories: this.props.initialState.categories ?? [],
      categoriesLoaded: true,
      currentCategory: this.props.initialState.currentCategory
    };
  }

  getCategories = () => {
    this.blogService.getCategories()
      .then(data => {
        let categories = data
        let categoriesLoaded = true
        this.setState({ categories, categoriesLoaded, error: "" })
      })
      .catch(error => this.setState({ error: "There was an error fetching categories. Please try again." }))
  }

  getCategoryWithPosts = (categoryId) => {
    this.blogService.getCategoryWithPosts(categoryId)
      .then(data => {
        let currentCategory = data
        this.setState({ currentCategory })
      })
  }

  getPosts = (limit=100) => {
    this.blogService.getPosts(limit)
      .then(data => {
        let posts = data
        let postsLoaded = true
        this.setState({ posts, postsLoaded, error: "" })
      })
      .catch(error => this.setState({ error: "There was an error fetching posts. Please try again." }))
  }

  getPost = (slug) => {
    if (slug === this.state.currentPost?.slug) {
      return
    }

    for (let post of this.state.posts) {
      if (slug === post.slug) {
        this.setState({ currentPost: post })
        return
      }
    }

    this.blogService.getPostBySlug(slug)
      .then(data => {
        if (!data) {
          this.setState({ notFound: true })
          return
        }
        console.log(data)
        let currentPost = data
        this.setState({ currentPost, error: "" })
      })
      .catch(error => console.log(error))
  }

  render() {

    return (
      <BlogProvider
        value={
          {
            categories: this.state.categories,
            posts: this.state.posts,
            currentPost: this.state.currentPost,
            currentCategory: this.state.currentCategory,
            notFound: this.state.notFound,
            getPosts: this.getPosts,
            getCategories: this.getCategories,
            getPost: this.getPost,
            getCategoryWithPosts: this.getCategoryWithPosts,
          }
        }
      >
        <Helmet>
          <title>Live Your Best Life - Bridget Elesin</title>
          <meta property="og:title" content="Live Your Best Life - Bridget Elesin" />
          <meta property="og:description"
            content="Bridget Elesin teaches individuals how to live their best life with transformational results. She is passionate about the family and ensuring men become better fathers while working with their wives as a team to build the family." />
          <meta name="description" content="Bridget Elesin teaches individuals how to live their best life with transformational results. She is passionate about the family and ensuring men become better fathers while working with their wives as a team to build the family." />
          <meta property="og:image" content="https://blog-admin.wetalksound.co/extra/thumbnail.png" />
          <meta property="og:url" content="https://blog.wetalksound.co" />
          <meta name="twitter:title" content="Live Your Best Life - Bridget Elesin" />
          <meta name="twitter:description"
            content="Bridget Elesin teaches individuals how to live their best life with transformational results. She is passionate about the family and ensuring men become better fathers while working with their wives as a team to build the family." />
          <meta name="twitter:image" content="https://blog-admin.wetalksound.co/extra/thumbnail.png" />
          <meta property="og:site_name" content="Live Your Best Life - Bridget Elesin" />
          <meta name="twitter:image:alt" content="Live Your Best Life - Bridget Elesin" />
        </Helmet>
        <div className="App">
          {console.log("Location", this.props.location)}
          {
            this.props.location ?
              <StaticRouter location={this.props.location} >
                <AppRoutes />
              </StaticRouter>
              :
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
          }
        </div>
      </BlogProvider>
    );
  }
}

export default App;
