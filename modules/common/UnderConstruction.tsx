import { useState } from "react";

const UnderConstruction: React.FC<{
  type: "above" | "below";
  styling?: string;
  children: React.ReactNode | React.ReactNode[];
}> = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`relative ${props.styling}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onTouchStart={() => setShow(true)}
      onTouchEnd={() => setShow(false)}
    >
      <div className="pointer-events-none opacity-40">{props.children}</div>
      {show && (
        <img
          className={`absolute z-50 ${
            props.type === "above" ? "-top-[100%]" : "top-[100%]"
          } left-[50%] min-w-[300px] max-w-[300px]`}
          src={
            props.type === "above"
              ? "assets/buttons/tooltip-above.png"
              : "assets/buttons/tooltip-below.png"
          }
          alt="Tooltip"
        />
      )}
    </div>
  );
};

export default UnderConstruction;
