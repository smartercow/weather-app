import cn from "clsx";
import { useRecoilState } from "recoil";
import { ForecastState } from "@lib/states/forecast";
import { Button } from "@components/ui/button";
import { HeroIcon } from "@components/ui/hero-icon";

type ForecastNavProps = {
  singleView: boolean;
  setSingleView: (value: boolean) => void;
  heroDataIn: boolean;
  setHeroDataIn: (heroDataIn: boolean) => void;
};
export default function ForecastNav(props: ForecastNavProps): JSX.Element {
  const [nav, setNav] = useRecoilState(ForecastState);

  const singleView = props.singleView;
  const setSingleView = props.setSingleView;
  const setHeroDataIn = props.setHeroDataIn;

  const now = nav.view === "now";
  const today = nav.view === "today";
  const week = nav.view === "week";

  const resetOnClick = () => {
    setSingleView(false);
    setHeroDataIn(false);
  };

  return (
    <nav className="flex h-12 items-center rounded-b-xl bg-main-black py-3 text-white">
      <div className="w-10 px-2 pt-1">
        <div hidden={!singleView}>
          <Button onClick={resetOnClick}>
            <HeroIcon iconName="ChevronLeftIcon" className="h-5 text-white" />
          </Button>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="flex gap-5 text-xs uppercase">
          <Button
            className={cn(
              "hover-animation uppercase",
              now ? "text-white" : "text-gray-400"
            )}
            onClick={() => {
              setNav({ view: "now" });
              resetOnClick();
            }}
          >
            Lige nu
          </Button>
          <Button
            className={cn(
              "hover-animation uppercase",
              today ? "text-white" : "text-gray-400"
            )}
            onClick={() => {
              setNav({ view: "today" });
              resetOnClick();
            }}
          >
            I dag
          </Button>
          <Button
            className={cn(
              "hover-animation uppercase",
              week ? "text-white" : "text-gray-400"
            )}
            onClick={() => {
              setNav({ view: "week" });
              resetOnClick();
            }}
          >
            Denne uge
          </Button>
        </div>
      </div>
      <div className="w-10 px-2"></div>
    </nav>
  );
}
