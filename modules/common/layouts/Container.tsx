const Container: React.FC<{
  children: React.ReactNode | React.ReactNode[];
}> = (props) => {
  return (
    <main className="flex w-screen flex-col items-center">
      {props.children}
    </main>
  );
};

export default Container;
