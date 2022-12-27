/*
 * @dev Component to ensure children stays within the viewport
 */
const InScreen: React.FC<{
  children: React.ReactNode | React.ReactNode[];
  styling?: string;
}> = (props) => {
  return (
    <div
      className={`flex w-screen flex-col items-center overflow-hidden ${props.styling}`}
    >
      {props.children}
    </div>
  );
};

export default InScreen;
