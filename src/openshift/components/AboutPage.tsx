import * as React from 'react';
import { Helmet } from 'react-helmet';

export const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title data-test="about-page-title">Cryostat | About</title>
      </Helmet>
      <iframe src="http://localhost:9091/about" style={{ height: '100%' }} />
    </>
  );
};

export default AboutPage;
