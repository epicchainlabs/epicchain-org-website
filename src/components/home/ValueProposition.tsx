import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import InvertColorsRoundedIcon from '@mui/icons-material/InvertColorsRounded';
import HandymanRoundedIcon from '@mui/icons-material/HandymanRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import AccessibilityNewRounded from '@mui/icons-material/AccessibilityNewRounded';
import GradientText from 'docs/src/components/typography/GradientText';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import { InfoCard } from '@mui/docs/InfoCard';

const content = [
  {
    icon: <InvertColorsRoundedIcon fontSize="small" color="primary" />,
    title: 'Unparalleled Security',
    description:
      "EpicChain leverages state-of-the-art security protocols to safeguard digital assets, ensuring top-tier protection against cyber threats. Our robust security framework guarantees the safety and reliability of your transactions and data.",
  },
  {
    icon: <HandymanRoundedIcon fontSize="small" color="primary" />,
    title: 'Advanced Asset Management',
    description:
      'EpicChain provides sophisticated asset management tools that enable seamless and secure handling of digital assets. This feature offers enhanced control, efficiency, and security in managing your digital portfolio.',
  },
  {
    icon: <ArticleRoundedIcon fontSize="small" color="primary" />,
    title: 'Developer-Friendly Platform',
    description:
      'EpicChain supports smart contracts in various programming languages, making it a versatile and inclusive platform for developers. This flexibility promotes innovation and allows developers to create and deploy complex applications effortlessly.',
  },
  {
    icon: <AccessibilityNewRounded fontSize="small" color="primary" />,
    title: 'Community-Driven Decision Making',
    description:
      "EpicChain’s decentralized governance model empowers token holders to participate in network decisions, fostering a democratic and engaged community. Participants are rewarded for their involvement, incentivizing active and meaningful contributions.",
  },
];

export default function ValueProposition() {
  return (
    <Section>
      <SectionHeadline
        title={
          <Typography variant="h2" sx={{ mt: 1, mb: { xs: 2, sm: 4 } }}>
            <GradientText>Compelling Reasons to</GradientText> <br />
            Build on EpicChain
          </Typography>
        }
      />
      <Grid container spacing={3}>
        {content.map(({ icon, title, description }) => (
          <Grid key={title} xs={12} sm={6} lg={3}>
            <InfoCard title={title} icon={icon} description={description} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
