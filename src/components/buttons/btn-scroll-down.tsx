import { $, Signal, component$ } from "@builder.io/qwik";
import { ArrowDown } from "../icons";

interface Props {
  ref:Signal<any>
}

export const BtnSrollDown = component$<Props>(({ref}) => {


  const moveToDown = $(() => {
    console.log("mowe is", ref);
    
    window.scrollTo({
      top : ref.value?.getBoundingClientRect().bottom, 
      left : 0,
      behavior : "smooth"
    })
  
  });
  return (
    <button class="w-full h-7 w-7" onClick$={[moveToDown]}>
      <ArrowDown />
    </button>
  );
});
