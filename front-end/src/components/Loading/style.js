import { styled } from "styled-components";

export const StyledSpinner = styled.div`
  /* width: 80px;
  aspect-ratio: 1;
  border: 10px solid #000;
  background: radial-gradient(farthest-side, #fff 98%, #0000) top,
    radial-gradient(farthest-side, #fff 98%, #0000) top,
    radial-gradient(farthest-side, #fff 98%, #0000) left,
    radial-gradient(farthest-side, #fff 98%, #0000) right,
    radial-gradient(farthest-side, #fff 98%, #0000) bottom, #000;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  filter: blur(4px) contrast(10);
  animation: b9 2s infinite;

  @keyframes b9 {
    0% {
      background-position: top, top, left, right, bottom;
    }
    25% {
      background-position: right, top, left, right, bottom;
    }
    50% {
      background-position: bottom, top, left, right, bottom;
    }
    75% {
      background-position: left, top, left, right, bottom;
    }
    100% {
      background-position: top, top, left, right, bottom;
    }
  } */

  svg {
    width: 30px;
  }

  svg path {
    --total-length: 136px; // Retrieved using getTotalLength()
    stroke-linecap: round;
    stroke-width: 6;
    stroke: white;
    fill: none;
    stroke-dasharray: var(--total-length) var(--total-length);
    /* animation: animate 5s cubic-bezier(0, 0.3, 0.7, 1) infinite; */
    animation: animate 2s linear infinite;
  }

  @keyframes animate {
    0% {
      // Start from an empty path (with a negative offset)
      stroke-dashoffset: calc(-1 * var(--total-length));
    }
    30%,
    50% {
      // Fill the path towards the center, then pause for a bit
      stroke-dashoffset: 0;
    }
    80%,
    100% {
      // Remove the stroke, but now in the opposite direction
      stroke-dashoffset: var(--total-length);
    }
  }
`;
