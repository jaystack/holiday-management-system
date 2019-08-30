import React from 'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { FormControl, Typography } from '@material-ui/core';

import useStyles from './login.styles';


const Login = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainGrid}>
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
            >
              <Typography align="center">
                <img
                  src="/images/js-logo-b.png"
                  alt="JayStack logo"
                  className={classes.logo}
                  draggable={false}
                />
              </Typography>
              <Typography align="center">
                Login
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
            >
              <FormControl fullWidth>
                <TextField
                  id="email-input"
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                />
                <TextField
                  id="password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                />
              </FormControl>
            </Grid>
            <Grid
              item
              className={classes.buttonCentering}
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

export default Login;
