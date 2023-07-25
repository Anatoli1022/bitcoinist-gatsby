import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

import Hero from 'components/pages/home/hero/hero';
import Advantages from 'components/pages/home/advantages';
import Deliver from 'components/pages/home/deliver/deliver';
import Things from 'components/pages/home/things';
import Web from 'components/pages/home/web';
import Trust from 'components/pages/home/trust';
import Projects from 'components/pages/home/projects';
import Technologies from 'components/pages/home/technologies';
import Team from 'components/pages/home/team';
import TeamBuilds from 'components/pages/home/teamBuilds';
import Tell from 'components/pages/home/tell';

const HomePage = () => (
  <Layout>
    <Hero />
    <Advantages />
    <Deliver />
    <Things />
    <Web />
    <Trust />
    <Projects />
    <Technologies />
    <Team />
    <TeamBuilds />
    <Tell />
  </Layout>
);

export default HomePage;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
