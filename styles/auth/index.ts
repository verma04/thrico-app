import { makeStyles } from "react-native-elements";
type Props = {
  fullWidth?: boolean;
};
const authStyles = makeStyles((theme, props: Props) => ({
  container: {
    background: "white",
    width: "100%",
  },
  text: {
    color: "white",
  },
}));

export default authStyles;
