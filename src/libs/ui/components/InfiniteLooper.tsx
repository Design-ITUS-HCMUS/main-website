'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import React from 'react';

import { keyframes, styled } from '@mui/material';

const slideAnim = keyframes`
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-100%);
    }   
`;

const LooperInnerList = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: 'fit-content',
});

const LooperListInstance = styled('div')(({ theme }) => ({
  display: 'flex',
  width: 'max-content',
  gap: '100px',
  animation: `${slideAnim} linear infinite`,
  [theme.breakpoints.down('sm')]: {
    gap: '20px',
  },
}));

const StyledDiv = styled('div')({
  width: '100%',
  overflow: 'hidden',
  // disable selection
  WebkitUserSelect: 'none',
  WebkitTouchCallout: 'none',
  MozUserSelect: 'none',
  MsUserSelect: 'none',
  userSelect: 'none',
});

export default function InfiniteLooper({ speed, direction, children }: any) {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef: any = useRef(null);
  const innerRef: any = useRef(null);
  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute('data-animate', 'false');

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute('data-animate', 'true');
        }
      }, 10);
    }
  }
  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;
    const { width } = innerRef.current.getBoundingClientRect();
    const { width: parentWidth } = outerRef.current.getBoundingClientRect();
    const widthDeficit = parentWidth - width;
    const instanceWidth = width / innerRef.current.children.length;
    if (widthDeficit) {
      setLooperInstances(looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1);
    }
    resetAnimation();
  }, [looperInstances]);

  useEffect(() => setupInstances(), [setupInstances]);
  useEffect(() => {
    window.addEventListener('resize', setupInstances);
    return () => {
      window.removeEventListener('resize', setupInstances);
    };
  }, [looperInstances, setupInstances]);

  return (
    <StyledDiv ref={outerRef}>
      <LooperInnerList ref={innerRef} data-animate='true'>
        {[...Array(looperInstances)].map((_, ind) => (
          <LooperListInstance
            key={ind}
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === 'right' ? 'reverse' : 'normal',
            }}>
            {children}
          </LooperListInstance>
        ))}
      </LooperInnerList>
    </StyledDiv>
  );
}
