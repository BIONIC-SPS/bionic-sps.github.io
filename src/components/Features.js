import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🔬',
      title: 'Decoding Brain Dynamics Across Scales',
      tagline: 'From neural activity to meaningful spatiotemporal patterns',
      description: 'We capture large-scale neural activity in healthy and brain-damaged models to understand how brain networks function, fail, and recover. Using high-density electrophysiology, stimulation, and advanced analysis, we build a unique library of multiscale neural dynamics.',
      list: [
        'Large-scale in vivo datasets (spikes & LFP)',
        'Multiscale analysis of activity, connectivity, and recovery',
        'Biological ground truth for modeling and validation'
      ]
    },
    {
      icon: '🧠',
      title: 'Building Biomimetic Neural Intelligence',
      tagline: 'From biological data to realistic spiking neural networks',
      description: 'We translate real brain dynamics into biologically grounded spiking neural network models. By tuning neurons, synapses, connectivity, and plasticity, we reproduce healthy and damaged brain behavior in both software and real-time hardware.',
      list: [
        'Data-driven SNN models of brain networks',
        'Optimization of neural and synaptic parameters',
        'Real-time neuromorphic hardware implementations'
      ]
    },
    {
      icon: '🌐',
      title: 'Adaptive Biohybrid Neuromorphic Systems',
      tagline: 'Closing the loop between living and artificial networks',
      description: 'We integrate biological and artificial neural systems into a unified real-time platform. Through closed-loop interaction and damage-response experiments, we demonstrate adaptability, resilience, and self-repair.',
      list: [
        'Real-time encoding of biological signals into spikes',
        'Bidirectional interaction between brain tissue and SNNs',
        'Validation of adaptability and resilience under damage'
      ]
    }
  ];

  return (
    <section id="features" className="section has-background-light">
      <div className="container">
        <h2 className="title is-2 has-text-centered has-text-dark mb-6">Research Highlights</h2>
        <div className="columns is-multiline">
          {features.map((feature, index) => (
            <div key={index} className="column is-4">
              <div className="card" style={{ height: '100%' }}>
                <div className="card-content">
                  <div className="content">
                    <div className="is-size-1 mb-4">{feature.icon}</div>
                    <h3 className="title is-4 has-text-dark">{feature.title}</h3>
                    <p className="subtitle is-6 has-text-grey-dark mb-4">
                      {feature.tagline}
                    </p>
                    <p>{feature.description}</p>
                    <ul className="mt-4">
                      {feature.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
