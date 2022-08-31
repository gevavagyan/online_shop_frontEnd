import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  bar: {
    height: "100vh",
    maxWidth: "400px",
    backgroundColor: "white",
    // position: "absolute",
    // top: "0",
    // left: "0",
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    borderRight: "4px solid #ECECEC",
    padding: "20px 20px 20px 10px"
  },
  subBar: {
    height: "100vh",
    maxWidth: "400px",
    backgroundColor: "white",
    // position: "absolute",
    // top: "0",
    // left: "400px",
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    borderRight: "4px solid #ECECEC",
    padding: "20px 20px 20px 20px"
  },
  barItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: "20px",
    cursor: "pointer",
    padding: "4px 6px 4px 6px",
    "&:hover": {
      backgroundColor: "#ECECEC"
    }
  },
  title: {
    color: "black",
    fontSize: "24px",
    fontWeight: "460",
  },
  subBarTitle: {
    margin: "6px",
  },
});

export default useStyles;
