import React from 'react';

const Dissemination = () => {
  const speakers = [
    'Prof. Federico Barban — University of Genova, Italy',
    'Dr. Marta Carè — IRCCS Ospedale Policlinico San Martino, Italy',
    'Dr. Mark Iskarous — University of Chicago, USA',
    'Prof. Elisa Donati — Institute of Neuroinformatics, UZH & ETH Zurich, Switzerland',
    'Prof. Luke Osborn — Case Western Reserve University, USA'
  ];

  return (
    <section id="dissemination" className="section has-background-light">
      <div className="container">
        <h2 className="title is-2 has-text-centered has-text-dark mb-6">Publications & Dissemination</h2>
        <div className="columns is-variable is-8">
          <div className="column is-7">
            <div className="content is-medium">
              <p>
                The BIONIC project is committed to open science and broad dissemination of its results. 
                Scientific findings, datasets, and software tools developed throughout the project will be 
                shared with the research community, end-users, and the general public.
              </p>
              <ul>
                <li>Peer-reviewed journal publications and conference papers</li>
                <li>Open-access software and datasets</li>
                <li>Scientific workshops, conferences, and public events</li>
                <li>Engagement with end-users and technology transfer offices</li>
              </ul>

              <div className="box mt-5">
                <h3 className="title is-5">Featured Workshop</h3>
                <p className="has-text-weight-bold">
                  A Neuromorphic and Neurostimulation Approach for Sensorimotor Restoration
                </p>
                <p className="mt-3">
                  This workshop addresses the challenge of restoring meaningful sensorimotor integration 
                  through peripheral nerve stimulation and intracortical microstimulation (ICMS), with a 
                  focus on neuromorphic and closed-loop approaches for rehabilitation and neuroprosthetics.
                </p>
                <p className="has-text-weight-bold mt-4">Speakers include:</p>
                <ul>
                  {speakers.map((speaker, index) => (
                    <li key={index}>{speaker}</li>
                  ))}
                </ul>
                <a 
                  href="https://neuro.embs.org/2025/satellite-workshops/#workshop-8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-primary mt-4"
                >
                  View Workshop Details
                </a>
              </div>
            </div>
          </div>
          <div className="column is-5">
            <div className="hero is-primary is-fullheight" style={{ borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="hero-body">
                <p className="title is-1 has-text-centered has-text-white">Dissemination</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dissemination;
