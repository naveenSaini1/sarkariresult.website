// pages/_error.js
import React from 'react';
import Link from 'next/link';

const ErrorPage = ({ statusCode }) => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>{statusCode ? `Error ${statusCode}` : 'Client Error'}</h1>
      <p>Oops! Something went wrong. Please try again later.</p>
      <Link href="/">
        <a>Go back to Home</a>
      </Link>
    </div>
  );
};

// Custom error handling on server-side and client-side
ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
