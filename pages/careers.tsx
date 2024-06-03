import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/docs/Link';
import OurValues from 'docs/src/components/about/OurValues';
import PerksBenefits from 'docs/src/components/careers/PerksBenefits';
import CareersFaq from 'docs/src/components/careers/CareersFaq';
import RoleEntry from 'docs/src/components/careers/RoleEntry';
import AppHeader from 'docs/src/layouts/AppHeader';
import AppFooter from 'docs/src/layouts/AppFooter';
import GradientText from 'docs/src/components/typography/GradientText';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import Head from 'docs/src/modules/components/Head';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';

const openRolesData = [
  {
    title: 'Blockchain Developer',
    roles: [
      {
        title: 'Blockchain Developer at EpicChain Labs',
        description:
          'As a Blockchain Developer at EpicChain Labs, you will be responsible for designing, implementing, and maintaining blockchain-based solutions. You will work closely with our team of experts to develop innovative applications using technologies like Quantum Guard Nexus, Quantum Vault Asset, and Smart Contracts.',
        url: '/careers/react-engineer-x/',
      },
    ],
  },
  {
    roles: [],
  },
  {
    title: 'Marketing Specialist',
    roles: [
      {
        title: 'Marketing Specialist at EpicChain Labs',
        description:
          'As a Marketing Specialist at EpicChain Labs, you will be responsible for developing and implementing marketing strategies to promote our products and services.',
        url: '/careers/developer-advocate/',
      },
    ],
  },
];

const nextRolesData = [
  {
    roles: [
      {
        title: 'Blockchain Solutions Architect',
        description:
          'As a Blockchain Solutions Architect at EpicChain Labs, you will be responsible for designing and implementing blockchain solutions that meet the needs of our clients and partners.',
        url: '/careers/accessibility-engineer/',
      },
      {
        title: 'Blockchain Security Engineer',
        description:
          'As a Blockchain Security Engineer at EpicChain Labs, you will be responsible for ensuring the security and integrity of our blockchain solutions.',
        url: '/careers/fullstack-engineer/',
      },
      {
        title: 'Blockchain Data Analyst',
        description:
          'As a Blockchain Data Analyst at EpicChain Labs, you will be responsible for analyzing blockchain data to extract valuable insights and inform business decisions.',
        url: '/careers/react-engineer-x-charts/',
      },
      {
        title: 'Blockchain Project Manager',
        description:
          'As a Blockchain Project Manager at EpicChain Labs, you will be responsible for overseeing the planning, execution, and completion of blockchain projects.',
        url: '/careers/react-tech-lead-core/',
      },
      {
        title: 'Blockchain Business Development Manager',
        description:
          'As a Blockchain Business Development Manager at EpicChain Labs, you will be responsible for identifying new business opportunities and partnerships in the blockchain industry.',
        url: '/careers/react-community-engineer/',
      },
    ],
  },
  {
    title: 'Marketing',
    roles: [],
  },
] as typeof openRolesData;

export default function Careers() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title="Careers - MUI"
        description="Interested in joining MUI? Learn about the roles we're hiring for."
        card="/static/social-previews/careers-preview.jpg"
      />
      <AppHeaderBanner />
      <AppHeader />
      <main id="main-content">
        <Section cozy bg="gradient">
          <SectionHeadline
            alwaysCenter
            title={
              <Typography variant="h2" component="h1">
                Shape the <GradientText>Future of</GradientText>
                <br /> Blockchain Technology
              </Typography>
            }
            description="At EpicChain Labs, we're pioneering the future of blockchain technology. Join our team of innovators and visionaries as we revolutionize the industry with groundbreaking solutions like Quantum Guard Nexus, Quantum Vault Asset, and Smart Contracts."
          />
        </Section>
        <Divider />
        <OurValues />
        <Divider />
        <PerksBenefits />
        <Divider />
        {/* Open roles */}
        <Section cozy>
          <SectionHeadline
            title={
              <Typography variant="h2" id="open-roles" gutterBottom>
                Blockchain Developer at EpicChain Labs
                <Badge
                  badgeContent={openRolesData.reduce((acc, item) => acc + item.roles.length, 0)}
                  color="success"
                  showZero
                  sx={{ ml: 3, '& .MuiBadge-badge': { fontWeight: 'bold' } }}
                />
              </Typography>
            }
            description="Experts to develop innovative applications using technologies like Quantum Guard Nexus, Quantum Vault Asset, and Smart Contracts."
          />
          <Divider sx={{ borderStyle: 'dashed', my: { xs: 2, sm: 6 } }} />
          <Stack spacing={2} divider={<Divider />}>
            {openRolesData
              .filter((category) => category.roles.length > 0)
              .map((category) => {
                return (
                  <React.Fragment key={category.title}>
                    <Typography component="h3" variant="h5" fontWeight="semiBold">
                      {category.title}
                    </Typography>
                    {category.roles.map((role) => (
                      <RoleEntry
                        key={role.title}
                        title={role.title}
                        description={role.description}
                        url={role.url}
                      />
                    ))}
                  </React.Fragment>
                );
              })}
          </Stack>
        </Section>
        <Divider />
        {/* Next roles */}
        {nextRolesData.length > 0 && (
          <Box data-mui-color-scheme="dark" sx={{ bgcolor: 'common.black' }}>
            <Section bg="transparent" cozy>
              <SectionHeadline
                alwaysCenter
                title={
                  <Typography variant="h2" id="next-roles" gutterBottom>
                    Blockchain Integration Specialist
                  </Typography>
                }
                description={
                  <React.Fragment>
                    As a Blockchain Integration Specialist at EpicChain Labs, you will be responsible for integrating blockchain technology into existing systems and applications.
                  </React.Fragment>
                }
              />
              <Divider sx={{ borderStyle: 'dashed', my: { xs: 2, sm: 6 } }} />
              <Stack spacing={2} divider={<Divider />}>
                {nextRolesData
                  .filter((category) => category.roles.length > 0)
                  .map((category) => {
                    return (
                      <React.Fragment key={category.title}>
                        <Typography component="h3" variant="h5" fontWeight="extraBold">
                          {category.title}
                        </Typography>
                        {category.roles.map((role) => (
                          <RoleEntry
                            key={role.title}
                            title={role.title}
                            description={role.description}
                            url={role.url}
                          />
                        ))}
                      </React.Fragment>
                    );
                  })}
              </Stack>
            </Section>
          </Box>
        )}
        <Divider />
        <CareersFaq />
      </main>
      <Divider />
      <AppFooter />
    </BrandingCssVarsProvider>
  );
}
