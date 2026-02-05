import React from 'react';

const Team = () => {
  const partners = [
    {
      name: 'Università di Genova',
      url: 'https://dibris.unige.it/en',
      logo: '/assets/images/unige-logo.svg'
    },
    {
      name: 'Universität Zürich',
      url: 'https://www.ini.uzh.ch/en.html',
      logo: '/assets/images/uzh-logo.svg'
    },
    {
      name: 'University of Bordeaux',
      url: 'https://www.ims-bordeaux.fr/',
      logo: '/assets/images/bordeaux-logo.svg'
    }
  ];

  return (
    <section id="team" className="section">
      <div className="container">
        <h2 className="title is-2 has-text-centered has-text-dark mb-6">Our Team</h2>
        <div className="content is-medium has-text-centered">
          <p style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
            The BIONIC project is led by an interdisciplinary team of researchers from partner institutions, combining expertise 
            in molecular biology, computational science, and data analytics. We are committed to pushing the boundaries 
            of what's possible at the intersection of biology and technology.
          </p>
          <a 
            href="https://github.com/barbaLab/BIONIC" 
            className="button is-primary is-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>

          <div className="mt-6">
            <h3 className="title is-4 has-text-dark mb-5">Network Partners</h3>
            <div className="columns is-centered">
              {partners.map((partner, index) => (
                <div key={index} className="column is-4">
                  <a 
                    href={partner.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="box"
                    style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
                  >
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      style={{ maxHeight: '100px', maxWidth: '200px', marginBottom: '1rem' }}
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <p className="has-text-weight-semibold">{partner.name}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
