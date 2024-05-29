import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddRounded from '@mui/icons-material/AddRounded';
import { Link } from '@mui/docs/Link';
import SponsorCard from 'docs/src/components/home/SponsorCard';

const DIAMONDs = [
  {
    src: '/static/sponsors/octopus-square.svg',
    name: 'QuantumGuard Technologie',
    description: 'Specializing in advanced security solutions for digital assets',
    href: 'https://quantumguard.tech',
  },
  
  {
    src: '/static/sponsors/octopus-square.svg',
    name: 'Nexus Ventures',
    description: 'A prominent venture capital firm focusing on blockchain and fintech startups',
    href: 'https://nexusventures.com',
  },
  {
    src: '/static/sponsors/octopus-square.svg',
    name: 'EpicFund Capital',
    description: 'Dedicated to supporting blockchain initiatives',
    href: 'https://epicfundcapital.com',
  },
  
  {
    src: '/static/sponsors/octopus-square.svg',
    name: 'SmartContract Solutions',
    description: 'Experts in smart contract development, SmartContract Solutions helps streamline and secure transactions',
    href: 'https://smartcontractsolutions.com',
  },
  {
    src: '/static/sponsors/octopus-square.svg',
    name: 'VaultAsset Partners',
    description: 'Specializing in asset management and digital custody, VaultAsset Partners ensures seamless and secure',
    href: 'https://vaultassetpartners.com',
  },
  {
    src: '/static/sponsors/octopus-square.svg',
    name: 'GlobalTech Enterprises',
    description: 'A multinational technology company, GlobalTech Enterprises brings global expertise and resources',
    href: 'https://globaltechenterprises.com',
  },
  {
    src: '/static/sponsors/octopus-square.svg',
    name: 'CryptoExchange Alliance',
    description: 'A coalition of leading cryptocurrency exchanges, CryptoExchange Alliance promotes the adoption',
    href: 'https://cryptoexchangealliance.org',
  },
  {
    src: '/static/sponsors/octopus-square.svg',
    name: 'InnoChain Labs',
    description: 'Focused on blockchain innovation, InnoChain Labs conducts research and development',
    href: 'https://innochainlabs.com',
  },
  {
    src: '/static/sponsors/octopus-square.svg',
    name: 'BlockWave Innovations',
    description: 'A leader in blockchain technology development',
    href: 'https://blockwave.io',
  },
  {
    src: '/static/sponsors/octopus-square.svg',
    name: 'Decentralized Solutions Group',
    description: 'A leader in blockchain technology development',
    href: 'https://decentralizedsolutions.com',
  },
  {
    src: '/static/sponsors/octopus-square.svg',
    name: 'NextGen Blockchain Ventures',
    description: 'Investing in the future of blockchain, NextGen Blockchain Ventures supports projects that contribute',
    href: 'https://nextgenblockchainventures.com',
  },
];

export default function DiamondSponsors() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '500px',
  });
  const maxNumberOfDiamondSponsors = 3;
  const spotIsAvailable = maxNumberOfDiamondSponsors > DIAMONDs.length;
  return (
    <div ref={ref}>
      <Typography
        component="h3"
        variant="h6"
        fontWeight="bold"
        sx={(theme) => ({
          mt: 4,
          mb: 1.5,
          background: `linear-gradient(45deg, ${(theme.vars || theme).palette.primary[400]} 50%, ${
            (theme.vars || theme).palette.primary[800]
          } 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        })}
      >
        Sponsors of EpicChain
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {DIAMONDs.map((item) => (
          <Grid key={item.name} xs={12} sm={6} md={4}>
            <SponsorCard logoSize={64} inView={inView} item={item} />
          </Grid>
        ))}
        {spotIsAvailable && (
          <Grid xs={12} sm={6} md={4}>
            <Paper
              variant="outlined"
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                borderStyle: 'dashed',
              }}
            >
              <IconButton
                aria-label="Become MUI sponsor"
                component="a"
                href="mailto:sales@mui.com"
                target="_blank"
                rel="noopener"
                color="primary"
                sx={(theme) => ({
                  mr: 2,
                  border: '1px solid',
                  borderColor: 'grey.300',
                  ...theme.applyDarkStyles({
                    borderColor: 'primaryDark.600',
                  }),
                })}
              >
                <AddRounded />
              </IconButton>
              <div>
                <Typography variant="body2" color="text.primary" fontWeight="bold">
                  Become EpicChain! Sponsors
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  To join us, contact us at{' '}
                  <Link href="mailto:sponsor@epicchain.org" target="_blank" rel="noopener">
                  sponsor@epicchain.org
                  </Link>{' '}
                  for pre-approval.
                </Typography>
              </div>
            </Paper>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
