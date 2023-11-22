import { $, component$, useSignal } from "@builder.io/qwik";
import {UnityButton} from "../../components/icons/unity-icon";
import { activeClassToggler } from "~/utils/utils";
import "../../styles/animationStyle.css"

interface BtnUnityProps {}

export const BtnUnity = component$<BtnUnityProps>((props) => {
  {
    props;
  }
  const buttonRef =useSignal<HTMLButtonElement|undefined>()
  const activeClassToggle = $(() =>buttonRef && activeClassToggler("", "is-active"));

  
  return (
    <button ref={buttonRef} onClick$={[activeClassToggle]} class="unityImage rounded-full">
      <UnityButton />
    </button>
  );
});
