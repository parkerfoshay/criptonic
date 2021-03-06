import React, { Fragment } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export const SignUp = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="confirm-password"
        label="Confirm Password"
        type="confirm-password"
        id="confirm-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Want to recieve our newsletter?"
      />
      <FormControlLabel
        control={<Checkbox value="ToS" color="primary" />}
        label="Agree to our Terms of Service?"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign Up!
      </Button>
    </Fragment>
  );
};
