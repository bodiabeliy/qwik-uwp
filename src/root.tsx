import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  // RouterOutlet,
  // ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";
import "./global.css";
import "./styles//animationStyle.css"
import '@fontsource-variable/montserrat';

import UnityWindow from "./components/unity-window/unity-window";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        {/* <RouterOutlet /> */}
        <UnityWindow/>
        {/* <ServiceWorkerRegister /> */}
      </body>
    </QwikCityProvider>
  );
});
