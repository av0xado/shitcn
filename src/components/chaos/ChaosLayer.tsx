"use client";

import { useEffect, useRef, useCallback } from "react";
import { useChaos } from "@/context/ChaosContext";
import DrunkMouseCursor from "./DrunkMouseCursor";
import CookieBanner from "./CookieBanner";
import ToastContainer from "./ToastContainer";
import DrunkModeOverlay from "./DrunkModeOverlay";
import TrippingBallsEngine from "./TrippingBallsEngine";

function isImmune(el: Element | null): boolean {
  if (!el) return false;
  let current: Element | null = el;
  while (current) {
    if (current.getAttribute("data-chaos-immune") === "true") return true;
    current = current.parentElement;
  }
  return false;
}

export default function ChaosLayer() {
  const { state } = useChaos();
  const toastsRef = useRef<
    { id: number; message: string; clicksToClose: number; clicks: number }[]
  >([]);
  const toastIdRef = useRef(0);
  const setToastsCallback = useRef<
    React.Dispatch<
      React.SetStateAction<
        { id: number; message: string; clicksToClose: number; clicks: number }[]
      >
    >
  >(undefined);

  // Toast Storm: global click listener
  useEffect(() => {
    if (!state.toastStorm) return;

    const messages = [
      "🎉 Congratulations! You clicked something!",
      "⚠️ Warning: This is a warning about nothing.",
      "📢 Notification: You have 0 new messages.",
      "🔔 Reminder: Don't forget to breathe.",
      "✅ Success: Something happened successfully!",
      "❌ Error: An error occurred. Or did it?",
      "💡 Tip: Try clicking less.",
      "🎪 Fun fact: This toast is useless.",
      "📊 Analytics: You've clicked 1 time(s) just now.",
      "🚀 Update: Nothing has been updated.",
      "🔥 Hot take: Toasts are the best UI pattern.",
      "🧊 Cool: This notification is very cool.",
      "💩 shitcn: You're using shitcn. Congrats.",
      "🎯 Achievement unlocked: Toast collector!",
      "📬 Mail: You have no mail. This is a toast.",
    ];

    const handler = (e: MouseEvent) => {
      if (isImmune(e.target as Element)) return;

      const msg = messages[Math.floor(Math.random() * messages.length)];
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
  }, [state.toastStorm]);

  const registerToastSetter = useCallback(
    (
      setter: React.Dispatch<
        React.SetStateAction<
          {
            id: number;
            message: string;
            clicksToClose: number;
            clicks: number;
          }[]
        >
      >
    ) => {
      setToastsCallback.current = setter;
    },
    []
  );

  return (
    <>
      {state.drunkMouse && <DrunkMouseCursor />}
      {state.unclickableCookieBanner && <CookieBanner />}
      {state.toastStorm && (
        <ToastContainer registerSetter={registerToastSetter} />
      )}
      {state.drunkMode && <DrunkModeOverlay />}
      {state.trippingBalls && <TrippingBallsEngine />}
    </>
  );
}
