import * as React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import ROUTES from 'docs/src/route';
import { InfoCard } from '@mui/docs/InfoCard';
import IconImage from 'docs/src/components/icon/IconImage';
import GetStartedButtons from 'docs/src/components/home/GetStartedButtons';

const content = [
  {
    icon: <IconImage name="pricing/x-plan-community" mode="" loading="eager" />,
    title: 'Enterprise-Grade Security Solutions',
    description:
      'Quantum Guard Nexus offers enterprise-grade security solutions tailored to the specific needs of businesses. These solutions provide robust protection against cyber threats and ensure the integrity of blockchain operations.',
    link: '/x/introduction/licensing/#community-plan',
  },
  {
    icon: <IconImage name="pricing/x-plan-pro" mode="" loading="eager" />,
    title: 'Customizable Security Packages',
    description:
      'Businesses can choose from a range of customizable security packages offered by Quantum Guard Nexus. These packages are designed to meet the unique requirements of different industries and can be tailored to fit specific business needs.',
    link: '/x/introduction/licensing/#pro-plan',
  },
  {
    icon: <IconImage name="pricing/x-plan-premium" mode="" loading="eager" />,
    title: 'Real-Time Security Monitoring Services',
    description:
      'Quantum Guard Nexus includes real-time security monitoring services that offer continuous protection against emerging threats.',
    link: '/x/introduction/licensing/#premium-plan',
  },
];

export default function XPlans2() {
  return (
    <Section cozy>
      <Grid container spacing={2} alignItems="center">
        <Grid md={6}>
          <SectionHeadline
            title={
              <Typography variant="h2">
                Commercial <GradientText>Availability</GradientText>
              </Typography>
            }
            description="EpicChain's cutting-edge security framework, is now available for commercial use, offering advanced security solutions to businesses of all sizes."
          />
        </Grid>
        <Grid xs={12} md={6}>
          <Stack spacing={2} useFlexGap>
            {content.map(({ icon, title, description, link }) => (
              <InfoCard title={title} icon={icon} description={description} link={link} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
}
