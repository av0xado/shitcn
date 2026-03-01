export interface ComponentEntry {
  slug: string;
  name: string;
  description: string;
  category: "interactive" | "form" | "navigation" | "feedback" | "layout";
  hasDemo: boolean;
  previewDescription: string;
}

export const components: ComponentEntry[] = [
  {
    slug: "drunk-mouse",
    name: "DrunkMouse",
    description:
      "Your cursor has had a few too many. Elements jitter when hovered and precision goes out the window.",
    category: "interactive",
    hasDemo: false,
    previewDescription:
      "Feature page for the control-panel Drunk Mouse chaos effect.",
  },
  {
    slug: "unclickable-cookie-banner",
    name: "UnclickableCookieBanner",
    description:
      "A cookie banner that dodges your cursor so consent becomes an endurance sport.",
    category: "interactive",
    hasDemo: false,
    previewDescription:
      "Feature page for the control-panel Unclickable Cookie Banner effect.",
  },
  {
    slug: "toast-storm-chaos",
    name: "ToastStormChaos",
    description:
      "Every click creates another useless notification until the page becomes a stack of panic.",
    category: "feedback",
    hasDemo: false,
    previewDescription:
      "Feature page for the control-panel Toast Storm global effect.",
  },
  {
    slug: "whack-a-mole-controls",
    name: "WhackAMoleControls",
    description:
      "Buttons in demo zones trigger random neighbors instead, so intent is optional.",
    category: "interactive",
    hasDemo: false,
    previewDescription:
      "Feature page for the control-panel Whack-a-Mole Controls effect.",
  },
  {
    slug: "drunk-mode",
    name: "DrunkMode",
    description:
      "Main content gets blurrier over time, turning every task into a soft-focus challenge.",
    category: "layout",
    hasDemo: false,
    previewDescription:
      "Feature page for the control-panel Drunk Mode effect.",
  },
  {
    slug: "tripping-balls",
    name: "TrippingBalls",
    description:
      "Random transforms and color shifts make the interface look like it lost the plot.",
    category: "layout",
    hasDemo: false,
    previewDescription:
      "Feature page for the control-panel Tripping Balls effect.",
  },
  {
    slug: "confirm-button",
    name: "ConfirmButton",
    description:
      "A button that asks you to confirm. Then confirm again. And again. Recursively. Forever.",
    category: "interactive",
    hasDemo: true,
    previewDescription:
      'Each click spawns a new "Are you sure?" dialog. There is no end.',
  },
  {
    slug: "slow-input",
    name: "SlowInput",
    description:
      "A text input with a realistic 500ms–2s delay per keystroke. Simulates typing on a 1999 corporate intranet.",
    category: "form",
    hasDemo: true,
    previewDescription:
      "Type something and watch each character appear... eventually.",
  },
  {
    slug: "toast-storm",
    name: "ToastStorm",
    description:
      "Press a button and receive an avalanche of meaningless toast notifications. They multiply.",
    category: "feedback",
    hasDemo: true,
    previewDescription:
      "One click = many toasts. Some require two clicks to dismiss.",
  },
  {
    slug: "captcha-on-hover",
    name: "CaptchaOnHover",
    description:
      "Every time you hover over this component, a new CAPTCHA challenge appears. Hover away and it resets.",
    category: "interactive",
    hasDemo: false,
    previewDescription:
      "Hover to reveal a CAPTCHA. Move your mouse away and start over.",
  },
  {
    slug: "dropdown-of-theseus",
    name: "DropdownOfTheseus",
    description:
      "A dropdown where every option you select gets replaced by a slightly different option. Is it even the same dropdown?",
    category: "form",
    hasDemo: false,
    previewDescription:
      "Select an option. Watch it transform into something else entirely.",
  },
  {
    slug: "pagination-roulette",
    name: "PaginationRoulette",
    description:
      "Page numbers are randomized on every click. Page 3 might take you to page 7. Or page 1. Who knows.",
    category: "navigation",
    hasDemo: false,
    previewDescription:
      "Navigate pages if you dare. The numbers are merely suggestions.",
  },
  {
    slug: "tabs-but-actually-accordion",
    name: "TabsButActuallyAccordion",
    description:
      "Looks like tabs. Behaves like an accordion. Sometimes both. Sometimes neither.",
    category: "layout",
    hasDemo: false,
    previewDescription:
      "Click a tab. Watch it expand downward. Question your reality.",
  },
  {
    slug: "form-with-amnesia",
    name: "FormWithAmnesia",
    description:
      "A form that forgets all your inputs every 10 seconds. Auto-save? Never heard of it.",
    category: "form",
    hasDemo: true,
    previewDescription:
      "Fill out the form. Watch it forget everything. Fill it out again.",
  },
  {
    slug: "accessibility-inverter",
    name: "AccessibilityInverter",
    description:
      "Makes every accessibility feature worse. Screen reader text is lorem ipsum. Tab order is randomized.",
    category: "interactive",
    hasDemo: false,
    previewDescription:
      "The opposite of accessible. WCAG would like a word.",
  },
  {
    slug: "inverted-scroll",
    name: "InvertedScroll",
    description:
      "Scroll down to go up. Scroll up to go down. Horizontal scroll does diagonal movement.",
    category: "navigation",
    hasDemo: true,
    previewDescription:
      "Your scroll wheel now works in reverse. You're welcome.",
  },
  {
    slug: "password-strength-liar",
    name: "PasswordStrengthLiar",
    description:
      'A password field where "password123" is rated "Excellent" and a 32-char random string is "Weak".',
    category: "form",
    hasDemo: false,
    previewDescription:
      "The worse your password, the higher the strength meter goes.",
  },
  {
    slug: "loading-spinner-of-hope",
    name: "LoadingSpinnerOfHope",
    description:
      "A loading spinner that gets to 99% and stays there. Forever. It will never finish.",
    category: "feedback",
    hasDemo: false,
    previewDescription:
      "Watch the progress bar crawl to 99%... and stop. Permanently.",
  },
];

export function getComponentBySlug(
  slug: string
): ComponentEntry | undefined {
  return components.find((c) => c.slug === slug);
}
