import useStyles from "./styles";

function HeaderNavigationItem({src, title}) {
  const styles = useStyles();

  return(
    <div className={ styles.wrapper }>
      <div className={styles.iconWrapper}>
        <img src={ src } alt="...Loading"/>
      </div>
      <div className={ styles.title }>{ title }</div>
    </div>
  )

}

export { HeaderNavigationItem };
