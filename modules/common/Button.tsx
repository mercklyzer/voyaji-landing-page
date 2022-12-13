type ButtonType = "voyage" | "connect" | "studio";

const Button: React.FC<{
  type: ButtonType;
  styling?: string;
  func?: () => any;
}> = (props) => {
  return (
    <img
      onClick={() => (props.func ? props.func() : undefined)}
      className={`hover:cursor-pointer ${props.styling}`}
      src={`assets/buttons/${props.type}.png`}
      alt={`${props.type} Button`}
    />
  );
};

export default Button;
