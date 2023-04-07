import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

import Web from 'components/pages/home/web';
import Trust from 'components/pages/home/trust';
import Technologies from 'components/pages/home/technologies';
import Team from 'components/pages/home/team';

const HomePage = () => (
  <Layout>
    <Web />
    <Trust />
    <Technologies />
    <Team />
  </Layout>
);

export default HomePage;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
