import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/docs/Link';
import { useTranslate } from 'docs/src/modules/utils/i18n';

const NativeLink = styled('a')(({ theme }) => ({
  boxSizing: 'border-box', // TODO have CssBaseline in the Next.js layout
  width: '100%',
  height: 45,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 12,
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  transition: theme.transitions.create(['color', 'border-color']),
  boxShadow: `${alpha(theme.palette.grey[100], 0.3)} 0 -2px 0 inset`,
  '&:hover': {
    backgroundColor: (theme.vars || theme).palette.grey[50],
  },
  '&:focus-visible': {
    outline: `3px solid ${alpha((theme.vars || theme).palette.primary[500], 0.5)}`,
    outlineOffset: '2px',
  },
  '& img': {
    display: 'inline-block',
  },
  ...theme.applyDarkStyles({
    boxShadow: `${alpha(theme.palette.primaryDark[600], 0.1)} 0 2px 0 inset, ${(theme.vars || theme).palette.common.black} 0 -2px 0 inset`,
    '&:hover': {
      backgroundColor: (theme.vars || theme).palette.primaryDark[800],
      borderColor: (theme.vars || theme).palette.primary[900],
    },
  }),
}));

export default function DiamondSponsors() {
  const t = useTranslate();

  return (
    <Stack direction="column" mt={2} spacing={1} useFlexGap>
      
    </Stack>
  );
}
