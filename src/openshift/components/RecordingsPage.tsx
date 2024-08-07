import * as React from 'react';
import { Helmet } from 'react-helmet';

export const RecordingsPage = () => {
  return (
    <>
      <Helmet>
        <title data-test="recordings-page-title">Cryostat | Recordings</title>
      </Helmet>
      <iframe src="http://localhost:9091/recordings" style={{ height: '100%' }} />
    </>
  );
};

export default RecordingsPage;
