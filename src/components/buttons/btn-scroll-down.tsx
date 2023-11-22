import { $, Signal, component$ } from "@builder.io/qwik";
import { ArrowDown } from "../icons";

interface Props {
  ref:Signal<any>
}

export const BtnSrollDown = component$<Props>(({ref}) => {


  const moveToDown = $(() => {    
    ref.value.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  });
  
  return (
    <button class="w-full h-7 w-7" onClick$={moveToDown}>
      <ArrowDown />
    </button>
  );
});
