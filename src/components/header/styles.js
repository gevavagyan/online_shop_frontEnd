import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    // columnGap: '30px',
    padding: '0px 0 0px 14px',
    height: '74px',
    width: "100%",
    backgroundColor: '#4e7693',
    position: "relative",
  },
  btnWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1px 8px 1px 8px",
    border: "1px solid rgba(255,255,255,.4)",
    borderRadius: "8px",
    "&:hover": {
      border: "1px solid rgba(255,255,255, 0.81)",
      backgroundColor: "#577f9a",
      borderRadius: "8px",
    },
  },
  heading: {
    fontSize: '40px',
    fontWeight: 'bold',
    padding: "0 10px 0 20px",
    color: "#F8CB2E",
    margin: "0"
  },
  hidenMenu: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: "calc(100% - 50px)",
    height: "100%",
    justifyContent: "space-between",
    '@media (max-width: 1067px)': {
      display: "none"
    }
  },
  lastBlock: {
    display: "flex",
    alignItems: "center",
    height: "100%"
  },
  linksWrapper: {
    display: "flex",
    height: "100%"
  },
  searchInput: {
    border: 'none',
    backgroundColor: "rgba(255,255,255,60%)",
    borderRadius: '25px',
    height: "50%",
    width: "260px"
  },
  inputWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: "0 20px 0 20px",
  },
  hidSearch: {
    display: "none",
    // width: "0px",
    '@media screen and (min-width: 0px) and (max-width: 1067px)': {
      // hidSearch: {
      //   display: "block",
      // },
      display: "block",
      padding: "0 14px 0 0",
      textAlign: "center"
     },
  },
  modalsWrapper: {
    position: "absolute",
    top: "0",
    left: "0",
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    width: "100%",
    background: "rgb(36, 36, 36, 30%)",
  },
  closeBar: {
    width: "40px",
    height: "100%",
    padding: "10px 10px 10px 10px",
    cursor: "pointer",
  },
  closeImg: {
    "&:hover": {
      height: "46px",
      width: "46px",
      // background: "rgb(36, 36, 36, 20%)",
    }
  }
})

export default useStyles;
