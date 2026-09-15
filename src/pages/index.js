import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="My API Docs"
      description="API documentation powered by Redocusaurus">
      <main style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1>My API Docs</h1>
        <p>API documentation powered by Redocusaurus.</p>
        <p>
          <a href="/Redocusaurus/docs/intro">Read the docs</a>
          {' | '}
          <a href="/Redocusaurus/api/">View the API reference</a>
        </p>
      </main>
    </Layout>
  );
}