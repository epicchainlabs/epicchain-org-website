/* eslint-disable material-ui/straight-quotes */
import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { Link } from '@mui/docs/Link';
import Section from 'docs/src/layouts/Section';

export default function BaseUITestimonial() {
  return (
    <Section>
      <Grid container spacing={{ xs: 6, sm: 10 }} alignItems="center">
        <Grid xs={12} sm={6}>
          <Box
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
              pt: 2,
              pl: 3,
              background: 'linear-gradient(260deg, #3399FF 0%, #0059B3 95%)',
              backgroundClip: 'padding-box',
              overflow: 'auto',
              '& img': {
                width: '100%',
                borderTopLeftRadius: '8px',
                display: 'block',
              },
            }}
          >
            <Typography variant="h4" component="h2" fontWeight="medium" color="#FFF" mb={2.5}>
              Nhost&apos;s dashboard
            </Typography>
            <Box
              component="img"
              src="/static/branding/base-ui/nhost-screenshot.png"
              srcSet="/static/branding/base-ui/nhost-screenshot-2x.png 2x"
              alt="Screenshot displaying part of the Nhost dashboard that used Base UI to be built."
              loading="lazy"
              sx={{
                backgroundColor: '#fff',
                width: 510,
                height: 210,
              }}
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography>
            “The council collaborates with the community to develop governance proposals, implement decisions, and address any challenges that may arise. By providing leadership and guidance, the council plays a crucial role in shaping the governance of EpicChain and driving its long-term success.”
          </Typography>
          <Divider />
        </Grid>
      </Grid>
    </Section>
  );
}
