import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import FunctionsIcon from '@mui/icons-material/Functions';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Section from 'docs/src/layouts/Section';
import { Link } from '@mui/docs/Link';
import GradientText from 'docs/src/components/typography/GradientText';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';

export default function PricingWhatToExpect() {
  return (
    <Section cozy>
      <SectionHeadline
        title={
          <Typography variant="h2" sx={{ mt: 1, mb: 4 }}>
            Key Information About
            <br /> <GradientText>EpicChain</GradientText>
          </Typography>
        }
      />
      <Box
        sx={{
          columnGap: 3,
          columnCount: { sm: 1, md: 2, lg: 3 },
          '& > *': {
            breakInside: 'avoid',
            marginBottom: 2,
          },
        }}
      >
        <Paper variant="outlined" sx={{ p: 2, height: 'fit-content', gridColumn: 'span 1' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <FunctionsIcon fontSize="small" color="primary" />
            <Typography fontWeight="bold" component="h3" color="text.primary" variant="body2">
            Features and Benefits
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
          EpicChain's paid plans offer a range of features and benefits, including access to advanced security features, priority customer support, and additional storage and bandwidth options.
          </Typography>
        </Paper>
        <Paper variant="outlined" sx={{ p: 2, height: 'fit-content' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <AcUnitIcon fontSize="small" color="primary" />
            <Typography fontWeight="bold" component="h3" color="text.primary" variant="body2">
            Security
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" component="div">
          Paid plans include enhanced security measures such as two-factor authentication, encryption, and regular security audits to protect your assets and transactions.
          </Typography>
        </Paper>
        <Paper variant="outlined" sx={{ p: 2, height: 'fit-content' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <AllInclusiveOutlinedIcon fontSize="small" color="primary" />
            <Typography fontWeight="bold" component="h3" color="text.primary" variant="body2">
            Support
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
          Paid plans provide priority customer support to ensure that your questions and issues are addressed promptly and effectively.
          </Typography>
        </Paper>
        <Paper variant="outlined" sx={{ p: 2, height: 'fit-content' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <ReplayRoundedIcon fontSize="small" color="primary" />
            <Typography fontWeight="bold" component="h3" color="text.primary" variant="body2">
            Storage and Bandwidth
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
          Paid plans offer increased storage and bandwidth options, allowing you to store more data and handle higher volumes of transactions.
          </Typography>
        </Paper>
        <Paper variant="outlined" sx={{ p: 2, height: 'fit-content' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <HelpOutlineOutlinedIcon fontSize="small" color="primary" />
            <Typography fontWeight="bold" component="h3" color="text.primary" variant="body2">
            Cost
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
          The cost of EpicChain's paid plans varies depending on the level of service and features included. Pricing is transparent and competitive, with options available for businesses of all sizes.
          </Typography>
        </Paper>
        <Paper variant="outlined" sx={{ p: 2, height: 'fit-content' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <LocalOfferOutlinedIcon fontSize="small" color="primary" />
            <Typography fontWeight="bold" component="h3" color="text.primary" variant="body2">
            Flexibility
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
          Paid plans are flexible, allowing you to upgrade or downgrade your plan as your needs change. This flexibility ensures that you always have the right level of service for your business.
          </Typography>
        </Paper>
      </Box>
    </Section>
  );
}
