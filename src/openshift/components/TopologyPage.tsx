import * as React from 'react';
import { Helmet } from 'react-helmet';

export const TopologyPage = () => {
  return (
    <>
      <Helmet>
        <title data-test="Topology-page-title">Cryostat | Topology</title>
      </Helmet>
      <iframe src="http://localhost:9091/topology" style={{ height: '100%' }} />
    </>
  );
};

export default TopologyPage;
