const UnderConstruction: React.FC<{
  styling?: string;
  children: React.ReactNode | React.ReactNode[];
}> = (props) => {
  return (
    <div className={`relative hover:cursor-wait ${props.styling}`}>
      <span className="pointer-events-none opacity-40">{props.children}</span>
    </div>
  );
};

export default UnderConstruction;
