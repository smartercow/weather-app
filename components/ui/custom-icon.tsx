import cn from "clsx";

type IconName = keyof typeof Icons;

type IconProps = {
  className?: string;
};

type CustomIconProps = IconProps & {
  iconName: IconName;
};

const Icons = {
  PinIcon,
  WindIcon,
  AppleIcon,
  PinOffIcon,
  GoogleIcon,
  FeatherIcon,
  SpinnerIcon,
  WeatherIcon,
  PressureIcon,
  TriangleIcon,
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
function FeatherIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={cn("fill-current", className)}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <g>
        <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z" />
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

function GoogleIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <g>
        <path
          fill="#EA4335"
          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
        />
        <path
          fill="#4285F4"
          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
        />
        <path
          fill="#FBBC05"
          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
        />
        <path
          fill="#34A853"
          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
        />
        <path fill="none" d="M0 0h48v48H0z" />
      </g>
    </svg>
  );
}

function AppleIcon({ className }: IconProps): JSX.Element {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <g>
        <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
      </g>
    </svg>
  );
}

function TriangleIcon({ className }: IconProps): JSX.Element {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <g>
        <path d="M12.538 6.478c-.14-.146-.335-.228-.538-.228s-.396.082-.538.228l-9.252 9.53c-.21.217-.27.538-.152.815.117.277.39.458.69.458h18.5c.302 0 .573-.18.69-.457.118-.277.058-.598-.152-.814l-9.248-9.532z" />
      </g>
    </svg>
  );
}

function PinIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />
      <line x1="9" y1="15" x2="4.5" y2="19.5" />
      <line x1="14.5" y1="4" x2="20" y2="9.5" />
    </svg>
  );
}

function PinOffIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="3" y1="3" x2="21" y2="21" />
      <path d="M15 4.5l-3.249 3.249m-2.57 1.433l-2.181 .818l-1.5 1.5l7 7l1.5 -1.5l.82 -2.186m1.43 -2.563l3.25 -3.251" />
      <line x1="9" y1="15" x2="4.5" y2="19.5" />
      <line x1="14.5" y1="4" x2="20" y2="9.5" />
    </svg>
  );
}
