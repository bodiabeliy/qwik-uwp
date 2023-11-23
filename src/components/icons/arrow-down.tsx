import { component$,  } from "@builder.io/qwik";

interface ArrowDownProps {
  svgClass:string;
  width?:string;
  height?:string;
  viewBox?:string
}

export const ArrowDown = component$((props: ArrowDownProps ) => {
  const {svgClass, width, height, viewBox} = props
    
  return (
    <svg
      class={svgClass}
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="23"
        cy="23"
        r="22.5"
        fill="#171717"
        stroke="url(#paint0_linear_1855_12125)"
      />
      <path
        d="M23 11.5L23 34.5M23 34.5L34.5 23M23 34.5L11.5 23"
        stroke="#767676"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1855_12125"
          x1="23"
          y1="0"
          x2="23"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
});
