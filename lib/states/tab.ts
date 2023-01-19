import { atom } from "recoil";

interface Tab {
  open?: boolean;
  view: "search" | "curr_loc" | "settings";
}

const defaultTab: Tab = {
  open: true,
  view: "curr_loc",
};

export const TabState = atom<Tab>({
  key: "tabState",
  default: defaultTab,
});
