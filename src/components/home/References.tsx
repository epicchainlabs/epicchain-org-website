import * as React from 'react';
import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Section from 'docs/src/layouts/Section';
import {
  CORE_CUSTOMERS,
  ADVANCED_CUSTOMERS,
  DESIGNKITS_CUSTOMERS,
  TEMPLATES_CUSTOMERS,
} from 'docs/src/components/home/CompaniesGrid';

export { CORE_CUSTOMERS, ADVANCED_CUSTOMERS, DESIGNKITS_CUSTOMERS, TEMPLATES_CUSTOMERS };

const CompaniesGrid = dynamic(() => import('./CompaniesGrid'));

export default function References({
  companies,
}: {
  companies:
    | typeof CORE_CUSTOMERS
    | typeof ADVANCED_CUSTOMERS
    | typeof DESIGNKITS_CUSTOMERS
    | typeof TEMPLATES_CUSTOMERS;
}) {
  return (
    <Section cozy bg="transparent">
    </Section>
  );
}
