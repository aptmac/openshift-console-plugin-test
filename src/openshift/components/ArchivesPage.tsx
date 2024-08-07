import * as React from 'react';
import { Helmet } from 'react-helmet';

export const ArchivesPage = () => {
  return (
    <>
      <Helmet>
        <title data-test="archives-page-title">Cryostat | Archives</title>
      </Helmet>
      <iframe src="http://localhost:9091/archives" style={{ height: '100%' }} />
    </>
  );
};

export default ArchivesPage;
