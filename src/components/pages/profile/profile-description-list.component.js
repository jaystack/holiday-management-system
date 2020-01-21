import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

const ProfileDescriptionList = ({ userData }) => (
  <List>
    {Object.keys(userData).map(key => (
      <ListItem key={key}>
        <ListItemText
          primary={key}
          secondary={userData[key]}
        />
      </ListItem>
    ))}
  </List>
);

ProfileDescriptionList.propTypes = {
  userData: PropTypes.shape({
    email: PropTypes.string,
    fullName: PropTypes.string,
    jobTitle: PropTypes.string,
    jobLevel: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default ProfileDescriptionList;
