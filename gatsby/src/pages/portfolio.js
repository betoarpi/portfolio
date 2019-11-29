import React from "react";
import SEO from "../components/seo"
import Layout from "../components/layout";

const Portfolio = () => {
  return (
    <Layout>
      <SEO title="Rob Arroyo's portfolio" />
      <article className="portfolio--container">
        <h1 className="portfolio__title">Portfolio</h1>
        <div className="portfolio-list">
          <a href="/#" className="portfolio-item">
            <figure className="item-thumbnail">
              <img src="#" alt="project name" />
              <mark className="caption">project name</mark>
            </figure>
            <span className="portfolio-link"></span>
          </a>
        </div>
      </article>
    </Layout>
  );
};

export default Portfolio;