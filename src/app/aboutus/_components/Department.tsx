import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import FlippyCard from '@/libs/ui/components/FlippyCard';

const departments = [
  {
    name: 'Graphic',
    frontImg: '/decor/aboutus/graphic.svg',
    backImg: '/images/aboutus/department/Graphic.png',
    borderRadius: '30% 0',
  },
  {
    name: 'Drawing',
    frontImg: '/decor/aboutus/drawing.svg',
    backImg: '/images/aboutus/department/Drawing.png',
    borderRadius: '50%',
  },
  {
    name: 'Video',
    frontImg: '/decor/aboutus/video.svg',
    backImg: '/images/aboutus/department/Video.png',
    borderRadius: '0 30%',
  },
  {
    name: 'Photography',
    frontImg: '/decor/aboutus/photo.svg',
    backImg: '/images/aboutus/department/Photography.png',
    borderRadius: '0',
  },
  {
    name: 'Content',
    frontImg: '/decor/aboutus/content.svg',
    backImg: '/images/aboutus/department/Content.png',
    borderRadius: '50%',
  },
  {
    name: 'UI/UX',
    frontImg: '/decor/aboutus/uiux.svg',
    backImg: '/images/aboutus/department/Content.png',
    borderRadius: '0',
  },
];

export default function Department() {
  return (
    <Stack height='50rem' padding='6.25rem 7.5rem' display='flex' alignItems='center'>
      <Grid container lineHeight={0}>
        <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant='title' textAlign='center' width='160px' height='auto' lineHeight='normal'>
            BAN HOẠT ĐỘNG
          </Typography>
        </Grid>

        {departments.map((department, index) => (
          <Grid item xs={12} md={3} key={index}>
            <FlippyCard
              frontImgUrl={department.frontImg}
              backImgUrl={department.backImg}
              imgName={department.name}
              borderRadius={department.borderRadius}
            />
          </Grid>
        ))}

        <Grid
          item
          xs={12}
          md={3}
          sx={{ padding: '3.375rem 3.75rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant='body1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore. <br />
            Cras tincidunt lobortis feugiat vivamus a
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
}
