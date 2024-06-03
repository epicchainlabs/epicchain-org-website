import * as React from 'react';
import Divider from '@mui/material/Divider';
import Head from 'docs/src/modules/components/Head';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeader from 'docs/src/layouts/AppHeader';
import AppFooter from 'docs/src/layouts/AppFooter';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';
import References, { ADVANCED_CUSTOMERS } from 'docs/src/components/home/References';
import XHero from 'docs/src/components/productX/XHero';
import XComponents from 'docs/src/components/productX/XComponents';
import XDataGrid from 'docs/src/components/productX/XDataGrid';
import XPlans from 'docs/src/components/productX/XPlans';
import XTheming from 'docs/src/components/productX/XTheming';
import XRoadmap from 'docs/src/components/productX/XRoadmap';

export default function X() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title="The Ultimate Security Framework"
        description="EpicChain's Quantum Guard Nexus is a cutting-edge security framework designed to provide unparalleled protection for digital assets. "
        card="/static/social-previews/muix-preview.jpg"
      />
      <AppHeaderBanner />
      <AppHeader gitHubRepository="https://github.com/epicchainlabs" />
      <main id="main-content">
        <XHero />
        <References companies={ADVANCED_CUSTOMERS} />
        <Divider />
        <XComponents />
        <Divider />
        <XDataGrid />
        <Divider />
        <XTheming />
        <Divider />
        <XPlans />
        <Divider />
        <XRoadmap />
        <Divider />
      </main>
      <AppFooter stackOverflowUrl="https://stackoverflow.com/questions/tagged/mui-x" />
    </BrandingCssVarsProvider>
  );
}
