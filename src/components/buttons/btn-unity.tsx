import {  component$, useSignal } from "@builder.io/qwik";
import {UnityButton} from "../../components/icons/unity-icon";
import "../../styles/animationStyle.css"

interface BtnUnityProps {}

export const BtnUnity = component$<BtnUnityProps>((props) => {
  {
    props;
  }
  const buttonRef =useSignal<HTMLButtonElement|any>()


  
  return (
    <button ref={buttonRef} class="unityImage rounded-full mb-10">
      <UnityButton />
    </button>
  );
});
