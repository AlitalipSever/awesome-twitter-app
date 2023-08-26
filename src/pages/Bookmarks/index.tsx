import React from 'react';
import Layout from '../../components/organisms/Layout';
import CenteredLayout from '../../components/organisms/CenteredLayout';

const Bookmarks: React.FC = () => {
  return (
    <Layout>
      <CenteredLayout headerTitle={'Bookmarks View'} />
    </Layout>
  );
};

export default Bookmarks;
