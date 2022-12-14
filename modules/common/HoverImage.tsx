import { useState } from "react";

const HoverImage: React.FC<{
  name: string;
  onHoverImg: string;
  onOutImg: string;
  styling?: string;
}> = (props) => {
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <img
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className={`${props.styling}`}
        src={hovering ? props.onHoverImg : props.onOutImg}
        alt={props.name}
      />
    </>
  );
};

export default HoverImage;
