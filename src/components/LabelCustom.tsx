function VARIANTS(text: string) {
  switch (text) {
    case "blue":
      return " font-bold text-main_color-500 text-sm ";
    default:
      return " text-xs font-normal text-black ";
  }
}

function LabelCustom({
  text,
  redStar,
  className,
  variant,
}: {
  text: string;
  redStar?: boolean;
  className?: string;
  variant?: string;
}) {
  return (
    <p className={" font-public_sans  " + VARIANTS(variant || "") + className}>
      {text}{" "}
      <span className=" text-red-500 font-bold ">{redStar ? "*" : ""}</span>
    </p>
  );
}

export default LabelCustom;
