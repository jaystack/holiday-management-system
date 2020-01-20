import React from 'react';
import Container from '@material-ui/core/Container';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import Section from '../../commons/section/section.component';

import ProfileDescriptionList from './profile-description-list.component';

const userData = {
  fullName: 'Daniel Sábic',
  jobTitle: 'Software Developer',
  jobLevel: 'Junior',
  skills: ['nodejs,devops']
};
const Profile = () => (
  <Container>
    <Section
      variant="icon"
      icon={HomeSharpIcon}
      title="Name"
      subTitle={userData.fullName}
    >
      <h2>Description:</h2>

      <ProfileDescriptionList userData={userData} />

    </Section>
  </Container>
);

export default Profile;
