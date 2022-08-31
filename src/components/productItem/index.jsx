import useStyles from "./styles";

function ProductItem({ data }) {
  const styles = useStyles();

  const {title, description, image, price } = data;

  return (
    <div className={styles.wrapper}>
      <div className={ styles.imgWrapper }>
        <img className={ styles.img } src={ image } alt="...Loading"/>
      </div>
      <div>
        <h2 className={styles.name}>{ title }</h2>
      </div>
      <div className={styles.description}>
        { description }
      </div>
      <div>
        <h2 className={styles.price}> { price }</h2>
      </div>
    </div>
  )
}

export { ProductItem };
