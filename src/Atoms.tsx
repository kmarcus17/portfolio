import { atom } from "recoil";

export const showAboutState = atom<boolean>({
  key: "showAboutState",
  default: false,
});

export const showDashboardState = atom<boolean>({
  key: "showDashboardState",
  default: false,
});

export const showResumeState = atom<boolean>({
  key: "showResumeState",
  default: false,
});

export const showContactState = atom<boolean>({
  key: "showContactState",
  default: false,
});
