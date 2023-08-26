import React from 'react';
import Layout from '../../components/organisms/Layout';
import CenteredLayout from '../../components/organisms/CenteredLayout';

const Bookmarks: React.FC = () => {
  return (
    <Layout>
      <CenteredLayout headerTitle={'Bookmarks View'}>
        <div className="items-center px-10 pt-10">
          <iframe
            className="border-radius:12px"
            src="https://open.spotify.com/embed/track/32hpq6FjVS2QrE5Z0q8Ffa?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div className="items-center px-10 pt-10">
          <iframe
            className="border-radius:12px"
            src="https://open.spotify.com/embed/track/4bkdXYkvmAAji6VWevl6Ve?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div className="items-center px-10 pt-10">
          <iframe
            className="border-radius:12px"
            src="https://open.spotify.com/embed/track/4w5uos4sTvjQeg8ofXtBm8?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </CenteredLayout>
    </Layout>
  );
};

export default Bookmarks;
