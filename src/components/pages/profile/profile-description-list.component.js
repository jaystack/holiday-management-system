import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

const ProfileDescriptionList = ({ userData }) => {
  const userDataKeys = Object.keys(userData);
  const descList = userDataKeys.map((key,index) => (
    <ListItemText
      primary={key}
      secondary={userData[key]}
      key={key}
    />
  ));
  return (
    <List>
      <ListItem>
        {descList}
      </ListItem>
    </List>
  );
};

ProfileDescriptionList.propTypes = {
  userData: PropTypes.shape({
    fullName: PropTypes.string,
    jobTitle: PropTypes.string,
    jobLevel: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default ProfileDescriptionList;
