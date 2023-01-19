import { Loading } from "@components/ui/loading";

export default function LoadingData() {
  return (
    <div className="gradient_2 flex h-screen items-center justify-center">
      <div>
        <div className="h-20 w-20 overflow-hidden rounded-lg">
          <img
            src="/assets/images/weather-app-logo-t.png"
            alt="PG Weather Logo"
          />
        </div>
        <Loading iconClassName="h-12 w-12 text-white" />
      </div>
    </div>
  );
}
