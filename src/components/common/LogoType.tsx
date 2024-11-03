function LogoType({ className }: { className?: string }) {
  return (
    <div
      className={
        " rounded-full bg-main_color-600 text-white py-3 px-16 flex items-center justify-center font-public_sans font-medium text-sm " +
        className
      }
    >
      LogoType
    </div>
  );
}

export default LogoType;
