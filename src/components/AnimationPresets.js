import { keyframes } from 'styled-components';
export default {
	'Fade In': keyframes`
    0% {
      opacity: 0;
      will-change: opacity;
    }
    100% {
     opacity: 1;
     will-change: opacity;
    }
  `,
	'Fade Out': keyframes`
    0% {
      opacity: 1;
      will-change: opacity;
    }
    100% {
     opacity: 0;
     will-change: opacity;
    }
  `,
	'Slide In': keyframes`
    0% {
      opacity: 0;
      will-change: transform, opacity;
      transform: translate3d(-30px, 0px, 0px);
      transform-style: preserve-3d;
    }
    100% {
     opacity: 1;
     will-change: transform, opacity;
     transform: translate3d(0px, 0px, 0px);
     transform-style: preserve-3d;
    }
  `,
	'Slide Out': keyframes`
    0% {
      opacity: 1;
      will-change: transform, opacity;
      transform: translate3d(0px, 0px, 0px); 
      filter: blur(0px);
      transform-style: preserve-3d;
    }
    100% {
     opacity: 0;
     will-change: transform, opacity;
     transform: translate3d(100px, 0px, 0px);
     filter: blur(5px);
     transform-style: preserve-3d;
    }
  `,
	'Flip In': keyframes`
    0% {
      opacity: 0;
      will-change: transform, opacity;
      transform: rotateY(-60deg); 
    }
    100% {
     opacity: 1;
     will-change: transform, opacity;
     transform: rotateY(0deg);
    }
  `,
	'Flip Out': keyframes`
    0% {
      opacity: 1;
      will-change: transform, opacity;
      transform: rotateY(0deg); 
    }
    100% {
     opacity: 0;
     will-change: transform, opacity;
     transform: rotateY(-90deg);
    }
  `,
	'Grow In': keyframes`
    0% {
      opacity: 0;
      will-change: transform, opacity;
      transform: scale3d(0.9, 0.9, 1); 
    }
    100% {
     opacity: 1;
     will-change: transform, opacity;
     transform: scale3d(1, 1, 1);
    }
  `,
	'Grow Out': keyframes`
    0% {
      opacity: 1;
      will-change: transform, opacity;
      transform: scale3d(1, 1, 1); 
    }
    100% {
     opacity: 0;
     will-change: transform, opacity;
     transform: scale3d(1.25, 1.25, 1);
    }
  `,
	'Shrink In': keyframes`
    0% {
      opacity: 0.4;
      will-change: transform, opacity;
      transform: scale3d(1.3, 1.3, 1.3);
      transform-style: preserve-3d;
    }
    100% {
     opacity: 1;
     will-change: transform, opacity;
     transform: scale3d(1, 1, 1);
     transform-style: preserve-3d;
    }
  `,
	'Shrink Out': keyframes`
    0% {
      opacity: 1;
      will-change: transform, opacity;
      transform: scale3d(1, 1, 1);
      transform-style: preserve-3d;
    }
    100% {
    opacity: 0;
     will-change: transform, opacity;
     transform: scale3d(0.75, 0.75, 1);
     transform-style: preserve-3d;
    }
  `,
	'Spin In': keyframes`
    0% {
      opacity: 0;
      will-change: transform, opacity;
      transform: rotateZ(-180deg);
      transform-style: preserve-3d;
    }
    100% {
     opacity: 1;
     will-change: transform, opacity;
     transform: rotateZ(0deg);
     transform-style: preserve-3d;
    }
  `,
	'Spin Out': keyframes`
    0% {
      opacity: 1;
      will-change: transform, opacity;
      transform: rotateZ(0deg);
      transform-style: preserve-3d;
    }
    100% {
     opacity: 0;
     will-change: transform, opacity;
     transform: rotateZ(90deg);
     transform-style: preserve-3d;
    }
  `,
	'Fly In': keyframes`
    0% {
      opacity: 0.5;
      will-change: transform, opacity;
      transform: translate3d(-500px, 0px, 0px) scale3d(0, 0, 1);
      transform-style: preserve-3d;
    }
    100% {
     opacity: 1;
     will-change: transform, opacity;
     transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);
     transform-style: preserve-3d;
    }
  `,
	'Fly Out': keyframes`
    0% {
      will-change: transform, opacity;
      opacity: 1;
      transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);
      transform-style: preserve-3d;
    }
    100% {
     will-change: transform, opacity;
     opacity: 0;
     transform: translate3d(-500px, 0px, 0px) scale3d(0.25, 0.25, 1);
     transform-style: preserve-3d;
    }
  `,
	'Drop In': keyframes`
    0% {
      will-change: transform, opacity;
      transform: translate3d(0px, -45px, 0px);
      animation-timing-function: ease-in;
      filter: blur(5px);
      opacity: 0;
    }
    24% {
      will-change: transform, opacity;
      opacity: 1;
    }
    40% {
      will-change: transform, opacity;
      transform: translate3d(0px, -24px, 0px);
      animation-timing-function: ease-in;
      filter: blur(0px);
    }
    65% {
      will-change: transform, opacity;
      transform: translate3d(0px, -12px, 0px);
      animation-timing-function: ease-in;
    }
    82% {
      will-change: transform, opacity;
      transform: translate3d(0px, -6px, 0px);
      animation-timing-function: ease-in;
    }
    93% {
      will-change: transform, opacity;    
      transform: translate3d(0px, -4px, 0px);
      animation-timing-function: ease-in;
    }
    25%,
    55%,
    75%,
    87% {
      will-change: transform, opacity;
      transform: translate3d(0px, 0px, 0px);
      animation-timing-function: ease-out;
    }
    100% {
      will-change: transform, opacity;
      transform: translate3d(0px, 0px, 0px);
      animation-timing-function: ease-out;
      opacity: 1;
    }
  `,
	'Drop Out': keyframes`
     0% {
      transform: translateY(0) scaleY(1) scaleX(1);
      transform-origin: 50% 50%;
      filter: blur(0);
      opacity: 1;
    }
    100% {
      transform: translateY(100px) scaleY(1) scaleX(0.2);
      transform-origin: 50% 100%;
      filter: blur(5px);
      opacity: 0;
    }
  `,
	'Pop': keyframes`
    0% {
      transform: scale3d(1, 1, 1);
      will-change: transform;
    }
    14% {
      transform: scale3d(1.3, 1.3, 1);
      will-change: transform;
    }
    28% {
      transform: scale3d(1, 1, 1);
      will-change: transform;
    }

    42% {
      transform: scale3d(1.3, 1.3, 1);
      will-change: transform;
    }

    70% {
      transform: scale3d(1, 1, 1);
      will-change: transform;
    }
    80% {
      transform: scale3d(1, 1, 1);
      will-change: transform;
    }
  `,
	'Juggle': keyframes`
    0%,
    100% {

              transform: rotate(0deg);
              transform-origin: 50% 50%;
    }
    10% {
              transform: rotate(2deg);
    }
    20%,
    40%,
    60% {
              transform: rotate(-4deg);
    }
    30%,
    50%,
    70% {
              transform: rotate(4deg);
    }
    80% {
              transform: rotate(-2deg);
    }
    90% {
              transform: rotate(2deg);
    }
  `,
	'Blink': keyframes`
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  `,
	'Bounce': keyframes`
    0% {
      transform: translateY(-45px);
      animation-timing-function: ease-in;
      opacity: 1;
    }
    24% {
      opacity: 1;
    }
    40% {
      transform: translateY(-24px);
      animation-timing-function: ease-in;
    }
    65% {
      transform: translateY(-12px);
      animation-timing-function: ease-in;
    }
    82% {
      transform: translateY(-6px);
      animation-timing-function: ease-in;
    }
    93% {
      transform: translateY(-4px);
      animation-timing-function: ease-in;
    }
    25%,
    55%,
    75%,
    87% {
      transform: translateY(0px);
      animation-timing-function: ease-out;
    }
    100% {
      transform: translateY(0px);
      animation-timing-function: ease-out;
      opacity: 1;
    }
  `,
	'Jello': keyframes`
    0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  `,
	'Rubber': keyframes`
    0% {
      transform: skew(0deg 0deg);
    }
    30% {
      transform: skew(25deg 25deg);
    }
    40% {
      transform: skew(-15deg, -15deg);
    }
    50% {
      transform: skew(15deg, 15deg);
    }
    65% {
      transform: skew(-5deg, -5deg);
    }
    75% {
      transform: skew(5deg, 5deg);
    }
    100% {
      transform: skew(0deg 0deg);
    }
  `,
	'Rotate': keyframes`
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `,
	'Vibrate 1': keyframes`
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
    100% {
      transform: translate(0);
    }
  `,
	'Vibrate 2': keyframes`
    0% {
      transform: scale(1.03);
    }
    2% {
      transform: scale(1);
    }
    4% {
      transform: scale(1.03);
    }
    8% {
      transform: scale(1);
    }
    12% {
      transform: scale(1.03);
    }
    14% {
      transform: scale(1);
    }
    16% {
      transform: scale(1.03);
    }
    18% {
      transform: scale(1);
    }
    20% {
      transform: scale(1.03);
    }
    22% {
      transform: scale(1);
    }
    24% {
      transform: scale(1.03);
    }
    26% {
      transform: scale(1);
    }
    28% {
      transform: scale(1.03);
    }
    30% {
      transform: scale(1);
    }
    32% {
      transform: scale(1.03);
    }
    34% {
      transform: scale(1);
    }
    36% {
      transform: scale(1.03);
    }
    38% {
      transform: scale(1);
    }
    40% {
      transform: scale(1.03);
    }
    42% {
      transform: scale(1);
    }
    44% {
      transform: scale(1.03);
    }
    46% {
      transform: scale(1);
    }
    48% {
      transform: scale(1.03);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  `,
	'Flicker': keyframes`
    0%,
    100% {
      opacity: 1;
    }
    41.99% {
      opacity: 1;
    }
    42% {
      opacity: 0;
    }
    43% {
      opacity: 0;
    }
    43.01% {
      opacity: 1;
    }
    47.99% {
      opacity: 1;
    }
    48% {
      opacity: 0;
    }
    49% {
      opacity: 0;
    }
    49.01% {
      opacity: 1;
    }
  `,
	'Shake': keyframes`
    0%,
    100% {
              transform: rotate(0deg);
              transform-origin: 50% 50%;
    }
    5% {
              transform: rotate(8deg);
    }
    10%,
    20% {
              transform: rotate(-10deg);
    }
    15%,
    25%{
              transform: rotate(10deg);
    }
    30% {
              transform: rotate(0deg);
    }
  `,
	'Ping': keyframes`
    0% {
      transform: scale(0.2);
      opacity: 0.8;
    }
    80% {
      transform: scale(1.2);
      opacity: 0;
    }
    100% {
      transform: scale(2.2);
      opacity: 0;
    }
  `,
	'Beat': keyframes`
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.6);
    }
  `,
	'Background': keyframes`
    0% {
      background: #19dcea;
    }
    100% {
      background: #b22cff;
    }
  `
};