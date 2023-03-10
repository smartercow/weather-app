import cn from "clsx";

type IconName = keyof typeof Icons;

type IconProps = {
  className?: string;
};

type CustomIconProps = IconProps & {
  iconName: IconName;
};

const Icons = {
  WindIcon,
  SpinnerIcon,
  WeatherIcon,
  PressureIcon,
  HumidityIcon,
  ThermometerFullIcon,
  ThermometerEmptyIcon,
};

export function CustomIcon({
  iconName,
  className,
}: CustomIconProps): JSX.Element {
  const Icon = Icons[iconName];

  return <Icon className={className ?? "h-6 w-6"} />;
}

function ThermometerFullIcon({ className }: IconProps): JSX.Element {
  return (
    <svg className={cn("fill-current", className)} viewBox="0 0 640 512">
      <g>
        <path d="M160 240c0 52.88 43.13 96 96 96s96-43.13 96-96s-43.13-96-96-96S160 187.1 160 240zM320 240c0 35.25-28.75 64-64 64s-64-28.75-64-64s28.75-64 64-64S320 204.8 320 240zM384 99.99c0-9.992-9.133-17.8-18.93-15.86L316.6 93.75L269.3 23.12c-6-8.875-20.5-8.875-26.5 0L195.4 93.75l-83.25-16.5c-5.375-1.125-10.75 .5-14.38 4.375C93.88 85.38 92.25 90.75 93.25 96l16.5 83.38L39.13 226.8C34.75 229.8 32 234.8 32 240s2.75 10.25 7.125 13.25l70.63 47.38L93.25 384c-1 5.25 .625 10.75 4.5 14.38c3.75 3.875 9 5.5 14.38 4.375l83.25-16.5L242.8 457c3 4.5 8 7.125 13.25 7.125s10.25-2.75 13.25-7.125l47.38-70.75l19.12 3.785c8.793 1.74 17.15-4.17 18.62-13.01c1.416-8.424-4.037-16.74-12.42-18.4l-29.7-5.875c-6.5-1.375-12.75 1.5-16.38 6.875L256 419.3L216.1 359.5c-3.625-5.375-10-8.25-16.38-6.75l-70.5 14l14-70.5c1.25-6.295-1.412-12.72-6.746-16.29L76.75 240l59.67-39.82c5.387-3.594 8.08-10.08 6.83-16.43l-13.88-70.5l70.38 14c6.5 1.375 12.88-1.375 16.5-6.75L256 60.75L295.9 120.5C299.5 125.9 305.8 128.6 312.3 127.3l58.99-11.72C378.7 114.1 384 107.6 384 99.99zM512 354.9V80C512 71.25 504.7 64 495.1 64S480 71.25 480 80v274.9C461.4 361.5 448 379.1 448 400c0 26.5 21.5 48 47.1 48S544 426.5 544 400C544 379.1 530.6 361.5 512 354.9zM576 321.9V80C576 35.88 540.1 0 495.1 0S416 35.88 416 80v241.9C395.8 342.8 384 370.8 384 400c0 61.75 50.25 112 111.1 112S608 461.8 608 400C608 370.8 596.3 342.6 576 321.9zM496 480c-44.13 0-80-35.88-80-80c0-25.5 12.25-48.88 32-63.75V80C448 53.5 469.5 32 496 32S544 53.5 544 80v256.3C563.8 351 576 374.5 576 400C576 444.1 540.1 480 496 480z" />
      </g>
    </svg>
  );
}

function ThermometerEmptyIcon({ className }: IconProps): JSX.Element {
  return (
    <svg className={cn("fill-current", className)} viewBox="0 0 576 512">
      <g>
        <path d="M317.8 200.6c-4.508-7.625-14.26-10.09-21.89-5.656l-55.78 33.01V134.6l43.25-43.31c6.24-6.25 6.24-16.38 0-22.62s-16.35-6.25-22.59 0L240.1 89.38V48c0-8.844-7.146-16-15.98-16S208.2 39.16 208.2 48v41.38L187.5 68.69c-6.242-6.25-16.35-6.25-22.59 0c-6.242 6.25-6.242 16.38 0 22.62l43.25 43.31v93.33L126.7 179.8L111.3 122.3c-2.293-8.5-10.98-13.41-19.56-11.31C83.25 113.3 78.18 122 80.47 130.6L87.41 156.5l-30.89-18.28c-7.615-4.438-17.38-1.969-21.89 5.656C30.16 151.5 32.67 161.3 40.27 165.8l34.05 20.15L43.84 194.1C35.32 196.4 30.27 205.2 32.55 213.7c1.902 7.156 8.361 11.88 15.41 11.88c1.373 0 2.762-.1875 4.15-.5313l60.73-16.3L192.7 256L112.8 303.3L52.11 286.1C43.59 284.9 34.84 289.8 32.55 298.3c-2.279 8.531 2.777 17.28 11.29 19.59l30.47 8.162l-34.05 20.15c-7.598 4.5-10.11 14.31-5.633 21.91C37.63 373.2 42.95 376 48.41 376c2.762 0 5.553-.7187 8.113-2.219l30.89-18.28l-6.939 25.9c-2.293 8.562 2.777 17.31 11.3 19.62c1.389 .3438 2.777 .5313 4.15 .5313c7.051 0 13.5-4.719 15.41-11.84l15.38-57.48l81.44-48.2v93.33l-43.25 43.31c-6.242 6.25-6.242 16.38 0 22.62c6.24 6.25 16.35 6.25 22.59 0l20.66-20.69V464c0 8.844 7.146 16 15.98 16s15.98-7.156 15.98-16v-41.38l20.66 20.69C263.9 446.4 267.1 448 272.1 448s8.176-1.562 11.29-4.688c6.24-6.25 6.24-16.38 0-22.62l-43.25-43.31V284.1l55.78 33.01c2.559 1.5 5.352 2.219 8.113 2.219c5.459 0 10.78-2.812 13.78-7.875C322.3 303.8 319.7 294 312.1 289.5L255.5 256l56.61-33.5C319.7 218 322.3 208.2 317.8 200.6zM448 354.9V336c0-8.75-7.25-16-16-16S416 327.3 416 336v18.88C397.4 361.5 384 379.1 384 400c0 26.5 21.5 48 48 48S480 426.5 480 400C480 379.1 466.6 361.5 448 354.9zM512 321.9V80c0-44.13-35.87-79.1-79.1-79.1S352 35.88 352 80v241.9C331.8 342.8 320 370.8 320 400c0 61.75 50.25 112 112 112S544 461.8 544 400C544 370.8 532.3 342.6 512 321.9zM432 480c-44.13 0-80-35.88-80-80c0-25.5 12.25-48.88 32-63.75V80C384 53.5 405.5 32 432 32S480 53.5 480 80v256.3C499.8 351 512 374.5 512 400C512 444.1 476.1 480 432 480z" />
      </g>
    </svg>
  );
}

function WeatherIcon({ className }: IconProps): JSX.Element {
  return (
    <svg className={cn("fill-current", className)} viewBox="0 0 16 16">
      <g>
        <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"></path>
        <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"></path>
      </g>
    </svg>
  );
}

function WindIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={cn("fill-current", className)}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <g>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24"></path>
        <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24"></path>
        <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24"></path>
      </g>
    </svg>
  );
}

function PressureIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={cn("fill-current", className)}
      viewBox="0 0 24 24"
      aria-hidden="true"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      height="1em"
      width="1em"
    >
      <g>
        <svg
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <desc></desc>
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5"></path>
          <line x1="8" y1="9" x2="12" y2="9"></line>
          <line x1="16" y1="9" x2="22" y2="9"></line>
          <line x1="19" y1="6" x2="19" y2="12"></line>
        </svg>
      </g>
    </svg>
  );
}

function HumidityIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={cn("fill-current", className)}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M5.636 6.636L12 .272l6.364 6.364a9 9 0 1 1-12.728 0zM12 3.101L7.05 8.05A6.978 6.978 0 0 0 5 13h14a6.978 6.978 0 0 0-2.05-4.95L12 3.1z"></path>
      </g>
    </svg>
  );
}

function SpinnerIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={cn("animate-spin", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}
