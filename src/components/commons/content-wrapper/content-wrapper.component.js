import React from 'react';

import useStyles from './content-wrapper.styles';

const ContentWrapper = ({ children }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {children}
    </main>
  );
};

export default ContentWrapper;
