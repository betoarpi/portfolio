import React from 'react';
import SEO from '../components/seo'
import Layout from '../components/layout';

const Contact = () => {
  return (
    <Layout>
      <SEO title='Contact Rob Arroyo' />
      <article className='contact--container'>
        <h1 className='contact__title'>Contact Rob</h1>
        <p>I'm glad you are here. Feel free to send any inquiry you may have, share your thoughts about my portfolio or contact me for working together.</p>
        <ul className="social-media">
          <li><a href="https://www.linkedin.com/in/rob-arroyo/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="https://github.com/betoarpi" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
          <li><a href="https://twitter.com/betoarpi" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://instagram.com/betoarpi" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
        </ul>
        form here
      </article>
    </Layout>
  );
};

export default Contact;