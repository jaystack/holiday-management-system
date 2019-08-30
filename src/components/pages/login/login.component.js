import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { FormControl, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import useStyles from './login.styles';

const LoginPage = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: '100vh' }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
      >
        <Paper className={classes.paper}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={12}
              className={classes.imageFix}
            >
              <img
                src="/images/js-logo-b.png"
                alt="JayStack logo"
                className={classes.logo}
                draggable={false}
              />
              <Typography>Login</Typography>
            </Grid>
            <Grid
              item
              xs={12}
            >
              <FormControl fullWidth>
                <TextField
                  id="outlined-email-input"
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                />
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                />
              </FormControl>
            </Grid>
            <Grid
              item
              className={classes.buttonFix}
              xs={12}
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.halfWidth}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
