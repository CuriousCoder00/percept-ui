export const Background = ({ variant }: { variant?: string }) => {
  return (
    <>
      {variant === "grid" && (
        <div
          className={`absolute inset-0 h-full w-full dark:bg-neutral-900 bg-white bg-[linear-gradient(to_right,#acacac12_1px,transparent_1px),linear-gradient(to_bottom,#acacac12_1px,transparent_1px)] bg-[size:30px_30px]`}
        ></div>
      )}
      {variant === "dot" && (
        <div className="absolute inset-0 h-full w-full dark:bg-neutral-900 bg-white bg-[radial-gradient(#3d3d3e_1px,transparent_1px)] [background-size:30px_30px]"></div>
      )}
    </>
  );
};

export default Background;
