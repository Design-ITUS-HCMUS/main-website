import Flippy, { BackSide, FrontSide } from 'react-flippy';
import Image from 'next/image';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface FlippyProps {
  department: string;
  backImgUrl: string;
  borderRadius: string;
  imgBorderRadius: string;
  color: string;
  bgColor: string;
}

export default function FlippyCard({
  department,
  backImgUrl,
  borderRadius,
  imgBorderRadius,
  color,
  bgColor,
}: FlippyProps) {
  return (
    <Flippy flipOnHover={true} flipDirection='horizontal' style={{ width: '100%', height: '100%' }}>
      <FrontSide style={{ padding: 0, boxShadow: 'none' }}>
        <Stack
          justifyContent='center'
          alignItems='center'
          sx={{
            width: '100%',
            height: '100%',
            backgroundColor: bgColor,
            borderRadius: borderRadius,
          }}>
          <Typography variant='h6' fontWeight={700} color={color}>
            {department}
          </Typography>
        </Stack>
      </FrontSide>

      <BackSide style={{ padding: 0, boxShadow: 'none' }}>
        <Image
          src={backImgUrl}
          width='300'
          height='300'
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: imgBorderRadius }}
          alt={department}
        />
      </BackSide>
    </Flippy>
  );
}
