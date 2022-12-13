const GradientOverlay: React.FC<{
  children: React.ReactNode | React.ReactNode[];
}> = (props) => {
  return (
    <main className="relative flex w-screen flex-col items-center">
      <div>{props.children}</div>

      {/* GRADIENT */}
      <div className="absolute top-0 h-full w-full bg-dim"></div>
    </main>
  );
};

export default GradientOverlay;
