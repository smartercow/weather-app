import { atom } from "recoil";

interface Settings {
  showCoords?: boolean;
  showAnimations?: boolean;
}

const defaultSettings: Settings = {
  showCoords: false,
  showAnimations: true,
};

export const SettingsState = atom<Settings>({
  key: "settingsState",
  default: defaultSettings,
});
