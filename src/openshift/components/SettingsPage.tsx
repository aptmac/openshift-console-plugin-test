import * as React from 'react';
import { Helmet } from 'react-helmet';

export const SettingsPage = () => {
  return (
    <>
      <Helmet>
        <title data-test="archives-page-title">Cryostat | Settings</title>
      </Helmet>
      <iframe src="http://localhost:9091/settings" style={{ height: '100%' }} />
    </>
  );
};

export default SettingsPage;
