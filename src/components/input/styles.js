import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  wrapper: {
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
  }
})

export default useStyles;
