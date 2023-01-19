import Footer from "@components/footer/footer";
import { SettingsState } from "@lib/states/settings-state";
import { useRecoilState } from "recoil";

export default function Settings(): JSX.Element {
  const [mySettings, setMySettings] = useRecoilState(SettingsState);

  const thisCoords = mySettings.showCoords ? true : false;
  const thisAnimations = mySettings.showAnimations ? true : false;

  return (
    <>
      <section className="mx-3 my-4 rounded-xl bg-main-black text-white">
        <div className="flex items-center justify-between gap-1 py-3 pl-3 pr-5">
          <ion-label>Vis koordinater</ion-label>
          <ion-toggle
            checked={thisCoords}
            onClick={() => setMySettings({ showCoords: !thisCoords })}
          ></ion-toggle>
        </div>
        <div className="flex items-center justify-between gap-1 py-3 pl-3 pr-5">
          <ion-label>Vis animationer</ion-label>
          <ion-toggle
            checked={thisAnimations}
            // onClick={() => setMySettings({ showAnimations: !thisAnimations })}
          ></ion-toggle>
        </div>
      </section>

      <Footer />
    </>
  );
}
