import { ChaosFeatureDefinition, ChaosFeatureState } from "./types";

export const CHAOS_FEATURES: ChaosFeatureDefinition[] = [
  {
    key: "drunkMouse",
    label: "Drunk Mouse",
    description: "Your cursor has had a few too many. Elements jitter when hovered.",
  },
  {
    key: "unclickableCookieBanner",
    label: "Unclickable Cookie Banner",
    description: "A cookie banner that runs away when you try to accept it.",
  },
  {
    key: "toastStorm",
    label: "Toast Storm",
    description: "Every click spawns useless toast notifications. Good luck closing them.",
  },
  {
    key: "whackAMole",
    label: "Whack-a-Mole Controls",
    description: "Buttons in demo areas trigger random other buttons instead.",
  },
  {
    key: "drunkMode",
    label: "Drunk Mode",
    description: "Main content gradually blurs over time. How long can you last?",
  },
  {
    key: "trippingBalls",
    label: "Tripping Balls",
    description: "Elements randomly skew, rotate, change colors, and go psychedelic.",
  },
];

export const DEFAULT_CHAOS_STATE: ChaosFeatureState = {
  drunkMouse: false,
  unclickableCookieBanner: false,
  toastStorm: false,
  whackAMole: false,
  drunkMode: false,
  trippingBalls: false,
};
