import * as React from 'react';
import { Helmet } from 'react-helmet';

export const SecurityPage = () => {
  return (
    <>
      <Helmet>
        <title data-test="security-page-title">Cryostat | Security</title>
      </Helmet>
      <iframe src="http://localhost:9091/security" style={{ height: '100%' }} />
    </>
  );
};

export default SecurityPage;
