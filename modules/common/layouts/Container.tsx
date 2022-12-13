
const Container: React.FC<{
	children: React.ReactNode | React.ReactNode[]
}> = props => {
	return (
		<main className="flex flex-col w-screen items-center">
      {props.children}
    </main>
	)
};

export default Container;
