import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import StyleRoundedIcon from '@mui/icons-material/StyleRounded';
import AccessibilityNewRounded from '@mui/icons-material/AccessibilityNewRounded';
import PhishingRoundedIcon from '@mui/icons-material/PhishingRounded';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import { InfoCard } from '@mui/docs/InfoCard';

const content = [
  {
    icon: <StyleRoundedIcon color="primary" />,
    title: 'Proposal Submission',
    description: 'Users can submit proposals for changes or additions to the EpicChain ecosystem. Proposals can range from protocol upgrades to fund allocations and strategic initiatives.',
    link: '/base-ui/getting-started/',
  },
  {
    icon: <PhishingRoundedIcon color="primary" />,
    title: 'Voting Mechanism',
    description:
      "Token holders can vote on proposed governance decisions, with each token typically representing one vote. This mechanism ensures that decisions are made based on the consensus of the community.",
    link: '/base-ui/getting-started/usage/#components-vs-hooks',
  },
  {
    icon: <AccessibilityNewRounded color="primary" />,
    title: 'Delegated Voting',
    description:
      'Users can delegate their voting power to other participants, allowing for more efficient decision-making and representation.',
    link: '/base-ui/getting-started/accessibility/',
  },
];

export default function BaseUISummary() {
  return (
    <Section cozy>
      <SectionHeadline
        alwaysCenter
        title={
          <Typography variant="h2" sx={{ mt: 1 }}>
            EpicChain 
            <br /> Decentralized <GradientText>Governance </GradientText> Module
          </Typography>
        }
        description="The EpicChain Decentralized Governance Module is a critical component of the EpicChain ecosystem, enabling decentralized decision-making and community participation in governance processes."
      />
      <Box sx={{ mt: 6 }}>
        <Grid container spacing={3}>
          {content.map(({ icon, title, description, link }) => (
            <Grid key={title} xs={12} md={4}>
              <InfoCard link={link} title={title} icon={icon} description={description} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Section>
  );
}
