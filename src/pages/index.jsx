import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

import Advantages from 'components/pages/home/advantages';
import Web from 'components/pages/home/web';
import Trust from 'components/pages/home/trust';
import Projects from 'components/pages/home/projects';
import Technologies from 'components/pages/home/technologies';
import Team from 'components/pages/home/team';

const HomePage = () => (
  <Layout>
    <Advantages />
    <Web />
    <Trust />
    <Projects />
    <Technologies />
    <Team />
  </Layout>
);

export default HomePage;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
