import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero is-primary is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1 has-text-weight-bold" style={{ fontSize: '3.5rem', letterSpacing: '1px' }}>
            BIONIC
          </h1>
          <p className="subtitle is-4" style={{ opacity: 0.95, margin: '1.5rem auto 2rem', maxWidth: '700px' }}>
            Biohybrid Intelligence for Next-generation Innovative Computing
          </p>
          <a href="#about" className="button is-white is-large has-text-primary has-text-weight-semibold" style={{ borderRadius: '50px', padding: '1rem 2.5rem' }}>
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
