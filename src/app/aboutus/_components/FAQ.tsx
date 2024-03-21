import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { styled } from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import faq from '@/libs/data/faqData.json';

const socials = [
  {
    name: 'Behance',
    link: 'https://www.behance.net/designitusclub',
    icon: '/logos/behance.svg',
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/@designitus2432',
    icon: '/logos/youtube.svg',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/designstudios/',
    icon: '/logos/linkedin.svg',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/designitusclub/',
    icon: '/logos/instagram.svg',
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/design.itus',
    icon: '/logos/facebook.svg',
  },
];

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&:first-child': {
      borderTop: 0,
    },
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&::before': {
      display: 'none',
    },
  })
);

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Stack height='37.5rem' padding='3.75rem 7.5rem' alignItems='center'>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Stack width='40%' mb={4}>
            <Typography variant='title'>LET&apos;S WORK TOGETHER</Typography>
          </Stack>

          <Stack gap={4}>
            <Stack>
              <Typography variant='h6' fontWeight={700}>
                Địa chỉ
              </Typography>
              <Typography component={Link} href='https://maps.app.goo.gl/pjn533phX9AGDbQH9' target='_blank'>
                <b>Cơ sở 1:</b> 227 Nguyễn Văn Cừ, phường 10, quận 5, TP.HCM
              </Typography>
              <Typography component={Link} href='https://maps.app.goo.gl/DSZQMkcHmPCPLbHm7' target='_blank'>
                <b>Cơ sở 2:</b> Linh Xuân, Linh Trung, Thủ Đức
              </Typography>
            </Stack>

            <Stack>
              <Typography variant='h6' fontWeight={700}>
                Email
              </Typography>
              <Typography component={Link} href='mailto:designclub@fit.hcmus.edu.vn'>
                designclub@fit.hcmus.edu.vn
              </Typography>
            </Stack>

            <Stack>
              <Typography variant='h6' fontWeight={700}>
                Số điện thoại
              </Typography>
              <Typography>0939 074 483</Typography>
            </Stack>

            <Stack>
              <Typography variant='h6' fontWeight={700}>
                Theo dõi chúng mình tại
              </Typography>
              <Stack flexDirection='row' mt={1} gap={4}>
                {socials.map((social, index) => {
                  return (
                    <Link href={social.link} target='_blank' key={index}>
                      <Image src={social.icon} width='0' height='24' style={{ width: 'auto' }} alt={social.name} />
                    </Link>
                  );
                })}
              </Stack>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <div>
            {faq.map((item, index) => {
              return (
                <Accordion
                  defaultExpanded={index === 0 ? true : false}
                  expanded={expanded === `${index}`}
                  onChange={handleChange(`${index}`)}
                  key={index}
                  sx={{ boxShadow: 'none' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: 0 }}>
                    <Typography fontWeight={600}>{item.question}</Typography>
                  </AccordionSummary>

                  <AccordionDetails>
                    <Typography>{item.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </div>
        </Grid>
      </Grid>
    </Stack>
  );
}
