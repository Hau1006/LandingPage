import { SvgIconProps } from "../types";

const SvgIcon = ({ src, width, height }: SvgIconProps) => {
  return <img src={src} width={width} height={height} />;
};

export default SvgIcon;
