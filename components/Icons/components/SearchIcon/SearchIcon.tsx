import Svg, { type SvgProps, Circle, Path } from "react-native-svg";

const SearchIcon: React.FC<SvgProps> = (props) => (
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
    <Circle cx={11} cy={11} r={8} />
    <Path d="m21 21-4.3-4.3" />
  </Svg>
);

export default SearchIcon;
