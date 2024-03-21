import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { colors,FlippyCard } from '@/libs/ui';

const departments = [
  {
    name: 'Graphic',
    backImg: '/images/aboutus/department/Graphic.png',
    borderRadius: '0 30%',
    imgBorderRadius: '30% 0',
    color: colors.neutral[500],
    bgColor: colors.complementary.green,
  },
  {
    name: 'Drawing',
    backImg: '/images/aboutus/department/Drawing.png',
    borderRadius: '50%',
    imgBorderRadius: '50%',
    color: colors.neutral.white,
    bgColor: colors.complementary.blue,
  },
  {
    name: 'Video',
    backImg: '/images/aboutus/department/Video.png',
    borderRadius: '30% 0',
    imgBorderRadius: '0 30%',
    color: colors.neutral.white,
    bgColor: colors.complementary.orange,
  },
  {
    name: 'Photography',
    backImg: '/images/aboutus/department/Photography.png',
    borderRadius: '0',
    imgBorderRadius: '0',
    color: colors.neutral.white,
    bgColor: colors.complementary.blue,
  },
  {
    name: 'Content',
    backImg: '/images/aboutus/department/Content.png',
    borderRadius: '50%',
    imgBorderRadius: '50%',
    color: colors.neutral.white,
    bgColor: colors.complementary.orange,
  },
  {
    name: 'UI/UX',
    backImg: '/images/aboutus/department/Content.png',
    borderRadius: '0',
    imgBorderRadius: '0',
    color: colors.neutral[500],
    bgColor: colors.complementary.green,
  },
];

export default function Department() {
  return (
    <Stack minHeight='50rem' padding='6.25rem 7.5rem' display='flex' justifyContent='center'>
      <Grid container lineHeight={0}>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            xs: {
              aspectRatio: '1/1',
            },
          }}>
          <Typography variant='title' textAlign='center' width='160px' height='auto' lineHeight='normal'>
            BAN HOẠT ĐỘNG
          </Typography>
        </Grid>

        {departments.map((department, index) => (
          <Grid item xs={6} md={3} key={index} sx={{ aspectRatio: '1/1' }}>
            <FlippyCard
              department={department.name}
              backImgUrl={department.backImg}
              borderRadius={department.borderRadius}
              imgBorderRadius={department.imgBorderRadius}
              color={department.color}
              bgColor={department.bgColor}
            />
          </Grid>
        ))}

        <Grid
          item
          xs={12}
          md={3}
          sx={{
            padding: '0 3.75rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            aspectRatio: '1/1',
          }}>
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
