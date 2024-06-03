/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetail from '@mui/material/AccordionDetails';
import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded';
import Section from 'docs/src/layouts/Section';

const faqData = [
  {
    summary: 'What is Quantum Guard Nexus?',
    detail: (
      <React.Fragment>
        Quantum Guard Nexus is a cutting-edge security feature of EpicChain that utilizes quantum-resistant algorithms to protect digital assets from quantum attacks. It ensures the security and integrity of transactions on the EpicChain platform.
      </React.Fragment>
    ),
  },
  {
    summary: 'What is Quantum Vault Asset?',
    detail: (
      <React.Fragment>
        Quantum Vault Asset is a secure storage solution on EpicChain that uses quantum-resistant encryption to protect digital assets. It provides a safe and reliable way to store and manage assets on the blockchain.
      </React.Fragment>
    ),
  },
  {
    summary: 'How do Smart Contracts on EpicChain support various programming languages?',
    detail: (
      <React.Fragment>
        Smart Contracts on EpicChain are designed to be compatible with multiple programming languages, including Solidity, Rust, and C++. This flexibility allows developers to write smart contracts in their preferred language, making it easier to create and deploy decentralized applications on the platform.
      </React.Fragment>
    ),
  },
  {
    summary: 'What sets EpicChain apart from other blockchain ecosystems?',
    detail: (
      <React.Fragment>
        EpicChain stands out for its advanced security features, including Quantum Guard Nexus and Quantum Vault Asset, as well as its support for smart contracts in multiple programming languages. Additionally, EpicChain is committed to fostering a diverse and inclusive community, driving innovation and collaboration in the blockchain space.
      </React.Fragment>
    ),
  },
  {
    summary: 'How can I get involved with EpicChain?',
    detail: (
      <React.Fragment>
        You can get involved with EpicChain by joining our community forums, participating in events and meetups, and contributing to our open-source projects on GitHub. We welcome developers, enthusiasts, and anyone interested in blockchain technology to join us in building the future of EpicChain.
      </React.Fragment>
    ),
  },
  {
    summary: 'What is the roadmap for EpicChain development?',
    detail: (
      <React.Fragment>
        EpicChain's roadmap includes plans for further enhancing security, scalability, and usability of the platform. This includes updates to Quantum Guard Nexus and Quantum Vault Asset, as well as improvements to smart contract functionality and developer tools.
      </React.Fragment>
    ),
  },
  {
    summary: 'How does EpicChain ensure the security of user assets?',
    detail: (
      <React.Fragment>
        EpicChain employs a variety of security measures, including encryption, multi-factor authentication, and regular security audits, to ensure the safety of user assets. Quantum Guard Nexus and Quantum Vault Asset provide additional layers of security against quantum attacks.
      </React.Fragment>
    ),
  },
  {
    summary: 'What are the benefits of using EpicChain for developers?',
    detail: (
      <React.Fragment>
       Developers benefit from EpicChain's support for multiple programming languages, which makes it easier to write and deploy smart contracts. Additionally, EpicChain's secure and scalable infrastructure provides a reliable platform for building decentralized applications.
      </React.Fragment>
    ),
  },
  {
    summary: 'Why must we license developers not using the software directly?',
    detail: (
      <React.Fragment>
        Our pricing model requires all developers working on a project using MUI X Pro or Premium to
        be licensed. This is intended to make it easier for you and your team to know if the right
        number of developers are licensed.
        <br />
        <br />
        Our licensing model also requires developers indirectly using MUI X Pro or Premium (e.g.
        through a wrapper library) to be licensed.
        <br />
        <br />
        The price point per developer is adjusted to be lower than if only direct use needed a
        license.{' '}
        <Link
          target="_blank"
          rel="noopener"
          href="https://mui.com/legal/mui-x-eula/#required-quantity-of-licenses"
        >
          The relevant EULA clause.
        </Link>
      </React.Fragment>
    ),
  },
];

const Accordion = styled(MuiAccordion)(({ theme }) => ({
  padding: theme.spacing(2),
  transition: theme.transitions.create('box-shadow'),
  '&&': {
    borderRadius: theme.shape.borderRadius,
  },
  '&:hover': {
    borderColor: theme.palette.primary[300],
    boxShadow: `0px 4px 8px ${alpha(theme.palette.grey[200], 0.6)}`,
  },
  '&:not(:last-of-type)': {
    marginBottom: theme.spacing(2),
  },
  '&::before': {
    display: 'none',
  },
  '&::after': {
    display: 'none',
  },
  ...theme.applyDarkStyles({
    '&:hover': {
      borderColor: alpha(theme.palette.primary[600], 0.6),
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.8)',
    },
  }),
}));

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(-2),
  minHeight: 'auto',
  '&.Mui-expanded': {
    minHeight: 'auto',
  },
  '& .MuiAccordionSummary-content': {
    margin: 0,
    paddingRight: theme.spacing(2),
    '&.Mui-expanded': {
      margin: 0,
    },
  },
}));

const AccordionDetails = styled(MuiAccordionDetail)(({ theme }) => ({
  marginTop: theme.spacing(1),
  padding: 0,
}));

export default function PricingFAQ() {
  function renderItem(index: number) {
    const faq = faqData[index];
    return (
      <Accordion variant="outlined">
        <AccordionSummary
          expandIcon={<KeyboardArrowDownRounded sx={{ fontSize: 20, color: 'primary.main' }} />}
        >
          <Typography variant="body2" fontWeight="bold" component="h3">
            {faq.summary}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            component="div"
            variant="body2"
            color="text.secondary"
            sx={{ '& ul': { pl: 2 } }}
          >
            {faq.detail}
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  }
  return (
    <Section cozy>
      <Typography id="faq" variant="h2" sx={{ mb: { xs: 2, sm: 4 } }}>
        Frequently asked questions
      </Typography>
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          {renderItem(0)}
          {renderItem(1)}
          {renderItem(2)}
          {renderItem(3)}
        </Grid>
        <Grid xs={12} md={4}>
          {renderItem(4)}
          {renderItem(5)}
          {renderItem(6)}
          {renderItem(7)}
        </Grid>
        <Grid xs={12} md={4}>
          <Paper
            variant="outlined"
            sx={(theme) => ({
              p: 2,
              textAlign: 'center',
              borderStyle: 'dashed',
              borderColor: 'grey.300',
              bgcolor: 'white',
              ...theme.applyDarkStyles({
                borderColor: 'divider',
                bgcolor: 'primaryDark.800',
              }),
            })}
          >
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="body2" color="text.primary" fontWeight="bold" component="h3">
                Got any questions unanswered or need help?
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ my: 1, textAlign: 'left' }}>
              Email us at <Link href="mailto:devs@epicchain.org">devs@epicchain.org</Link> for sales-related
              questions.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ my: 1, textAlign: 'left' }}>
              For product-related problems, please open
              <Link href="https://github.com/epicchainlabs/epicchain-org-website/issues/new/choose">a new GitHub issue</Link>.
              (If you need to share private information, you can{' '}
              <Link href="mailto:support@mui.com">email</Link> us.)
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Section>
  );
}
