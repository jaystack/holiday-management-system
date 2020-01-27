import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import PersonIcon from '@material-ui/icons/Person';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Section from '../../commons/section/section.component';
import EditProfile from '../../widgets/edit-profile/edit-profile.container';
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
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <h3>Details:</h3>
            <ProfileDescriptionList userData={userData} />
          </Grid>
          <Grid item xs={1}>
            <EditProfile userData={userData} />
          </Grid>
        </Grid>
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
