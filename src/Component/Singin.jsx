import React, { useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Link, useNavigate } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";
import { useForm } from "react-hook-form";
import { MdLibraryAddCheck } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { LoginCreate } from "../Redux/Action/Action";
import { toast } from "react-toastify";
const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.Reducer?.message);
  console.log("DD", state);
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#dd3290" };
  const handleLogin = (data) => {
    dispatch(LoginCreate(data));
    reset();
  };
  // useEffect(() => {
  //   if (state === true) {
  //     toast.success("User_Singin ......");
  //   }

  //   // else if(state===false){
  //   //   toast.error("Please Register Your Email.........")
  //   // }
  // }, [state]);

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

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">User Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              placeholder="User_Role"
              {...register("User_Role")}
            >
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="User">User</MenuItem>
            </Select>
          </FormControl>
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
