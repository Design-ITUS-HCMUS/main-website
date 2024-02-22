// Material UI Components
import { styled, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

// Local Imports
import { EventCard } from './EventCard';

const eventData = [
  {
    name: 'TÊN SỰ KIỆN 1',
    link: '/',
    image: '/images/eventimage.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
  },
  {
    name: 'TÊN SỰ KIỆN 2',
    link: '/',
    image: '/images/placeholder.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
  },
  {
    name: 'TÊN SỰ KIỆN 3',
    link: '/',
    image: '/images/eventimage.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
  },
];

const StyledDiv = styled('div')(({ theme }) => ({
  margin: '7.5rem 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    margin: '2rem 0',
  },
}));

export function LatestEvents() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const displayedEvents = !isMobile ? (!isTablet ? eventData : eventData.slice(0, 2)) : eventData.slice(0, 1);

  return (
    <StyledDiv>
      <Typography variant='title' marginBottom={{ xs: 4, md: 8 }} id='LastestEvents'>
        SỰ KIỆN GẦN ĐÂY
      </Typography>

      <Grid container spacing={4}>
        {displayedEvents.map((event, index) => {
          return (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <EventCard name={event.name} link={event.link} image={event.image} description={event.description} />
            </Grid>
          );
        })}
      </Grid>

      <Button variant='contained' sx={{ marginTop: 4 }}>
        Xem thêm sự kiện
      </Button>
    </StyledDiv>
  );
}
