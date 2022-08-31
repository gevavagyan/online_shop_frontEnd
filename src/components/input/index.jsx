import useStyles from "./styles";

const Input = ({ id, htmlFor, labelTitle, placeholder, type, handleChange }) => {
  const { wrapper, input, label } = useStyles();

  return (
    <div className={wrapper}>
      <label className={label} htmlFor={htmlFor}>{labelTitle}</label>
      <input onChange={handleChange} className={input} placeholder={placeholder} type={type} id={id}/>
    </div>
  );
}

export { Input };
