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
    <button class="w-full h-12 w-7 absolute bg-gradient-to-t from-neutral-900" onClick$={moveToDown}>
      <ArrowDown 
        svgClass="m-auto"
        width="46"
        height="46"
        viewBox="0 0 46 46"
      />
    </button>
  );
});
