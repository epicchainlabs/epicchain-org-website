import * as React from 'react';
import { styled as materialStyled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import SmartButtonRoundedIcon from '@mui/icons-material/SmartButtonRounded';
import TabUnselectedRoundedIcon from '@mui/icons-material/TabUnselectedRounded';
import InputRoundedIcon from '@mui/icons-material/InputRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import LinearScaleRoundedIcon from '@mui/icons-material/LinearScaleRounded';
import { HighlightedCode } from '@mui/docs/HighlightedCode';
import GradientText from 'docs/src/components/typography/GradientText';
import Item, { Group } from 'docs/src/components/action/Item';
import Highlighter from 'docs/src/components/action/Highlighter';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import More from 'docs/src/components/action/More';
import Frame from 'docs/src/components/action/Frame';
import ROUTES from 'docs/src/route';

// Switcher icons
import BaseButtonDemo from './components/BaseButtonDemo';
import BaseMenuDemo from './components/BaseMenuDemo';
import BaseInputDemo from './components/BaseInputDemo';
import BaseTabsDemo from './components/BaseTabsDemo';
import BaseSliderDemo from './components/BaseSliderDemo';

const StyledButton = materialStyled(Button)(({ theme }) => ({
  borderRadius: 40,
  padding: theme.spacing('2px', 1),
  fontSize: theme.typography.pxToRem(12),
  lineHeight: 18 / 12,
  '&.MuiButton-text': {
    color: theme.palette.grey[500],
    border: '1px solid',
    borderColor: theme.palette.primaryDark[700],
    '&:hover': {
      backgroundColor: theme.palette.primaryDark[700],
    },
  },
  '&.MuiButton-outlined': {
    color: '#fff',
    backgroundColor: 'var(--primary-active)',
    borderColor: 'var(--primary-hover)',
  },
}));

const DEMOS = ['Tabs', 'Button', 'Input', 'Menu', 'Slider'] as const;

const CODES: Record<
  (typeof DEMOS)[number],
  string | ((styling: 'system' | 'tailwindcss' | 'css') => string)
> = {
  Button: BaseButtonDemo.getCode,
  Menu: BaseMenuDemo.getCode,
  Input: BaseInputDemo.getCode,
  Tabs: BaseTabsDemo.getCode,
  Slider: BaseSliderDemo.getCode,
};

export default function BaseUIComponents() {
  const [styling, setStyling] = React.useState<'system' | 'tailwindcss' | 'css'>('system');
  const [demo, setDemo] = React.useState<(typeof DEMOS)[number]>(DEMOS[0]);
  const icons = {
    [DEMOS[0]]: <TabUnselectedRoundedIcon fontSize="small" />,
    [DEMOS[1]]: <SmartButtonRoundedIcon fontSize="small" />,
    [DEMOS[2]]: <InputRoundedIcon fontSize="small" />,
    [DEMOS[3]]: <MenuOpenRoundedIcon fontSize="small" />,
    [DEMOS[4]]: <LinearScaleRoundedIcon fontSize="small" />,
  };
  return (
    <Section bg="gradient"> ``    
    </Section>
  );
}
