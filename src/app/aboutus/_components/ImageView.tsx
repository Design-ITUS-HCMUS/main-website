import Image from 'next/image';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Image1 from '/public/images/aboutus/image_1.png';
import Image2 from '/public/images/aboutus/image_2.png';
import Image3 from '/public/images/aboutus/image_3.png';
import Image4 from '/public/images/aboutus/image_4.png';
import Image5 from '/public/images/aboutus/image_5.png';
import Image6 from '/public/images/aboutus/image_6.png';
import Image7 from '/public/images/aboutus/image_7.png';

export default function ImageView() {
  return (
    <Stack height='56.25rem' padding='8.125rem 7.5rem' justifyContent='center' alignItems='center'>
      <Stack flexDirection='row' alignItems='center' gap={2}>
        <Stack flexDirection='column' gap={4}>
          <Typography variant='caption'>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit.
          </Typography>

          <Image src={Image1} width='233' height='416' alt='Image 1' />
        </Stack>

        <Stack flexDirection='column' gap={2}>
          <Stack flexDirection='row' alignItems='flex-end' gap={2}>
            <Image src={Image2} width='520' height='390' alt='Image 2' />
            <Image src={Image3} width='260' height='260' alt='Image 3' />
            <Image src={Image4} width='140' height='175' alt='Image 4' />
          </Stack>

          <Stack flexDirection='row' alignItems='flex-start' gap={2}>
            <Image src={Image5} width='260' height='208' alt='Image 5' />
            <Image src={Image6} width='391' height='232' alt='Image 6' />

            <Stack flexDirection='column' alignItems='center' gap={2}>
              <Image src={Image7} width='270' height='152' alt='Image 7' />
              <Typography variant='caption'>Lorem ipsum dolor sit amet, consectetur ill</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
