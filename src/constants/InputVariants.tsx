export default function VARIANTS(text: string) {
  switch (text) {
    case "blue":
      return {
        div: " rounded-lg border-main_color-200 bg-main_color-100  ",
        input: " placeholder-main_color-300 font-normal text-lg ",
        eye: " w-6 h-6 text-main_color-300 ",
      };
    default:
      return {
        div: " rounded-xl border-line_color ",
        input: " placeholder-line_color font-medium text-base ",
        eye: " w-5 h-5 text-line_color ",
      };
  }
}
