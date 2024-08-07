import * as React from 'react';
import { Helmet } from 'react-helmet';

export const AutomatedRulesPage = () => {
  return (
    <>
      <Helmet>
        <title data-test="rules-page-title">Cryostat | Automated Rules</title>
      </Helmet>
      <iframe src="http://localhost:9091/rules" style={{ height: '100%' }} />
    </>
  );
};

export default AutomatedRulesPage;
