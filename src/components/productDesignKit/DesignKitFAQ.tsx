import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetail from '@mui/material/AccordionDetails';
import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded';
import { Link as InternalLink } from '@mui/docs/Link';
import Section from 'docs/src/layouts/Section';

const faqData = [
  {
    summary: 'What is EpicChain?',
    detail: (
      <React.Fragment>
        EpicChain is a next-generation blockchain ecosystem designed to revolutionize the way digital assets are managed and traded. It offers features like Quantum Guard Nexus, Quantum Vault Asset, and smart contracts supporting various programming languages.
      </React.Fragment>
    ),
  },
  {
    summary: 'What are EpicChain native tokens?',
    detail: (
      <React.Fragment>
        EpicChain has two native tokens: EpicChain (XPR) and EpicPulse (XPP). XPR is the utility token for the ecosystem, while XPP is primarily for transaction maintenance.
      </React.Fragment>
    ),
  },
  {
    summary: 'How can I participate in EpicChain ecosystem?',
    detail: (
      <React.Fragment>
        You can participate in the EpicChain ecosystem by holding EpicChain tokens (XPR) and contributing to the network's security through validation or voting for validators.
      </React.Fragment>
    ),
  },
  {
    summary: 'How does Quantum Guard Nexus enhance security?',
    detail: (
      <React.Fragment>
        Quantum Guard Nexus uses advanced cryptographic techniques, multi-layered security protocols, and real-time threat detection to protect digital assets and transactions from threats, including quantum computing attacks.
      </React.Fragment>
    ),
  },
  {
    summary: 'How can I get involved with EpicChain Labs?',
    detail: (
      <React.Fragment>
        You can join the EpicChain Labs community by visiting our website and participating in discussions, contributing to the development of the ecosystem, and exploring opportunities to collaborate with other members.
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
    boxShadow: '1px 1px 8px 0 rgb(90 105 120 / 20%)',
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

export default function DesignKitFAQ() {
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
    <Section>
      <Typography variant="h2" sx={{ mb: { xs: 2, sm: 4 } }} id="faq">
        Frequently asked questions
      </Typography>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          {renderItem(0)}
          {renderItem(1)}
          {renderItem(2)}
        </Grid>
        <Grid xs={12} md={6}>
          {renderItem(3)}
          {renderItem(4)}
          <Paper
            variant="outlined"
            sx={(theme) => ({
              p: 2,
              pb: 1,
              borderStyle: 'dashed',
              borderColor: 'grey.300',
              bgcolor: 'white',
              textAlign: 'left',
              ...theme.applyDarkStyles({
                borderColor: 'primaryDark.600',
                bgcolor: 'primaryDark.800',
              }),
            })}
          >
            <Typography variant="body2" color="text.primary" fontWeight="bold" gutterBottom>
              Got any questions unanswered or need more help?
            </Typography>
            <Typography variant="body2" color="text.primary" gutterBottom>
              From community help to premium business support, we&apos;re here to help.
            </Typography>
            <Button
              component="a"
              // @ts-expect-error
              variant="link"
              size="small"
              href="mailto:support@epicchain.org"
              endIcon={<KeyboardArrowRightRounded />}
              sx={{ ml: -1 }}
            >
              Contact sales
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Section>
  );
}
