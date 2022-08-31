import { createUseStyles } from 'react-jss'
import {hover} from "@testing-library/user-event/dist/hover";

let useStyles;
useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "calc(100vh - 80px)"
  },
  loginWindow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "460px",
    height: "540px",
    backgroundColor: "#DFDFDE",
    borderRadius: "8px",
    border: "1px solid black",
    rowGap: "34px",
    padding: "10px",
    marginBottom: "20px",
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    rowGap: "8px"
  },
  input: {
    width: "420px",
    height: "50px",
    padding: "0 8px 0 8px",
    borderRadius: "8px",
    border: "2px solid #F8CB2E",
    fontSize: "20px",
  },
  label: {
    fontSize: "20px",
    opacity: "80%"
  },
  windowBtn: {
    width: "280px",
    height: "50px",
    padding: "10px 0 10px 0",
    fontWeight: "bold",
    fontSize: "24px",
    borderRadius: "8px",
    backgroundColor: "#F8CB2E",
    border: "none",
  },
  warning: {
    padding: '30px 18px 0px 18px',
    fontSize: "18px",
    '&>a': {
      textDecoration: "none",
      color: "#0066c0",
      '&:hover': {
        textDecoration: "underline",
      }
    }
  },
  registerBtn: {
    width: "480px",
    height: "50px",
    border: "1px solid black",
    borderRadius: "7px",
    fontSize: "20px",
    backgroundColor: "#DFDFDE",
    '&:hover': {
      backgroundColor: "#F8CB2E"
    }
  },

});

export default useStyles;
