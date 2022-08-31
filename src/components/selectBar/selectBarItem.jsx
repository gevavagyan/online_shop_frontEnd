import useStyles from './styles';

const titleStyles = {
  bar: "20%",
  subBar: "50%"
}

function SelectBarItem({ name, handler, src}) {

  const styles = useStyles();

  return (
    <div onClick={ handler.onClick } onMouseEnter={ handler.onMouseEnter } className={ styles.barItem }>
      { src &&
        <div>
          <img src={ src } alt="...Loading"/>
        </div>
      }
      <div>
        <div style={{opacity: src ? "80%" : "50%"}} className={ styles.title }>{ name }</div>
      </div>
    </div>
  )
}

export { SelectBarItem };
