import React from 'react';
import Banner from '../Banner';

function WonBanner({ attempts }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{attempts} guess(es)</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
