export const GridBackground = ({ grid }: { grid?: boolean }) => {
  return (
    <>
      {grid ? (
        <div
          className={`absolute inset-0 h-full w-full dark:bg-neutral-900 bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px]`}
        ></div>
      ) : (
        <div className="absolute inset-0 h-full w-full dark:bg-neutral-900 bg-white bg-[radial-gradient(#515152_1px,transparent_1px)] [background-size:30px_30px]"></div>
      )}
    </>
  );
};

export default GridBackground;
