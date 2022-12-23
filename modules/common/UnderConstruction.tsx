import { useEffect, useState } from "react";

/*
 * @dev
 */
const UnderConstruction: React.FC<{
  styling?: string;
  children: React.ReactNode | React.ReactNode[];
}> = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // on mount
  }, []);

  return (
    <div
      className={`relative ${props.styling} bg-green-400`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onTouchStart={() => setShow(true)}
      onTouchEnd={() => setShow(false)}
    >
      <div className="pointer-events-none opacity-40">{props.children}</div>
      {show && (
        <>
          <span className="absolute top-[-60px] z-50 box-border flex h-[40px] w-[300px] items-center justify-center bg-tooltip-red text-center">
            <p>You will know soon enough</p>
          </span>
          <img
            className="absolute top-[-20px] block h-[20px]"
            src="assets/buttons/tip.png"
            alt="Tooltip Tip"
          />
        </>
      )}
    </div>
  );
};

export default UnderConstruction;
// <img
//   className={`absolute z-50 ${
//     props.type === "above" ? "-top-[100%]" : "top-[100%]"
//   } left-[50%] min-w-[300px] max-w-[300px]`}
//   src={
//     props.type === "above"
//       ? "assets/buttons/tooltip-above.png"
//       : "assets/buttons/tooltip-below.png"
//   }
//   alt="Tooltip"
// />
