import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Section from '../../commons/section/section.component';
import useStyles from './login.styles';

const Login = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={false}>
      <Grid container className={classes.grid}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
        >
          <Section>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <div className={classes.logoContainer}>
                  <img
                    src="/images/js-logo-b.png"
                    alt="JayStack logo"
                    className={classes.logo}
                    draggable={false}
                  />
                </div>
                <Typography align="center">
                  Holiday Manager
                </Typography>
              </Grid>
              <Grid item xs={12}>
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
                className={classes.buttonContainer}
                xs={12}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </Section>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
