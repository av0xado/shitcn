export interface ChaosFeatureState {
  drunkMouse: boolean;
  unclickableCookieBanner: boolean;
  toastStorm: boolean;
  whackAMole: boolean;
  drunkMode: boolean;
  trippingBalls: boolean;
}

export type ChaosFeatureKey = keyof ChaosFeatureState;

export interface ChaosFeatureDefinition {
  key: ChaosFeatureKey;
  label: string;
  description: string;
}
