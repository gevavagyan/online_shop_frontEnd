import { createUseStyles } from 'react-jss'
import {hover} from "@testing-library/user-event/dist/hover";

const useStyles = createUseStyles({
  wrapper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRight: "1px solid #b7b7bb",
    padding: "0 30px 0 30px",
    "&:hover": {
      backgroundColor: "#d8e0ea"
    }
  },
  iconWrapper: {
    textAlign: "center",
  },
  title: {
    fontSize: "20px",
    fontWeight: "normal"
  }
});

export default useStyles ;
