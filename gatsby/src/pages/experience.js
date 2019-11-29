import React from 'react';
import SEO from '../components/seo'
import Layout from '../components/layout';

const Experience = () => {
  return (
    <Layout>
      <SEO title='My Experience' />
      <article classNameName='experience--container'>
        <h1 classNameName='experience__title'>Experience</h1>
        <div className="job-list">
          <div className="job-item" id="1">
            <figure className="company-logo">
              <img src="logo" alt="logo name" />
            </figure>
            <div className="job-information">
              <h3 className="job-name">job name</h3>
              <h4 className="job-title">job title</h4>
              <span className="job-location job-date-range">job location | job date-range</span>
            </div>
          </div>
        </div>
        <h2 className="experience-subtitle">Skills</h2>
        <div className="skill-list">
          <div className="skill-item">
            <i className="icon"></i>
            <span className="skill-level"><span className="skill-bar"></span></span>
            <p>skill name</p>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Experience;