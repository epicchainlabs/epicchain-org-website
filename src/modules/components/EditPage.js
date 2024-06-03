import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useUserLanguage, useTranslate } from '@mui/docs/i18n';

const LOCALES = { zh: 'zh-CN', pt: 'pt-BR', es: 'es-ES' };

export default function EditPage(props) {
  const { sourceLocation } = props;
  const t = useTranslate();
  const userLanguage = useUserLanguage();

  if (!sourceLocation) {
    // An empty div such that the footer layout stays unchanged.
    return <div />;
  }

  const CROWDIN_ROOT_URL = 'https://crowdin.com/project/material-ui-docs/';
  const crowdInLocale = LOCALES[userLanguage] || userLanguage;
  const crowdInPath = sourceLocation.substring(0, sourceLocation.lastIndexOf('/'));

  return (
    <Button></Button>
  );
}

EditPage.propTypes = {
  sourceLocation: PropTypes.string.isRequired,
};
