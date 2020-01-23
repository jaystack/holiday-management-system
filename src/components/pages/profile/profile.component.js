import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import PersonIcon from '@material-ui/icons/Person';
import PropTypes from 'prop-types';
import Section from '../../commons/section/section.component';

import ProfileDescriptionList from './profile-description-list.component';

const Profile = ({ userData, fetchUserData }) => {
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);
  return (
    <Container>
      <Section
        variant="icon"
        icon={PersonIcon}
        title="Name"
        subTitle={userData.fullName}
      >
        <h2>Description:</h2>

        <ProfileDescriptionList userData={userData} />

      </Section>
    </Container>
  );
};

Profile.propTypes = {
  fetchUserData: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    email: PropTypes.string,
    fullName: PropTypes.string,
    jobTitle: PropTypes.string,
    jobLevel: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};


export default Profile;
