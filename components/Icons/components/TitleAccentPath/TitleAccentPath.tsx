import Svg, { type SvgProps, Path } from "react-native-svg";

const TitleAccentPath: React.FC<SvgProps> = (props) => (
  <Svg width={70} height={13} fill="none" {...props}>
    <Path
      stroke="#FFA101"
      strokeLinecap="round"
      strokeWidth={3.627}
      d="M2 10.631s35.898-12.04 65.988-7.64"
    />
  </Svg>
);

export default TitleAccentPath;
