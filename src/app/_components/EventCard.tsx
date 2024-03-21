import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import colors from '@/libs/ui/colors';

interface EventContent {
  name: string;
  link: string;
  description: string;
  image: string;
}

export default function EventCard({ name, link, description, image }: EventContent) {
  return (
    <Link href={link}>
      <Card sx={{ border: '2px solid ' + colors.blue[900], borderRadius: '0', boxShadow: 'none' }}>
        <CardMedia>
          <Image
            width={376}
            height={263}
            style={{
              width: '100%',
              height: '100',
              aspectRatio: '4 / 3',
              objectFit: 'cover',
              borderBottom: '2px solid ' + colors.blue[900],
            }}
            src={image}
            alt={name}
          />
        </CardMedia>

        <CardContent>
          <Typography variant='h6' fontWeight='700'>
            {name}
          </Typography>

          <Typography>{description}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
