import React from 'react';
import Layout from '../../components/organisms/Layout';
import CenteredLayout from '../../components/organisms/CenteredLayout';

const Messages: React.FC = () => {
  return (
    <Layout>
      <CenteredLayout headerTitle={'Message View'} />
    </Layout>
  );
};

export default Messages;
