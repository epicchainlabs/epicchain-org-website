import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Palette from '@mui/icons-material/Palette';
import LibraryBooks from '@mui/icons-material/LibraryBooks';
import { InfoCard } from '@mui/docs/InfoCard';
import CodeRounded from '@mui/icons-material/CodeRounded';
import GradientText from 'docs/src/components/typography/GradientText';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';

const content = [
  {
    icon: <Palette fontSize="small" color="primary" />,
    title: 'Agile Methodology',
    description:
      'Adopting agile development practices allows EpicChain to quickly adapt to changing requirements and deliver value to users in shorter development cycles. This approach promotes collaboration, flexibility, and the ability to respond to feedback effectively.',
  },
  {
    icon: <LibraryBooks fontSize="small" color="primary" />,
    title: 'Continuous Integration and Deployment (CI/CD)',
    description:
      'Implementing CI/CD pipelines automates the build, testing, and deployment processes, ensuring that code changes are integrated and deployed efficiently.',
  },
  {
    icon: <CodeRounded fontSize="small" color="primary" />,
    title: 'Modular Design and Microservices Architecture',
    description:
      'Breaking down the EpicChain platform into smaller, modular components using a microservices architecture enables independent development, deployment, and scaling of services.',
  },
];

export default function DesignKitValues() {
  return (
    <Section cozy>
      <SectionHeadline
        title={
          <Typography variant="h2" sx={{ mt: 1 }}>
            Efficient <GradientText>EpicChain Development </GradientText> Practices
          </Typography>
        }
      />
      <Grid container spacing={3} mt={4}>
        {content.map(({ icon, title, description }) => (
          <Grid key={title} xs={12} sm={6} md={4}>
            <InfoCard title={title} icon={icon} description={description} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
