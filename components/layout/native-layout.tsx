import { useEffect } from "react";
import { defineCustomElements as ionDefineCustomElements } from "@ionic/core/loader";
import "@ionic/react/css/core.css";
// import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import type { LayoutProps } from "./layout";
import { Capacitor } from "@capacitor/core";
import cn from "clsx";
import { StatusBar } from "@capacitor/status-bar";

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    ionDefineCustomElements(window);
  });

  const isNative = Capacitor.isNativePlatform();

  const hideStatusBar = async () => {
    await StatusBar.hide();
  };

  useEffect(() => {
    if (isNative) hideStatusBar();
  }, []);

  return (
    <ion-app>
      <ion-content>
        <main
          className={cn(
            isNative
              ? "h-full min-h-full w-full"
              : "mx-auto min-h-full w-full max-w-md"
          )}
        >
          {children}
        </main>
      </ion-content>
      {/* <Footer /> */}
    </ion-app>
  );
}
