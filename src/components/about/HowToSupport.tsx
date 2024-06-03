import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import LocalAtmRoundedIcon from '@mui/icons-material/LocalAtmRounded';
import GradientText from 'docs/src/components/typography/GradientText';
import { Link } from '@mui/docs/Link';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import { GlowingIconContainer } from '@mui/docs/InfoCard';

function Widget({
  children,
  title,
  icon,
}: {
  children: React.ReactNode;
  title: string;
  icon: React.ReactElement;
}) {
  return (
    <Paper
      variant="outlined"
      sx={(theme) => ({
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: `${(theme.vars || theme).palette.gradients.linearSubtle}`,
        ...theme.applyDarkStyles({
          background: `${(theme.vars || theme).palette.gradients.linearSubtle}`,
        }),
      })}
    >
      <GlowingIconContainer icon={icon} />
      <Typography
        fontWeight="bold"
        component="h3"
        color="text.primary"
        variant="body2"
        mt={2}
        mb={0.5}
      >
        {title}
      </Typography>
      {children}
    </Paper>
  );
}

export default function HowToSupport() {
  return (
    <Section cozy>
      <SectionHeadline
        overline="Support us"
        title={
          <Typography variant="h2" sx={{ mb: 4 }}>
            Learn How to Support 
            <br /> <GradientText>EpicChain</GradientText>
          </Typography>
        }
        description=""
      />
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={4}>
          <Widget
            icon={<ForumRoundedIcon fontSize="small" color="primary" />}
            title="Engage with Our Community"
          >
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Join our vibrant community of blockchain enthusiasts, developers, and supporters by participating in our forums, social media channels, and events. Share your insights, ask questions, and collaborate with like-minded individuals. Your active engagement helps us grow and fosters a stronger, more connected ecosystem.
            </Typography>
          </Widget>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Widget
            icon={<PeopleRoundedIcon fontSize="small" color="primary" />}
            title="Contribute to Development"
          >
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Whether you're a seasoned developer or just starting, there are numerous ways to contribute to EpicChain's development. Explore our open-source projects on GitHub, submit pull requests, report issues, or propose new features. By contributing your skills and expertise, you play a vital role in enhancing the platform and driving innovation.
            </Typography>
          </Widget>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Widget
            icon={<LocalAtmRoundedIcon fontSize="small" color="primary" />}
            title="Spread the Word"
          >
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Help us expand our reach by spreading the word about EpicChain. Share our mission, updates, and achievements with your network. Write blog posts, create videos, or host meetups to introduce others to the potential of EpicChain. Your advocacy and support are crucial in building awareness and attracting new users, partners, and investors to our ecosystem.
            </Typography>
          </Widget>
        </Grid>
      </Grid>
    </Section>
  );
}
