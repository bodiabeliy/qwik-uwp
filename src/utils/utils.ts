import { Signal } from "@builder.io/qwik";
import { log } from "console";

export const formatTime = (sec: number) => {
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60);
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${formattedSeconds}`;
};


export const toBase64 = (file: File | any): Promise<string | ArrayBuffer | null> => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
  // reader.onload = function () {
  //     const arrayBuffer = reader.result;
  //
  //     const base64str = btoa(arrayBuffer);
  // }
}
)


export const  activeClassToggler = (elementRef:Signal<HTMLButtonElement| undefined>, activeClass:string) => {
  const button =elementRef.value?.className.split(" ")[0];
  
  const menuBtn = document.querySelector(`.${button}`);

  let isMenuOpen = false;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isMenuOpen = !isMenuOpen;
    menuBtn?.classList.toggle(activeClass);
}









export function blobToBase64(blob) {
return new Promise((resolve, reject) => {
const reader = new FileReader();

  reader.onload = () => {
  const base64String = reader.result.split(',')[1];
  resolve(base64String);
};

reader.onerror = () => {
  reject(new Error('Error reading Blob as base64'));
};

reader.readAsDataURL(blob);
});
}