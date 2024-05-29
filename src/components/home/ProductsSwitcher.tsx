import * as React from 'react';
import dynamic from 'next/dynamic';
import { Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { visuallyHidden } from '@mui/utils';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import IconImage from 'docs/src/components/icon/IconImage';
import Highlighter from 'docs/src/components/action/Highlighter';
import { Link } from '@mui/docs/Link';
import ROUTES from 'docs/src/route';

const SwipeableViews = dynamic(() => import('react-swipeable-views'), { ssr: false });

function ProductItem({
  label,
  icon,
  name,
  description,
  href,
}: {
  label: string;
  icon: React.ReactNode;
  name: React.ReactNode;
  description: React.ReactNode;
  href: string;
}) {
  return (
    <Box
      component="span"
      sx={{
        display: 'flex',
        p: 2,
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { md: 'center' },
        gap: 2.5,
      }}
    >
      <span>{icon}</span>
      <span>
        <Typography
          component="span"
          color="text.primary"
          variant="body2"
          fontWeight="bold"
          display="block"
        >
          {name}
        </Typography>
        <Typography
          component="span"
          color="text.secondary"
          variant="body2"
          fontWeight="regular"
          display="block"
          sx={{ my: 0.5 }}
        >
          {description}
        </Typography>
        <Link
          href={href}
          color="primary"
          variant="body2"
          fontWeight="bold"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            '& > svg': { transition: '0.2s' },
            '&:hover > svg': { transform: 'translateX(2px)' },
          }}
          onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
            event.stopPropagation();
          }}
        >
          <span>Learn more</span>{' '}
          <Box component="span" sx={visuallyHidden}>
            {label}
          </Box>
          <KeyboardArrowRightRounded fontSize="small" sx={{ mt: '1px', ml: '2px' }} />
        </Link>
      </span>
    </Box>
  );
}

export default function ProductsSwitcher(props: {
  inView?: boolean;
  productIndex: number;
  setProductIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { inView = false, productIndex, setProductIndex } = props;
  const isBelowMd = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const productElements = [
    <ProductItem
      label="by going to the Core components page"
      icon={<IconImage name="product-core" />}
      name="Quantum Guard Nexus"
      description="Our robust security framework ensures the highest level of protection for your digital assets, providing peace of mind in an increasingly digital world."
      href={ROUTES.productCore}
    />,
    <ProductItem
      label="by going to the Advanced components page"
      icon={<IconImage name="product-advanced" />}
      name={
        <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center' }}>
          Quantum Vault Asset
        </Box>
      }
      description="With advanced asset management tools and capabilities, EpicChain makes managing your digital assets seamless and efficient, empowering you with greater control and flexibility."
      href={ROUTES.productAdvanced}
    />,
    <ProductItem
      label="by going to the templates page"
      icon={<IconImage name="product-templates" />}
      name="Multi-Language Smart Contracts"
      description="EpicChain supports a variety of programming languages in its smart contracts, making it accessible and versatile for developers from different backgrounds and expertise levels."
      href={ROUTES.productTemplates}
    />,
    <ProductItem
      label="by going to the design-kits page"
      icon={<IconImage name="product-designkits" />}
      name="Decentralized Governance"
      description="EpicChain promotes active participation in its ecosystem through decentralized governance, allowing token holders to have a voice in decision-making processes and earn rewards for their involvement."
      href={ROUTES.productDesignKits}
    />,
  ];
  return (
    <React.Fragment>
      <Box
        sx={{
          display: { md: 'none' },
          maxWidth: 'calc(100vw - 40px)',
          minHeight: { xs: 200, sm: 166 },
          '& > div': { pr: '32%' },
        }}
      >
        {isBelowMd && inView && (
          <SwipeableViews
            index={productIndex}
            resistance
            enableMouseEvents
            onChangeIndex={(index) => setProductIndex(index)}
          >
            {productElements.map((elm, index) => (
              <Highlighter
                key={index}
                disableBorder
                onClick={() => setProductIndex(index)}
                selected={productIndex === index}
                sx={{
                  width: '100%',
                  transition: '0.3s',
                  transform: productIndex !== index ? 'scale(0.9)' : 'scale(1)',
                }}
              >
                {elm}
              </Highlighter>
            ))}
          </SwipeableViews>
        )}
      </Box>
      <Stack spacing={1} sx={{ display: { xs: 'none', md: 'flex' }, maxWidth: 500 }}>
        {productElements.map((elm, index) => (
          <Highlighter
            key={index}
            disableBorder
            onClick={() => setProductIndex(index)}
            selected={productIndex === index}
          >
            {elm}
          </Highlighter>
        ))}
      </Stack>
    </React.Fragment>
  );
}
