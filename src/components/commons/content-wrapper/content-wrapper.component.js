import React from 'react';
import Container from '@material-ui/core/Container';

import useStyles from './content-wrapper.styles';

const ContentWrapper = ({ children }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Container maxWidth="sm" className={classes.container}>
        {children}
      </Container>
    </main>
  );
};

export default ContentWrapper;
