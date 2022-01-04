import { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const authctx = useContext(AuthContext);
  const [state, setState] = useState({ password: "" });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newPassword = state.password;
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAYTnIiiu-dtqtpO-aAQxwF2aIcblE1fIo";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        idToken: authctx.token,
        password: newPassword,
        returnSecureToken: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => console.log(res));
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          name="password"
          value={state.password}
          onChange={changeHandler}
        />
      </div>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
