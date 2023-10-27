import { getStaticPath } from '../helpers';

const DICE_NAMES = [
  'deer',
  'calabash',
  'rooster',
  'fish',
  'crab',
  'shrimp',
];

const MIN_AMOUNT = 20;
const MAX_AMOUNT = 100;

const ROLLING_INTERVAL_MS = 100;
const ROLLING_TIMEOUT_MS = 3000;



export {
  DICE_NAMES,
  MIN_AMOUNT,
  MAX_AMOUNT,
  ROLLING_INTERVAL_MS,
  ROLLING_TIMEOUT_MS,
  DICE_IMAGES
};

const DICE_IMAGES = DICE_NAMES.reduce((prev, name) => {
  return {
    ...prev,
    [name]: getStaticPath(`/images/${name}.svg`, PUBLIC_URL),
  };
}, {});
