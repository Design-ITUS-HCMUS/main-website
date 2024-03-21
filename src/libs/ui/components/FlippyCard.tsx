'use client';
import React from 'react';
import Image from 'next/image';

import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

interface FlippyProps {
  department: string;
  backImgUrl: string;
  borderRadius: string;
  imgBorderRadius: string;
  color: string;
  bgColor: string;
}

interface FrontSideProps {
  backgroundColor: string;
  borderRadius: string;
}

const Card = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
  transformStyle: 'preserve-3d',
  transition: 'all 0.5s ease-in-out',
  '&:hover': {
    transform: 'rotateY(180deg)',
  },
});

const FrontSide = styled('div', {
  shouldForwardProp: (prop) => prop !== 'backgroundColor' && prop !== 'borderRadius',
})<FrontSideProps>(({ backgroundColor, borderRadius }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: backgroundColor,
  borderRadius: borderRadius,
  backfaceVisibility: 'hidden',
}));

const BackSide = styled('div')({
  position: 'absolute',
  top: 0,
  backfaceVisibility: 'hidden',
  transform: 'rotateY(180deg)',
});

export default function FlippyCard({
  department,
  backImgUrl,
  borderRadius,
  imgBorderRadius,
  color,
  bgColor,
}: FlippyProps) {
  return (
    <Card>
      <FrontSide backgroundColor={bgColor} borderRadius={borderRadius}>
        <Typography variant='h6' fontWeight={700} color={color}>
          {department}
        </Typography>
      </FrontSide>

      <BackSide>
        <Image
          src={backImgUrl}
          width='300'
          height='300'
          alt={department}
          style={{
            width: '100%',
            height: '100%',
            aspectRatio: '1/1',
            objectFit: 'cover',
            borderRadius: imgBorderRadius,
          }}
        />
      </BackSide>
    </Card>
  );
}
