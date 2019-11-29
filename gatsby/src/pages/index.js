import React from 'react'

import Layout from '../components/layout'
import RobSelfie from '../images/rob-selfie.jpg'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='About Me' />
    <figure className='selfie'>
      <img src={RobSelfie} alt='Rob Selfie' />
    </figure>

    <article className='content'>
      <h1 className='name'><span>Hello, I'm </span> Rob Arroyo</h1>
      <h2 className='title'>
        <i className='fa fa-terminal'></i> / UI_Designer / Frontend_Developer (master): $
        </h2>
      <p>
        I'm a designer who loves coding! I got a BA in Design for Graphic
        Communication at the University of Guadalajara, Mexico. I
        specialized in Web Design &amp; Development when I discovered that I
        love crafting good user experiences.
        </p>
      <p>
        Check out my portfolio. If you like something and would like to work
        with me or are interested in getting in touch, don't hesitate to
        visit the contact tab to drop me a message.
        </p>
    </article>
    <a href='/#' className='next'><i className='fas fa-angle-right'></i></a>
  </Layout>
)

export default IndexPage
