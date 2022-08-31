import useStyles from "./styles";
import { useNavigate } from 'react-router-dom';
import { LOGIN_FORM } from '../../constants';
import { Input } from "../input";
import {useState} from "react";

function Login() {
  const styles = useStyles();
  const navigate = useNavigate();

  const [loginForm, setForm] = useState({
    email: '',
    password: '',
  });

  const formItemChange = (e) => {
    setForm({
      ...loginForm,
      [e.target.id]: e.target.value
    })
  };

  const redirectToRegistration = () => {
    navigate('/registration')
  }

  return (
    <div className={styles.wrapper}>

      <div className={styles.loginWindow}>
        <div>
          <h2>Sign in</h2>
        </div>
        {LOGIN_FORM.map((item) => <Input key={item.id} {...item} handleChange={formItemChange}/>)}
        <div>
          <button className={styles.windowBtn}>Continue</button>
        </div>
        <div className={styles.warning}>
          By continuing, you agree to Amazon's&nbsp;&nbsp;
          <a className={styles.link} href="">Conditions of Use</a>&nbsp;
          and&nbsp;&nbsp;
          <a className={styles.link} href="">Privacy Notice</a>.
        </div>
      </div>
      <div>
        <button className={styles.registerBtn} onClick={ redirectToRegistration }>Create your Amazon account</button>
      </div>

    </div>
  )
}

export { Login }
