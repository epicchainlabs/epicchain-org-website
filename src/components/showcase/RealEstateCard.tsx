import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card, { CardProps } from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import InfoRounded from '@mui/icons-material/InfoRounded';

export default function RealEstateCard({ sx, ...props }: CardProps) {
  return (
    <Card
      variant="outlined"
      {...props}
      sx={[
        (theme) => ({
          p: 2,
          display: 'flex',
          flexWrap: 'wrap',
          zIndex: 1,
          boxShadow: `0px 4px 8px ${alpha(theme.palette.grey[200], 0.6)}`,
          ...theme.applyDarkStyles({
            bgcolor: 'primaryDark.900',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
          }),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
    </Card>
  );
}
