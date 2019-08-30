import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import CheckIcon from '@material-ui/icons/CheckOutlined';

import Section from '../../commons/section/section.component';

const Dashboard = () => (
  <Container maxWidth={false}>
    <Section
      variant="icon"
      icon={CheckIcon}
      title="Title"
      subTitle="Value"
      color="warning"
    >
      <Typography>
        Dashboard page...
      </Typography>
    </Section>
    <Section
      variant="title"
      title="Title that a bit longer"
      subTitle="Subtitle that just exist"
      color="error"
    >
      <Typography>
        The usual content goes here...
      </Typography>
    </Section>
  </Container>
);

export default Dashboard;
