'use client';
import { useEffect,useRef, useState } from 'react';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import LeaderCard from './LeaderCard';

import leaderData from '@/libs/data/leaderData.json';
import { colors } from '@/libs/ui';

const delay = 3000;

const StyledGrid = styled(Grid)(({ theme }) => ({
  height: '25rem',
  padding: '0 8rem',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  [theme.breakpoints.down('md')]: {
    height: 'fit-content',
    padding: '0 1rem',
    gap: '1rem',
  },
}));

const StyledDot = styled('div', {
  shouldForwardProp: (props) => props !== 'active',
})<{ active: boolean }>(({ theme, active }) => ({
  zIndex: 2,
  display: 'inline-block',
  height: '12px',
  width: '12px',
  borderRadius: '50%',
  cursor: 'pointer',
  background: active ? colors.neutral[300] : colors.neutral[100],
  [theme.breakpoints.down('sm')]: {
    height: '.5rem',
    width: '.5rem',
  },
}));

const SlideShowDots = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '12px',
  [theme.breakpoints.down('sm')]: {
    gap: '.5rem',
  },
}));

const Overflow = styled('div')({
  width: '100%',
  overflow: 'hidden',
});

const Inner = styled('div')({
  display: 'flex',
});

export default function Leaders() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<number | null>(0);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(
      () => setIndex((prevIndex) => (prevIndex === leaderData.length - 1 ? 0 : prevIndex + 1)),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  const offset = 100.0 / leaderData.length;

  return (
    <StyledGrid container id='Leaders'>
      <Box
        component={Grid}
        item
        xs={12}
        md={10}
        sx={{
          display: 'flex',
          overflow: 'hidden',
          borderRadius: 'none',
        }}>
        <Overflow>
          <Inner
            sx={{
              transform: `translate3d(${-index * offset}%, 0, 0)`,
              transition: 'ease 1000ms',
              width: `${leaderData.length * 100}%`,
            }}>
            {leaderData.map((leader, id) => (
              <LeaderCard
                name={leader.name}
                position={leader.position}
                image={leader.image}
                description={leader.description}
                width={offset}
                key={id}
              />
            ))}
          </Inner>
        </Overflow>
      </Box>
      <Grid item xs={12}>
        <SlideShowDots>
          {leaderData.map((_, idx) => (
            <StyledDot key={idx} active={index === idx} onClick={() => setIndex(idx)} />
          ))}
        </SlideShowDots>
      </Grid>
    </StyledGrid>
  );
}
