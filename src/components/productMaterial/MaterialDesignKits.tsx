import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
import DrawRoundedIcon from '@mui/icons-material/DrawRounded';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import Item, { Group } from 'docs/src/components/action/Item';
import Highlighter from 'docs/src/components/action/Highlighter';
import Frame from 'docs/src/components/action/Frame';
import {
  MaterialDesignKitInfo,
  MaterialFigmaComponents,
} from 'docs/src/components/productDesignKit/DesignKitDemo';
import { Link } from '@mui/docs/Link';

const Image = styled('img')(({ theme }) => ({
  transition: '0.4s',
  display: 'block',
  height: 'auto',
  borderRadius: 6,
  border: '1px solid',
  borderColor: theme.palette.divider,
  filter: `drop-shadow(-2px 4px 6px ${alpha(theme.palette.grey[500], 0.5)})`,
  ...theme.applyDarkStyles({
    filter: `drop-shadow(-2px 4px 6px ${alpha(theme.palette.common.black, 0.2)})`,
    borderColor: theme.palette.primaryDark[600],
  }),
}));

interface MaterialDesignKitsProps {
  gradient?: boolean;
}

export default function MaterialDesignKits({ gradient }: MaterialDesignKitsProps) {
  const [customized, setCustomized] = React.useState(true);

  return (
    <Section cozy bg={gradient ? 'gradient' : 'white'}>
      <Grid container spacing={2} alignItems="center">
        <Grid md={6} sx={{ minWidth: 0 }}>
          <SectionHeadline
            title={
              <Typography variant="h2">
                EpicChain's Scalable <GradientText>Network Solution</GradientText>
              </Typography>
            }
            description="Quantum Guard Nexus is EpicChain's innovative solution for building a scalable network that can handle the demands of blockchain technology."
          />
          <Group sx={{ m: -2, p: 2 }}>
            <Highlighter disableBorder selected={customized} onClick={() => setCustomized(true)}>
              <Item
                icon={<DrawRoundedIcon color="primary" />}
                title="Quantum Ledger"
                description="Quantum Ledger is EpicChain's innovative approach to building a scalable blockchain network that can handle the growing demands of decentralized applications (dApps) and smart contracts."
              />
            </Highlighter>
            <Highlighter disableBorder selected={!customized} onClick={() => setCustomized(false)}>
              <Item
                icon={<ExtensionRoundedIcon color="primary" />}
                title="Quantum Mesh Network"
                description="EpicChain's Quantum Mesh Network is a revolutionary communication infrastructure designed to be decentralized, scalable, and highly resilient."
              />
            </Highlighter>
          </Group>
        </Grid>
        <Grid xs={12} md={6}>
          <Frame>
            <Frame.Demo
              sx={{
                overflow: 'clip',
                height: { xs: 240, sm: 420 },
              }}
            >
              <MaterialFigmaComponents fadeIn={customized} />
              <Fade in={!customized} timeout={500}>
                <Box
                  sx={(theme) => ({
                    display: !customized ? 'auto' : 'none',
                    width: '100%',
                    height: '100%',
                    '& img': {
                      position: 'absolute',
                      '&:nth-of-type(1)': {
                        visibility: { xs: 'hidden', sm: 'visible' },
                        width: { xs: 240, sm: 600 },
                        top: 100,
                        left: '50%',
                        transform: 'translate(-40%)',
                      },
                      '&:nth-of-type(2)': {
                        width: { xs: 240, sm: 560 },
                        top: { xs: 100, sm: 40 },
                        left: { xs: '60%', sm: '60%' },
                        transform: {
                          xs: 'scale(1.8) translate(-20%)',
                          sm: 'none',
                        },
                      },
                    },
                    '&:hover': {
                      '& img': {
                        '&:nth-of-type(2)': {
                          top: { xs: 100, sm: 60 },
                          transform: {
                            xs: 'scale(1.8) translate(-20%)',
                            sm: 'scale(1.1) translate(-30%)',
                          },
                          filter: {
                            xs: 'auto',
                            sm: `drop-shadow(-16px 12px 20px ${alpha(
                              theme.palette.grey[600],
                              0.5,
                            )})`,
                          },
                        },
                      },
                    },
                    ...theme.applyDarkStyles({
                      '&:hover': {
                        '& img': {
                          '&:nth-of-type(2)': {
                            filter: {
                              xs: 'auto',
                              sm: `drop-shadow(-16px 12px 20px ${alpha(
                                theme.palette.common.black,
                                0.8,
                              )})`,
                            },
                          },
                          filter: `drop-shadow(-16px 12px 20px ${alpha(
                            theme.palette.common.black,
                            0.2,
                          )})`,
                        },
                      },
                    }),
                  })}
                >
                  <Image
                    src="/static/branding/design-kits/sync-base2-light.png"
                    alt="A bunch of customized Material UI buttons in the Figma Design Kit."
                    loading="lazy"
                    sx={(theme) =>
                      theme.applyDarkStyles({
                        content: `url(/static/branding/design-kits/sync-base2-dark.png)`,
                      })
                    }
                  />
                  <Image
                    src="/static/branding/design-kits/material-sync-light.png"
                    alt="The Material UI Sync plugin running and showing code for customized buttons."
                    loading="lazy"
                    sx={(theme) =>
                      theme.applyDarkStyles({
                        content: `url(/static/branding/design-kits/material-sync-dark.png)`,
                      })
                    }
                  />
                </Box>
              </Fade>
            </Frame.Demo>
            {customized ? (
              <MaterialDesignKitInfo />
            ) : (
              <Frame.Info data-mui-color-scheme="dark">
               
              </Frame.Info>
            )}
          </Frame>
        </Grid>
      </Grid>
    </Section>
  );
}
