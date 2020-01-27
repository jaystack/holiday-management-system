import React, { useReducer, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';

const reducer = (state, {
  type, value, key
}) => {
  switch (type) {
    case 'PROFILE_CHANGED':
      return { ...state, ...value };
    case 'ADD_SKILL':
      return {
        ...state,
        skills:
        value
          ? [...state.skills, value]
          : state.skills
      };
    case 'REMOVE_SKILL':
      return { ...state, skills: state.skills.filter(element => element !== value) };
    case 'VALIDATE':
      return value;
    default:
      return { ...state, [key]: value };
  }
};

const initialState = {
  setOpen: false,
};
const EditProfile = ({ userData, modifyUserData }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ value: userData, type: 'PROFILE_CHANGED' });
  }, [userData]);
  const handleClickOpen = () => dispatch({ value: true, key: 'setOpen' });

  const handleClose = () => dispatch({ value: false, key: 'setOpen' });

  const handleSubmit = () => {
    const { setOpen, ...modifiedUserData } = state;
    modifyUserData(modifiedUserData);
    dispatch({ value: false, key: 'setOpen' });
  };
  const handleChange = ({ target }) => dispatch({ value: target.value, key: target.name || target.id });

  const handleChangeSkills = ({ target }) => dispatch({ value: target.value, type: 'ADD_SKILL' });
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        <EditIcon />
      </Button>
      <Dialog
        open={state.setOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
        Edit User Details
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Change your information
          </DialogContentText>
          <FormControl>
            {Object.keys(userData).map(key => (
              key !== 'skills'
                ? (
                  <TextField
                    variant="filled"
                    name={key}
                    key={key}
                    id={key}
                    label={key}
                    type={key === 'email' ? 'email' : 'text'}
                    fullWidth
                    value={state?.[key] || ''}
                    onChange={handleChange}
                  />
                ) : null
            ))}
            <Autocomplete
              multiple
              id="skills"
              name="skills"
              onChange={handleChangeSkills}
              options={[]}
              value={state?.skills || userData.skills}
              freeSolo
              renderTags={(value, getTagProps) => value.map((skill, index) => (
                <Chip
                  variant="outlined"
                  label={skill}
                  id={skill}
                  name={skill}
                  {...getTagProps({ index })}
                  onDelete={() => dispatch({ value: skill, type: 'REMOVE_SKILL' })}
                />
              ))}
              renderInput={params => (
                <TextField
                  {...params}
                  variant="filled"
                  label="Skills"
                  placeholder="Skills"
                  fullWidth
                />
              )}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

EditProfile.propTypes = {
  userData: PropTypes.shape({
    email: PropTypes.string,
    fullName: PropTypes.string,
    jobTitle: PropTypes.string,
    jobLevel: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  modifyUserData: PropTypes.func.isRequired,
};

export default EditProfile;
