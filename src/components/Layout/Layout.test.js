/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import App from '../App';
import Layout from './Layout';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {};

describe('Layout', () => {
  it('renders children correctly', () => {
    const store = mockStore(initialState);

    const apolloClient = new ApolloClient({
      networkInterface: {
        async query() {
          // Just an empty dataset for testing purposes for now.
          return { data: [] };
        },
      },
      queryDeduplication: true,
    });

    const wrapper = renderer
      .create(
        <ApolloProvider client={apolloClient}>
          <App context={{ insertCss: () => {}, store }}>
            <Layout>
              <div className="child" />
            </Layout>
          </App>
        </ApolloProvider>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
