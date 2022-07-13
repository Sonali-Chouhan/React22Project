import React, { useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { Link } from "react-router-dom";
import {MenuItem} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RegisterCreate } from "../Redux/Action/Action";
const Signup = () => {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#426a9e" };
  const marginTop = { marginTop: 2 };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const Register = useSelector((state) => state.Reducer.create);
  console.log("dd", Register);
  const handleRegistration = (item) => {
    var Data = JSON.parse(localStorage.getItem("register")) || [];
    var isData =
      Data.findIndex((x) => {
        return x.email === item.email;
      }) !== -1;
    if (isData) {
      toast.error("This Email number already exists!!");
    } else {
      dispatch(RegisterCreate(item));
    }
    reset();
  };
  useEffect(() => {
    if (Register) {
      toast.success("User Successfully Registered................");
    }
  }, [Register]);
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit(handleRegistration)}>
          <TextField
            fullWidth
            label="Name"
            placeholder="Enter your name"
            {...register("name", { required: true })}
          />
          <p className="error"> {errors.name && <p>This is required.</p>}</p>
          {/* <TextField
            fullWidth
            label="Last"
            placeholder="Enter your last"
            {...register("last", { required: true })}
          /> */}
          <p className="error"> {errors.last && <p>This is required.</p>}</p>
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

          <TextField
            fullWidth
            label="Phone Number"
            placeholder="Enter your phone number"
            {...register("number", {
              required: true,
              minLength: 10,
              maxLength: 10,
            })}
          />
          <p className="error">
            {" "}
            {errors.number?.type === "required" && "Number required"}{" "}
          </p>
          <p className="error">
            {" "}
            {errors.number?.type === "minLength" && "Valid Number"}
          </p>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">User Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // label="User_Role"
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
          <Button type="submit" variant="contained" color="primary">
            Sign up
          </Button>
        </form>
        <Grid container justifyContent="center">
          <Grid item>
            {" "}
            <Link to="/">Already have an account? Sign in</Link>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Signup;
