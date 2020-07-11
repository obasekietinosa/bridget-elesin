import React, { Component } from 'react'
import './Home.css'
import Header from './Sections/Header/Header';
import SubscribeCTA from './Sections/SubscribeCTA/SubscribeCTA';
import AboutMe from './Sections/AboutMe/AboutMe';
import MostRecentPosts from 'Components/Pages/HomePage/Sections/MostRecentPosts/MostRecentPosts';
import FeaturedPodcast from 'Components/Pages/HomePage/Sections/FeaturedPodcast/FeaturedPodcast';
import BooksCTA from 'Components/Pages/HomePage/Sections/BooksCTA/BooksCTA';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <SubscribeCTA />
        <AboutMe />
        <MostRecentPosts />
        <FeaturedPodcast />
        <BooksCTA />
      </div>
    )
  }
}
