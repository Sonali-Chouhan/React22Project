// import React,{useState} from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import { Link } from "react-router-dom";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useForm } from "react-hook-form";
// const theme = createTheme();

// export default function Signup() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [item,setitem]=useState([])
//   const handleRegistration=(data)=>{
//     const obj=item
//     obj.push(data)
//    setitem([...item],obj)
//    localStorage.setItem('testObject', JSON.stringify(obj))
// //    localStorage.setItem("Item",item)
//   }

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box
//             component="form"
//             noValidate
//             onSubmit={handleSubmit(handleRegistration)}
//             sx={{ mt: 3 }}
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   {...register("name", { required: true })}
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//                 <p className="error">
//                   {" "}
//                   {errors.name && <p>This is required.</p>}
//                 </p>
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   {...register("email", {
//                     required: true,
//                     pattern: {
//                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//                     },
//                   })}
//                 />
//                 <p className="error">
//                   {errors.email?.type === "required" &&
//                     "Email Address is required"}
//                 </p>
//                 <p className="error">
//                   {errors.email?.type === "pattern" && "must add Valid email"}
//                 </p>
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                   {...register("password", { required: true })}
//                 />
//                 <p className="error">
//                   {errors.password?.type === "required" && "Password  required"}
//                 </p>
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   name="number"
//                   label="Number"
//                   type="number"
//                   autoComplete="number"
//                   {...register("number", {
//                     required: true,
//                     minLength: 10,
//                     maxLength: 10,
//                   })}
//                 />
//                 <p className="error">
//                   {" "}
//                   {errors.number?.type === "required" && "Number required"}
//                 </p>
//                 <p className="error">
//                   {" "}
//                   {errors.number?.type === "minLength" && "Valid Number"}
//                 </p>
//               </Grid>
//               {/* <Grid item xs={20}>
//                 <Select label="Age" fullWidth {...register("Age")}>
//                   <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//                 </Select>
//               </Grid> */}
//             </Grid> 
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="center">
//               <Grid item>
//                 <Link to="/">Already have an account? Sign in</Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }
