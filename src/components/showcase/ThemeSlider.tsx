import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Slider, { sliderClasses } from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}°C`;
}

export default function ThemeSlider() {
  return (
    <Fade in timeout={700}>
      <Box
        sx={(theme) => ({
          px: 3,
          py: 4,
          display: 'flex',
          justifyContent: 'center',
          bgcolor: '#fff',
          border: '1px solid',
          borderColor: 'grey.200',
          borderRadius: 1,
          boxShadow: `0px 4px 8px ${alpha(theme.palette.grey[200], 0.6)}`,
          ...theme.applyDarkStyles({
            bgcolor: 'primaryDark.900',
            borderColor: 'primaryDark.700',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
          }),
        })}
      >
      </Box>
    </Fade>
  );
}
