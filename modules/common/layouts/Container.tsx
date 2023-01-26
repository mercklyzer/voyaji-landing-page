const Container: React.FC<{
  children: React.ReactNode | React.ReactNode[];
  styling?: string;
}> = (props) => {
  return (
    <main
      id="container"
      className={`flex w-screen flex-col items-center overflow-hidden ${props.styling}`}
    >
      {props.children}
    </main>
  );
};

export default Container;
