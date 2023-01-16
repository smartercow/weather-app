import { useRecoilState } from "recoil";
import { Button } from "@components/ui/button";
import { TabState } from "@lib/states/tab";
import { searchOutline, compass, grid } from "ionicons/icons";
import cn from "clsx";

export default function Footer(): JSX.Element {
  const [tabState, setTabState] = useRecoilState(TabState);

  const searchTab = tabState.view === "search";
  const currLocTab = tabState.view === "curr_loc";
  const moreTab = tabState.view === "more";
  return (
    <div className="min-h[52px] flex h-[52px] max-h-[52px] items-center justify-center gap-4 rounded-t-3xl bg-main-black py-1.5">
      <div>
        <Button
          className={cn(
            "footer-buttons flip-horizontal",
            searchTab ? "footer-buttons-active" : "text-main-gray"
          )}
          onClick={() => setTabState({ view: "search" })}
        >
          <ion-icon icon={searchOutline} />
        </Button>
      </div>
      <div>
        <Button
          className={cn(
            "footer-buttons",
            currLocTab ? "footer-buttons-active" : "text-main-gray"
          )}
          onClick={() => setTabState({ view: "curr_loc" })}
        >
          <ion-icon icon={compass} />
        </Button>
      </div>
      <div>
        <Button
          className={cn(
            "footer-buttons",
            moreTab ? "footer-buttons-active" : "text-main-gray"
          )}
          onClick={() => setTabState({ view: "more" })}
        >
          <ion-icon icon={grid} />
        </Button>
      </div>
    </div>
  );
}
