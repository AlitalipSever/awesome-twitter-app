import React from 'react';
import CV from '../../components/molecules/CV';
import Layout from '../../components/organisms/Layout';
import CenteredLayout from '../../components/organisms/CenteredLayout';

const Profile: React.FC = () => {
  return (
    <Layout>
      <CenteredLayout headerTitle={'Profile View'}>
        <CV />
      </CenteredLayout>
    </Layout>
  );
};

export default Profile;
