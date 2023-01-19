import Footer from "@components/footer/footer";
import Head from "next/head";
import { useRecoilValue } from "recoil";
import { TabState } from "@lib/states/tab";
import Search from "@components/search/search";
import CurrentLocation from "@components/current/current";
import Settings from "@components/settings/settings";

export default function IndexPage(): JSX.Element {
  const tabState = useRecoilValue(TabState);

  const searchTab = tabState.view === "search";
  const currLocTab = tabState.view === "curr_loc";
  const settingsTab = tabState.view === "settings";

  return (
    <>
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative flex h-screen max-h-screen min-h-screen flex-col justify-between bg-black">
        {searchTab && <Search />}
        {currLocTab && <CurrentLocation />}
        {settingsTab && <Settings />}
      </div>
    </>
  );
}
