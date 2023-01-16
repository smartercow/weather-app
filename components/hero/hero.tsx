import { Button } from "@components/ui/button";
import { HeroIcon } from "@components/ui/hero-icon";
import dayjs from "dayjs";
import Locale from "dayjs/locale/da";
import { location } from "ionicons/icons";

type HeroProps = {
  dt?: number;
  icon?: string;
  temp: number;
  minTemp?: string;
  maxTemp?: string;
  myLocation?: string;
  description?: string;
  coords?: any;
};

export default function Hero(props: HeroProps): JSX.Element {
  const date = dayjs().locale(Locale).format("DD/MMMM");
  const dateToday = date.replace("/", " ");
  const dayName = dayjs().locale(Locale).format("dddd");

  const placeholderImg = "/assets/images/placeholder.png";

  return (
    <>
      {props && (
        <div className="relative max-h-[43vh]">
          <div className="">
            <video
              src="/assets/videos/evening.mp4"
              autoPlay
              loop
              muted
              className="h-[43vh] w-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-end">
            <div className="hero-overlay w-[38%]" />
          </div>
          <div>
            <h2 className="gilroy-light absolute top-0 left-5 text-lg font-semibold capitalize text-white">
              {dateToday}, <span className="font-normal">{dayName}</span>
            </h2>
          </div>
          <div className="absolute top-10 right-0 space-y-3 text-right text-white">
            <div className="flex justify-center pl-5">
              <div>
                <div className="h-14 w-14">
                  {props.icon && (
                    <ion-img
                      src={
                        !props.icon
                          ? placeholderImg
                          : `http://openweathermap.org/img/wn/${props.icon}@2x.png`
                      }
                      alt="OW"
                    />
                  )}
                </div>
                <p className="text-center text-base font-semibold">
                  {props.description}
                </p>
              </div>
            </div>

            <div className="px-7">
              <p className="text-5xl font-extrabold">
                {Math.round(props?.temp)}°
              </p>
            </div>
            <div className="flex justify-end gap-1 px-4">
              <p className="text-xl font-bold">
                <ion-icon icon={location} />
              </p>
              <p className="text-sm font-medium">{props.myLocation}</p>
            </div>
          </div>
          <div className="absolute bottom-4 right-0 px-4 text-white">
            {/*             {props.coords1 && props.coords2 && (
              <div>
                <p>
                  Coords: {props.coords1.latitude} {props.coords1.longitude}
                </p>
              </div>
            )} */}
            <Button className="flex items-center gap-1 text-white">
              Se mere
              <HeroIcon iconName="ArrowUpRightIcon" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
