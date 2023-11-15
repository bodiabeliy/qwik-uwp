import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";

export const SoundOn = component$((props: QwikIntrinsicElements["svg"]) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 22"
      fill="none"
      stroke="#9463FE"
      {...props}
    >
      <path
        d="M11.0007 2.75V19.25C7.79232 19.25 5.4083 15.0513 5.4083 15.0513H2.75065C2.24439 15.0513 1.83398 14.6409 1.83398 14.1346V7.79662C1.83398 7.29034 2.24439 6.87995 2.75065 6.87995H5.4083C5.4083 6.87995 7.79232 2.75 11.0007 2.75Z"
        fill="#9463FE"
      />
      <path d="M14.666 6.875C14.9516 7.13006 15.2106 7.4157 15.4379 7.72695C16.1046 8.63977 16.4993 9.77272 16.4993 11C16.4993 12.2166 16.1114 13.3406 15.4552 14.2493C15.2237 14.5697 14.9589 14.8634 14.666 15.125" />
      <path d="M15.6914 18.8768C18.3716 17.277 20.1666 14.3481 20.1666 11C20.1666 7.70389 18.4269 4.8141 15.8157 3.19873" />
    </svg>
  );
});