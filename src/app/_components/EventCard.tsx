// React and Next
import * as React from 'react';
import Image from 'next/image';

// Material UI Components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// Local Imports
import colors from '@/libs/ui/colors';

interface EventContent {
  name: string;
  link: string;
  description: string;
  image: string;
}

export function EventCard({ name, link, description, image }: EventContent) {
  return (
    <a href={link}>
      <Card sx={{ border: '2px solid ' + colors.blue[900], borderRadius: '0', boxShadow: 'none' }}>
        <CardMedia>
          <Image
            width={376}
            height={263}
            style={{ width: '100%', objectFit: 'cover', borderBottom: '2px solid ' + colors.blue[900] }}
            src={image}
            alt={name}
          />
        </CardMedia>

        <CardContent>
          <Typography variant='h6' fontWeight='700'>
            {name}
          </Typography>

          <Typography variant='body2'>{description}</Typography>
        </CardContent>
      </Card>
    </a>
  );
}
