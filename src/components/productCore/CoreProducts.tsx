import * as React from 'react';
import Grid from '@mui/material/Grid';
import Section from 'docs/src/layouts/Section';
import { InfoCard } from '@mui/docs/InfoCard';

// Note: All of the commented code will be put back in once logos for each Core product are done.

const content = [
  {
    // icon:
    title: 'Quantum-Resistant Encryption',
    description: "Quantum Guard Nexus utilizes advanced cryptographic techniques that are resistant to quantum attacks, ensuring the security and integrity of digital assets and transactions.",
    link: '/material-ui/',
  },
  {
    // icon:
    title: 'Dynamic Threat Intelligence',
    description:
      "Quantum Guard Nexus integrates dynamic threat intelligence to continuously monitor and analyze potential security threats.",
    link: '/joy-ui/getting-started/',
  },
  {
    // icon:
    title: 'Decentralized Security Governance',
    description:
      "Quantum Guard Nexus incorporates decentralized security governance, enabling token holders to participate in the decision-making process regarding security policies and measures.",
    link: '/base-ui/',
  },
  {
    // icon:
    title: 'Secure Smart Contract Execution',
    description:
      'Quantum Guard Nexus ensures the secure execution of smart contracts by implementing safeguards against common vulnerabilities.',
    link: '/system/getting-started/',
  },
];

export default function CoreProducts() {
  return (
    <Section cozy>
      <Grid container spacing={2}>
        {content.map(({ title, description, link }) => (
          <Grid key={title} item xs={12} md={6}>
            <InfoCard
              link={link}
              title={title}
              description={description}
              titleProps={{
                component: 'h2',
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
