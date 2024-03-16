import * as React from 'react';
import Slideshow from 'react-slideshow-with-pagination';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';

import LeaderCard from './LeaderCard';

import leaderData from '@/libs/data/leaderData.json';

const StyledDiv = styled('div')(({ theme }) => ({
  height: '25rem',
  margin: '0 13rem',
  borderRadius: 'none',
  [theme.breakpoints.down('md')]: {
    height: 'fit-content',
    margin: '0 1.125rem',
  },
}));

export default function Leaders() {
  return (
    <StyledDiv id='Leaders'>
      <Box sx={{ flexGrow: 1, borderRadius: 'none' }}>
        <Slideshow showDots={true} interval={3000}>
          {leaderData.map((leader, index) => (
            <LeaderCard
              name={leader.name}
              position={leader.position}
              image={leader.image}
              description={leader.description}
              key={index}
            />
          ))}
        </Slideshow>
      </Box>
    </StyledDiv>
  );
}
