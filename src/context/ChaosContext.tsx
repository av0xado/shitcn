"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

export interface ChaosState {
  drunkMouse: boolean;
  unclickableCookieBanner: boolean;
  toastStorm: boolean;
  whackAMole: boolean;
  drunkMode: boolean;
  trippingBalls: boolean;
}

export type ChaosFeature = keyof ChaosState;

export const CHAOS_FEATURES: { key: ChaosFeature; label: string; description: string }[] = [
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

const DEFAULT_STATE: ChaosState = {
  drunkMouse: false,
  unclickableCookieBanner: false,
  toastStorm: false,
  whackAMole: false,
  drunkMode: false,
  trippingBalls: false,
};

const STORAGE_KEY = "shitcn-chaos-state";

function getInitialState(): ChaosState {
  if (typeof window === "undefined") return DEFAULT_STATE;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { ...DEFAULT_STATE, ...parsed };
    }
  } catch {
    // ignore
  }
  return DEFAULT_STATE;
}

interface ChaosContextValue {
  state: ChaosState;
  toggle: (feature: ChaosFeature) => void;
  setFeature: (feature: ChaosFeature, value: boolean) => void;
  enableAll: () => void;
  disableAll: () => void;
  isAnyActive: boolean;
}

const ChaosContext = createContext<ChaosContextValue | null>(null);

export function ChaosProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ChaosState>(getInitialState);

  // Persist to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  const toggle = useCallback((feature: ChaosFeature) => {
    setState((prev) => ({ ...prev, [feature]: !prev[feature] }));
  }, []);

  const setFeature = useCallback((feature: ChaosFeature, value: boolean) => {
    setState((prev) => ({ ...prev, [feature]: value }));
  }, []);

  const enableAll = useCallback(() => {
    setState({
      drunkMouse: true,
      unclickableCookieBanner: true,
      toastStorm: true,
      whackAMole: true,
      drunkMode: true,
      trippingBalls: true,
    });
  }, []);

  const disableAll = useCallback(() => {
    setState(DEFAULT_STATE);
  }, []);

  const isAnyActive = Object.values(state).some(Boolean);

  return (
    <ChaosContext.Provider
      value={{ state, toggle, setFeature, enableAll, disableAll, isAnyActive }}
    >
      {children}
    </ChaosContext.Provider>
  );
}

export function useChaos(): ChaosContextValue {
  const ctx = useContext(ChaosContext);
  if (!ctx) {
    throw new Error("useChaos must be used within a ChaosProvider");
  }
  return ctx;
}
