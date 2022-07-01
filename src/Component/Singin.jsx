import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { Link} from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useForm } from "react-hook-form";
import { MdLibraryAddCheck } from "react-icons/md";
// import {toast}   from "react-toastify";

 import { useDispatch,useSelector } from "react-redux";
import { LoginCreate } from "../Redux/Action/Action";
const Signin = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // let navigate = useNavigate();
 const dispatch = useDispatch()
 
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#a35580" };
  const handleLogin = (data) => {
   
   dispatch(LoginCreate(data)) 
  }
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <MdLibraryAddCheck />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit(handleLogin)}>
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              },
            })}
          />
          <p className="error">
            {errors.email?.type === "required" && "Email Address is required"}
          </p>
          <p className="error">
            {errors.email?.type === "pattern" && "must add Valid email"}
          </p>
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />
          <p className="error">
            {errors.password?.type === "required" && "Password  required"}
          </p>

          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          />
          <Button type="submit" variant="contained" color="secondary">
            Sign up
          </Button>
        </form>
        <br></br>
        <Grid container justifyContent="center">
          <Grid item>
            {" "}
            <Link to="/singup">Already have an account? Sign in</Link>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Signin;
