// Material UI Components
import { styled, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

// Local Imports
import { EventCard } from './EventCard';
import eventData from '@/libs/data/eventData.json';

const StyledDiv = styled('div')(({ theme }) => ({
  height: '50rem',
  margin: '0 7.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    height: '37.5rem',
    margin: '0 1.125rem',
  },
}));

export function LatestEvents() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const displayedEvents = !isMobile ? eventData : eventData.slice(0, 1);

  return (
    <StyledDiv>
      <Typography variant='title' marginBottom={{ xs: 4, md: 8 }} id='LastestEvents'>
        SỰ KIỆN GẦN ĐÂY
      </Typography>

      <Grid container spacing={4}>
        {displayedEvents.map((event, index) => {
          return (
            <Grid item xs={12} md={4} key={index}>
              <EventCard name={event.name} link={event.link} image={event.image} description={event.description} />
            </Grid>
          );
        })}
      </Grid>

      <Button sx={{ marginTop: 4 }}>Xem thêm sự kiện</Button>
    </StyledDiv>
  );
}
