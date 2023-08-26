import React from 'react';
import MainContentArea from '../../components/organisms/MainContentArea';
import Layout from '../../components/organisms/Layout';
import CenteredLayout from '../../components/organisms/CenteredLayout';

const Home: React.FC = () => {
  return (
    <Layout>
      <CenteredLayout headerTitle={'Home'}>
        <MainContentArea />
      </CenteredLayout>
    </Layout>
  );
};

export default Home;
