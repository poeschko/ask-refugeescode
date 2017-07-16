import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action() {
  // const resp = await fetch('/graphql', {
  //   body: JSON.stringify({
  //     query: '{questions{id,title,videoUrl},me{email}}',
  //   }),
  // });
  // const { data } = await resp.json();
  // if (!data || !data.questions || !data.me) {
  //   throw new Error('Failed to load data.');
  // }
  return {
    chunks: ['home'],
    title: 'Ask refugees{code}',
    component: (
      <Layout>
        <Home />
      </Layout>
    ),
  };
}

export default action;
