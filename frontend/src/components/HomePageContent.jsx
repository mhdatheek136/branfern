import React from 'react';
import Hero from './Hero';
import ScrollIndicator from './ScrollIndicator';
import RecentProjects from './RecentProjects';

const HomePageContent = ({ slides, recentProjects }) => {
  return (
    <>
      <Hero slides={slides} />
      <ScrollIndicator />
      <RecentProjects projects={recentProjects} />
    </>
  );
};

export default HomePageContent;
