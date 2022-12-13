
const Container: React.FC<{
	children: React.ReactNode | React.ReactNode[]
}> = props => {
	return (
		<main className="flex flex-col w-screen">
      {props.children}
    </main>
	)
};

export default Container;
