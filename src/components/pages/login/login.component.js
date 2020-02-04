import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';

import Section from '../../commons/section/section.component';
import useStyles from './login.styles';

const Login = ({
  authenticateUser, setUserCredentials, authError, validateJwtToken, jwtToken
}) => {
  useEffect(() => {
    if (jwtToken) validateJwtToken(jwtToken);
  },
  [validateJwtToken, jwtToken]);
  const classes = useStyles();

  const handleOnChange = event => {
    event.persist();
    const { id, value } = event.target;
    setUserCredentials({ id, value });
  };

  const errorAlert = authError?.message
    ? (
      <Alert severity="error">
        Login Failed:
        {` ${authError.message}`}
      </Alert>
    ) : '';

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
                {errorAlert}
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    onChange={handleOnChange}
                    autoComplete="email"
                    margin="normal"
                  />
                  <TextField
                    id="password"
                    label="Password"
                    type="password"
                    onChange={handleOnChange}
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
                  onClick={authenticateUser}
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

Login.propTypes = {
  authenticateUser: PropTypes.func.isRequired,
  setUserCredentials: PropTypes.func.isRequired,
  validateJwtToken: PropTypes.func.isRequired,
  jwtToken: PropTypes.string.isRequired,
  authError: PropTypes.shape({
    message: PropTypes.string,
    title: PropTypes.string,
  }).isRequired

};
