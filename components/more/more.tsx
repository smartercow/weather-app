import { useEffect, useState } from "react";

export default function More(): JSX.Element {
  const [coords, setCoords] = useState<boolean>(true);

  return (
    <div className="mx-3 my-4 rounded-xl bg-main-black text-white">
      <div className="flex items-center justify-between gap-1 py-3 pl-3 pr-5">
        <ion-label>Vis koordinater</ion-label>
        <ion-toggle
          checked={coords}
          onClick={() => setCoords(!coords)}
        ></ion-toggle>
      </div>
    </div>
  );
}
