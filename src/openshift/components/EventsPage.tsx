import * as React from 'react';
import { Helmet } from 'react-helmet';

export const EventsPage = () => {
  return (
    <>
      <Helmet>
        <title data-test="events-page-title">Cryostat | Events</title>
      </Helmet>
      <iframe src="http://localhost:9091/events" style={{ height: '100%' }} />
    </>
  );
};

export default EventsPage;
