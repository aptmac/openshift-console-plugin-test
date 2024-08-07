import * as React from 'react';
import { Helmet } from 'react-helmet';

export const DashboardPage = () => {
  return (
    <>
      <Helmet>
        <title data-test="dashboard-page-title">Cryostat | Dashboard</title>
      </Helmet>
      <iframe src="http://localhost:9091/dashboard" style={{ height: '100%' }} />
    </>
  );
};

export default DashboardPage;
