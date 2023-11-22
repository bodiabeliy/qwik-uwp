import { $, component$, useSignal } from "@builder.io/qwik";
import ImageUnity from "~/components/img/unity.png?jsx";
import { activeClassToggler } from "~/utils/utils";

interface BtnUnityProps {}

export const BtnUnity = component$<BtnUnityProps>((props) => {
  {
    props;
  }
  const buttonRef =useSignal<HTMLButtonElement|undefined>()
  const activeClassToggle = $(() =>buttonRef && activeClassToggler("unityImage", "is-active"));

  
  return (
    <button ref={buttonRef} onClick$={[activeClassToggle]} class="unityImage h-16 w-16 rounded-full">
      <ImageUnity />
    </button>
  );
});
