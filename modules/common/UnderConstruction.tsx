import { useEffect, useRef, useState } from "react";

/*
 * @dev Anychildren element will be pointed with an under construction
 * tooltip on hover
 */

const TOOLTIP_WIDTH = 300;
const TOOLTIP_HEIGHT = 40;
const TOOLTIP_POINTER_HEIGHT = 20;

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
