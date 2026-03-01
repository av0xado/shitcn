"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type Dispatch,
  type SetStateAction,
} from "react";
import DrunkMouseCursor from "@/components/chaos/DrunkMouseCursor";
import CookieBanner from "@/components/chaos/CookieBanner";
import ToastContainer, { type Toast } from "@/components/chaos/ToastContainer";
import DrunkModeOverlay from "@/components/chaos/DrunkModeOverlay";
import TrippingBallsEngine from "@/components/chaos/TrippingBallsEngine";
import { ChaosFeatureState } from "../types";

interface ChaosFeatureRuntimeProps {
  state: ChaosFeatureState;
  toastMessages?: string[];
}

const DEFAULT_TOAST_MESSAGES = [
  "Notification: This action has no effect.",
  "Heads up: You clicked something.",
  "Status: Everything is technically fine.",
  "Reminder: This toast is optional but persistent.",
  "Success: You generated another toast.",
];

function isImmune(el: Element | null): boolean {
  if (!el) return false;
  let current: Element | null = el;
  while (current) {
    const val = current.getAttribute("data-chaos-immune");
    if (val === "true" || val === "toast") return true;
    current = current.parentElement;
  }
  return false;
}

export function ChaosFeatureRuntime({
  state,
  toastMessages = DEFAULT_TOAST_MESSAGES,
}: ChaosFeatureRuntimeProps) {
  const toastIdRef = useRef(0);
  const setToastsCallback = useRef<Dispatch<SetStateAction<Toast[]>>>(undefined);

  useEffect(() => {
    if (!state.toastStorm) return;

    const handler = (e: MouseEvent) => {
      if (isImmune(e.target as Element)) return;

      const msg = toastMessages[Math.floor(Math.random() * toastMessages.length)];
      const clicksToClose = Math.random() < 0.3 ? 2 : 1;
      const newToast = {
        id: ++toastIdRef.current,
        message: msg,
        clicksToClose,
        clicks: 0,
      };

      if (setToastsCallback.current) {
        setToastsCallback.current((prev) => [...prev, newToast]);
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [state.toastStorm, toastMessages]);

  const registerToastSetter = useCallback(
    (setter: Dispatch<SetStateAction<Toast[]>>) => {
      setToastsCallback.current = setter;
    },
    []
  );

  return (
    <>
      {state.drunkMouse && <DrunkMouseCursor />}
      {state.unclickableCookieBanner && <CookieBanner />}
      {state.toastStorm && <ToastContainer registerSetter={registerToastSetter} />}
      {state.drunkMode && <DrunkModeOverlay />}
      {state.trippingBalls && <TrippingBallsEngine />}
    </>
  );
}
