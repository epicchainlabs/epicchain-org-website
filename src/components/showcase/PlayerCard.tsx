import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Fade from '@mui/material/Fade';
import IconButton, { iconButtonClasses } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import PauseRounded from '@mui/icons-material/PauseRounded';
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import LoopRoundedIcon from '@mui/icons-material/LoopRounded';

export default function PlayerCard({ disableTheming }: { disableTheming?: boolean }) {
  const [paused, setPaused] = React.useState(true);
  return (
    <Fade in timeout={700}>
      <Card>
      </Card>
    </Fade>
  );
}
