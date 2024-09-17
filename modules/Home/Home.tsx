import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import s from "./Home.styles";

const Home: React.FC = () => {
  return (
    <ThemedView style={s.wrap}>
      <ThemedText type="title">Home</ThemedText>
    </ThemedView>
  );
};

export default Home;
