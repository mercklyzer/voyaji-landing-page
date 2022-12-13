type ButtonType = "voyage" | "connect" | "studio";

const Button: React.FC<{
  type: ButtonType;
  styling?: string;
}> = (props) => {
  return (
    <img
      className={`hover:cursor-pointer ${props.styling}`}
      src={`assets/buttons/${props.type}.png`}
      alt={`${props.type} Button`}
    />
  );
};

export default Button;
