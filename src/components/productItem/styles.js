import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid"
  },
  imgWrapper: {

  },
  img: {
    height: "400px",
    width: "300px",
    borderRadius: "8px"
  },
  name: {

  },
  description: {
    maxWidth: "380px",
    padding: "6px"
  },
  price: {

  }
})

export default useStyles;
