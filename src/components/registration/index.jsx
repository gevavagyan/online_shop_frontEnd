import useStyles from "./styles";
import { REGISTRATION_FORM } from '../../constants';
import { Input } from "../input";
import {useState} from "react";
import { registration } from '../../about_server/requests/auth';

function Registration() {
  const styles = useStyles();

  const [registrationForm, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const formItemChange = (e) => {
    setForm({
      ...registrationForm,
      [e.target.id]: e.target.value
    })
  }

  return (
    <div className={styles.wrapper}>

      <div className={styles.registerWindow}>
        <div>
          <h2>Sign in</h2>
        </div>
        { REGISTRATION_FORM.map((item) => <Input key={item.id} {...item} handleChange={formItemChange}/>) }
        <div>
          <button onClick={() => registration(registrationForm)} className={styles.windowBtn}>Sign Up</button>
        </div>
        <div className={styles.warning}>
          By continuing, you agree to Amazon's&nbsp;&nbsp;
          <a href="">Conditions of Use</a>&nbsp;
          and&nbsp;&nbsp;
          <a href="">Privacy Notice</a>.
        </div>
      </div>
    </div>
  )
}

export { Registration }
