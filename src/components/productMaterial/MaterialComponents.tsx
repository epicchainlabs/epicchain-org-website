import * as React from 'react';
import { Experimental_CssVarsProvider as CssVarsProvider, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Button, { buttonClasses } from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import InputRounded from '@mui/icons-material/InputRounded';
import SmartButtonRounded from '@mui/icons-material/SmartButtonRounded';
import TableViewRounded from '@mui/icons-material/TableViewRounded';
import WarningRounded from '@mui/icons-material/WarningRounded';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';
import InfoRounded from '@mui/icons-material/InfoRounded';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import Item, { Group } from 'docs/src/components/action/Item';
import Highlighter from 'docs/src/components/action/Highlighter';
import More from 'docs/src/components/action/More';
import Frame from 'docs/src/components/action/Frame';
import { customTheme } from 'docs/src/components/home/MaterialDesignComponents';
import { HighlightedCode } from '@mui/docs/HighlightedCode';

import StylingInfo from 'docs/src/components/action/StylingInfo';
import ROUTES from 'docs/src/route';

const DEMOS = ['Button', 'Text field', 'Table', 'Alert', 'Tooltip'] as const;

const CODES = {
  Button: `
  <Button variant="text" startIcon={<ShoppingCartRounded />}>
  Add item
</Button>
<Button variant="contained" startIcon={<ShoppingCartRounded />}>
  Add item
</Button>
<Button variant="outlined" startIcon={<ShoppingCartRounded />}>
  Add item
</Button>
`,
  'Text field': `
  <TextField variant="standard" label="Username" />
<TextField variant="outlined" label="Email" type="email" />
<TextField variant="filled" label="Password" type="password" />
`,
  Table: `
<TableContainer
  component={Paper}
  variant="outlined"
>
  <Table aria-label="demo table">
    <TableHead>
      <TableRow>
        <TableCell>Dessert</TableCell>
        <TableCell>Calories</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Frozen yoghurt</TableCell>
        <TableCell>109</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cupcake</TableCell>
        <TableCell>305</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>
`,
  Alert: `
  <Alert variant="standard" color="info">
  This is an alert!
</Alert>
<Alert variant="outlined" color="info">
  This is an alert!
</Alert>
<Alert variant="filled" color="info">
  This is an alert!
</Alert>
`,
  Tooltip: `
  <Tooltip title="This is a tooltip" arrow placement="top">
  <Typography>Top</Typography>
</Tooltip>
<Tooltip title="This is a tooltip" arrow placement="right">
  <Typography>Right</Typography>
</Tooltip>
<Tooltip title="This is a tooltip" arrow placement="left">
  <Typography>Left</Typography>
</Tooltip>
<Tooltip title="This is a tooltip" arrow placement="bottom">
  <Typography>Bottom</Typography>
</Tooltip>
`,
};

export default function MaterialComponents() {
  const [demo, setDemo] = React.useState<(typeof DEMOS)[number]>(DEMOS[0]);
  const [customized, setCustomized] = React.useState(false);
  const icons = {
    [DEMOS[0]]: <SmartButtonRounded fontSize="small" />,
    [DEMOS[1]]: <InputRounded fontSize="small" />,
    [DEMOS[2]]: <TableViewRounded fontSize="small" />,
    [DEMOS[3]]: <WarningRounded fontSize="small" />,
    [DEMOS[4]]: <InfoRounded fontSize="small" />,
  };
  return (
    <Section bg="gradient">
    </Section>
  );
}
