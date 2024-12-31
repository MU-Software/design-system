import { MUIStyledCommonProps, keyframes, styled } from '@mui/system';
import React from 'react';

const ScrollIndicatorKeyframes = keyframes({
  '0%': { opacity: 0 },
  '33%': { opacity: 1 },
  '66%': { opacity: 1 },
  '100%': { opacity: 0 },
})

type ScrollIndicatorProps = MUIStyledCommonProps & {
  isVertical?: boolean;
  indicatorCount?: number;
  indicatorSize?: string;  // React.CSSProperties['width']
  indicatorColor?: string;  // React.CSSProperties['color']
  indicatorStroke?: string; // React.CSSProperties['borderWidth']
  indicatorAnimationDuration?: number; // React.CSSProperties['animationDuration']
  indicatorAnimationDelay?: number;
}

const ScrollIndicatorContainer = styled('div')<ScrollIndicatorProps>(({
  isVertical = false,
  indicatorCount = 3,
  indicatorSize = '1.5rem',
  indicatorColor = 'black',
  indicatorStroke = '2.5px',
  indicatorAnimationDuration = 2,
  indicatorAnimationDelay = 0.15,
}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',

    width: `calc(${indicatorSize} * sqrt(2))`,
    height: `calc(${indicatorSize} * sqrt(2) / 2 * ${indicatorCount})`,

    transform: isVertical ? 'rotate(270deg)' : undefined,

    '& span': {
      position: 'absolute',

      width: indicatorSize,
      height: indicatorSize,
      aspectRatio: '1/1',

      borderLeft: `${indicatorStroke} solid ${indicatorColor}`,
      borderBottom: `${indicatorStroke} solid ${indicatorColor}`,

      animation: `${ScrollIndicatorKeyframes} ${indicatorAnimationDuration ?? 2}s infinite`,
      opacity: 0,

      ...(
        Array
          .from({ length: indicatorCount }, (_, k) => k)
          .reduce(
            (acc, _, i) => ({
              ...acc,
              [`&:nth-of-type(${i + 1})`]: {
                transform: `translate(0, calc(((${indicatorSize} * sqrt(2) - ${indicatorSize}) / 2) + (${indicatorSize} * sqrt(2) / 2 * (${i} - 1)))) rotate(-45deg)`,
                animationDelay: `${i * indicatorAnimationDelay}s`,
              },
            }),
            {},
          )
      ),
    },
  })
)

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = (props) => <ScrollIndicatorContainer {...props}>
  {Array.from({ length: props.indicatorCount ?? 3 }, (_, k) => k).map((_, i) => <span key={i}></span>)}
</ScrollIndicatorContainer>
