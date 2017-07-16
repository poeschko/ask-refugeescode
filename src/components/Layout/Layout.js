// @flow

import React from 'react';
import { graphql, compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import Header from '../Header';
import Footer from '../Footer';
import userQuery from './me.graphql';

class Layout extends React.Component {
  props: {
    children: React.Element,
    data: {
      loading: boolean,
      me?: {
        email: string, // eslint-disable-line react/no-unused-prop-types
      },
    },
  };

  render() {
    const { loading, me } = this.props.data;
    return (
      <div>
        <Header userEmail={loading ? '' : me.email} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default compose(withStyles(normalizeCss, s), graphql(userQuery))(Layout);
