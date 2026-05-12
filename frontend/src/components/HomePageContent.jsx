import React from 'react';
import Hero from './Hero';
import ScrollIndicator from './ScrollIndicator';
import RecentProjects from './RecentProjects';

const HomePageContent = ({ slides, recentProjects }) => {
  return (
    <>
      <div className="home-hero-viewport">
        <Hero slides={slides} />
        <ScrollIndicator />
      </div>
      <RecentProjects projects={recentProjects} />
    </>
  );
};

export default HomePageContent;
