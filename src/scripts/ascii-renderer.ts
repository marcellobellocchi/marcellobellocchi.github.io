/**
 * Rec. 709 coefficients to weight how much of
 * the brightness of a picture a certain color makes.
 * The human eye doesn't perceive all the colors with
 * the same brightness
 */
const LUMA_WEIGHTS = {
  red: 0.2126,
  green: 0.7152,
  blue: 0.0722,
} as const;

const RAMP_STRING = " .:-=+*#%@";

export default function initAsciiRenderer(element: HTMLElement): void {
  console.debug(element);
  console.debug(RAMP_STRING.length - 1);
}

/**
 * Takes a pixel's rgb values and returns a value from 0 to 1 indicating its brightness
 */
function luma(red: number, green: number, blue: number): number {
  return (
    (red * LUMA_WEIGHTS.red +
      green * LUMA_WEIGHTS.green +
      blue * LUMA_WEIGHTS.blue) /
    255
  );
}

/**
 * Takes in the luma of a pixel and returns the ascii character for its brightness
 * from a selected ramp. Ramp must not be empty, luma is clamped between 0 and 1
 */
function charForLuma(luma: number, ramp: string = RAMP_STRING): string {
  if (!ramp) throw new Error("ramp must not be empty");

  const lumaClamped = clamp(luma, 0, 1);
  const index = Math.round(lumaClamped * (ramp.length - 1));
  return ramp[index];
}

/**
 * Clamps a value between a min and a max. Min must not be greater or equal than max
 */
function clamp(value: number, min: number, max: number): number {
  if (min >= max)
    throw new Error("Min value must not be greater or equal than max");

  return Math.min(Math.max(value, min), max);
}
