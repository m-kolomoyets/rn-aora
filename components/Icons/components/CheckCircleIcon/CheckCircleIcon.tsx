import Svg, { type SvgProps, Circle, Path } from "react-native-svg";

const CheckCircleIcon: React.FC<SvgProps> = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <Circle cx={12} cy={12} r={10} />
    <Path d="m9 12 2 2 4-4" />
  </Svg>
);

export default CheckCircleIcon;
