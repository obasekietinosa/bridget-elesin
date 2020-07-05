import React, { Component } from 'react'
import './Home.css'
import Header from './Sections/Header/Header';
import SubscribeCTA from './Sections/SubscribeCTA/SubscribeCTA';
import MostRecentPosts from './Sections/MostRecentPosts/MostRecentPosts';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <SubscribeCTA />
        <MostRecentPosts />
      </div>
    )
  }
}
