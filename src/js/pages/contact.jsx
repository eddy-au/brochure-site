// import { useContext, useEffect } from 'react';
// import Context from '../components/context';
import Footer from '../components/footer';
import Preloader from '../components/preloader';
import Punc from '../components/punc';
import SEO from '../components/seo';
import { namespace as ns, organisation as org } from '../../config';

const Contact = () => {
  // const { setIsReady } = useContext(Context);

  // useEffect(() => {
  //   setIsReady(true);
  // }, []);

  return (
    <>
      <SEO
        description={`Get in touch to see how ${org}'s proprietary technology and data platform can help deliver high quality and meaningful online programmes at scale.`}
        title="contact"
      />
      <main>
        <h1
          style={{
            display: 'none',
            visibility: 'hidden',
          }}
        >
          Contact
        </h1>
        <Preloader />
        <h2 className={ns + '-h2'}>
          Speak with eddy
          <Punc />
        </h2>
        <iframe
          allowtransparency="true"
          frameBorder="0"
          src="https://eddyonline.wufoo.com/embed/m1ezq4pq1mm075w/"
        ></iframe>
        <Footer copyrightYear={2021} />
      </main>
    </>
  );
};

export { Contact as default };
