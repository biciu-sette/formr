import React, { useState, useEffect } from 'react';
import { IndiceProvider } from '../contexts';

import '../styles/bootstrap.min.css';
import '../styles/animate.min.css';
import '../styles/boxicons.min.css';
import '../styles/flaticon.css';
import '../styles/fullpagemenu.css';
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import '../styles/style.css';
import '../styles/responsive.css';

import Layout from '../components/_App/Layout';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      <Layout>

        <IndiceProvider>
   
          <Component {...pageProps} />

          <Loader loading={loading} />

          <GoTop />

        </IndiceProvider>

      </Layout>
    </>
  );
}

export default MyApp;
