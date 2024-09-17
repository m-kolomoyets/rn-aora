import Svg, { type SvgProps, Circle, Path } from "react-native-svg";

const PlusCircleIcon: React.FC<SvgProps> = (props) => (
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
    <Path d="M8 12h8M12 8v8" />
  </Svg>
);

export default PlusCircleIcon;
