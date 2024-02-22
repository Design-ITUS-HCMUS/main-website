// React and Next
import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

// Material UI Components
import { styled, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import { colors } from '../../libs/ui';
// Local Imports
import { LeaderCard } from './LeaderCard';

const StyledDiv = styled('div')(({ theme }) => ({
  margin: '0 6.25rem',
  borderRadius: 'none',
  [theme.breakpoints.down('sm')]: {
    margin: '2rem 0',
  },
}));

const leaderData = [
  {
    name: 'LÊ VŨ NGÂN TRÚC',
    position: 'Chủ nhiệm',
    image: '/images/placeholder.png',
    description:
      '" Design ITUS là một câu lạc bộ năng động, vui vẻ nhưng cũng không kém phần chuyên nghiệp. Đây là nơi mà chúng mình được thỏa sức sáng tạo, từ những ý tưởng đơn giản, khả thi nhất đến những thứ hết sức điên rồ, không tưởng. "',
  },
  {
    name: 'NGUYỄN TRÚC NHƯ BÌNH',
    position: 'Phó chủ nhiệm',
    image: '/images/eventimage.png',
    description:
      '" Design ITUS là một câu lạc bộ năng động, vui vẻ nhưng cũng không kém phần chuyên nghiệp. Đây là nơi mà chúng mình được thỏa sức sáng tạo, từ những ý tưởng đơn giản, khả thi nhất đến những thứ hết sức điên rồ, không tưởng. "',
  },
  {
    name: 'ĐẶNG HOÀNG NHẬT HƯNG',
    position: 'Phó chủ nhiệm',
    image: '/images/placeholder.png',
    description:
      '" Design ITUS là một câu lạc bộ năng động, vui vẻ nhưng cũng không kém phần chuyên nghiệp. Đây là nơi mà chúng mình được thỏa sức sáng tạo, từ những ý tưởng đơn giản, khả thi nhất đến những thứ hết sức điên rồ, không tưởng. "',
  },
];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export function Leaders() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = leaderData.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <StyledDiv id='Leaders'>
      <Box sx={{ flexGrow: 1, borderRadius: 'none' }}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          style={{ borderRadius: 'none' }}
          enableMouseEvents>
          {leaderData.map((leader, index) => {
            return (
              <LeaderCard
                name={leader.name}
                position={leader.position}
                image={leader.image}
                description={leader.description}
                key={index}
              />
            );
          })}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position='static'
          activeStep={activeStep}
          sx={{ backgroundColor: colors.background.default }}
          nextButton={
            <Button size='small' onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </Button>
          }
        />
      </Box>
    </StyledDiv>
  );
}
