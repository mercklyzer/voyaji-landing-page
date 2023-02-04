type ButtonType = "voyage" | "connect" | "studio" | "enter" | "join";

const Button: React.FC<{
  type: ButtonType;
  styling?: string;
  func?: () => any;
}> = (props) => {
  return (
    <img
      className={`transition-all hover:scale-125 hover:cursor-pointer ${props.styling}`}
      onClick={() => (props.func ? props.func() : undefined)}
      src={`assets/buttons/${props.type}.svg`}
      alt={`${props.type} Button`}
    />
  );
};

export default Button;
