import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import { useForm } from "react-hook-form";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import Common from "./Common";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { DeleteUser, EditUser, UpdateUser } from "../Redux/Action/Action";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-toastify";
import {MenuItem} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const Usertable = () => {
  //nnn
  const [record,setrecord]=useState({
    email:'',
    password:""
  })
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { register, handleSubmit, setValue, reset } = useForm();
  const state = useSelector((state) => state?.Reducer);
  //nnn
  const Data=JSON.parse(localStorage.getItem('login'))
  const id = useSelector((state) => state?.Reducer?.id);
  const [open, setOpen] = useState(false);
  const handleClickOpen = (id) => {
    setOpen(true);
    dispatch(EditUser(id));
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdate = (data) => {
    if (data) {
      dispatch(UpdateUser(data));
      reset();
    }
    setOpen(false);
  };
  const handleDelete = (id) => {
    let user = window.confirm("Are you sure you want to delete?....");
    if (user === true) {
      dispatch(DeleteUser(id));
    } else {
      return false;
    }
  };

  useEffect(() => {
    const data = state?.isEdit;
    if (data) {
      setValue("name", data?.name);
      setValue("email", data?.email);
      setValue("User_Role", data?.User_Role);
      setValue("number", data?.number);
      setValue("id", id);
    }
  }, [state?.isEdit, state?.Register_user]);

  useEffect(() => {
    const del = state?.delete;
    if (del) {
      toast.error("Remove_User .........");
    }
  }, [state?.delete]);
  useEffect(() => {
    const data = state?.Updatedata;
    if (data) {
      toast.success("User-Updated............:)");
    }
  }, [state?.Updatedata]);
  //nnn
  useEffect(()=>{
    const Item=Data.filter((e)=>{
      setrecord({
        email:e.email,
        password:e.password
      })
    })

  },[])
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Common />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {/* {
            state?.Register_user?.filter((e)=>{
              if(e.email===record.email && e.User_Role==="Admin"){
                return(
                 console.log("FDfd")
                  // <div>
                  //   <FormControl fullWidth>
                  // <InputLabel id="demo-simple-select-label">User Role</InputLabel>
                  // <Select
                  //   labelId="demo-simple-select-label"
                  //   id="demo-simple-select"
                  //   label="Age"
                   
                  //   >
                  //   <MenuItem value={10}>Ten</MenuItem>
                  //   <MenuItem value={20}>Twenty</MenuItem>
                  //   <MenuItem value={30}>Thirty</MenuItem>
                  // </Select>
                  // </FormControl>
                  // </div>
                )
                
                
              }
              else{
                console.log("djbjd")
                return false;
              }
            })
          } */}
          <div className="search-bar">
          <input
           id="search"
           type="search"
           placeholder="search"
            onChange={(event) => setSearch(event.target.value)}
          />
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead style={{ backgroundColor: "#66b3ff" }}>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Phone</TableCell>
                  <TableCell align="right">Role</TableCell>
                  <TableCell align="right">Delete</TableCell>
                  <TableCell align="right">Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {state?.Register_user?.filter((post) => {
                  if(post?.email===record?.email){
                    return false
                  }
                  if (search === "") {
                    return post;
                  } else if (
                    post.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return post;
                  }
                }).map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {index}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.number}</TableCell>
                    <TableCell align="right">{row.User_Role}</TableCell>
                    <TableCell align="right">
                      <Button
                        onClick={() => handleDelete(index)}
                        color="primary"
                      >
                        <DeleteOutlineIcon />
                      </Button>
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        onClick={() => handleClickOpen(index)}
                        color="secondary"
                        aria-label="edit"
                      >
                        <EditIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Dialog open={open} onClose={handleClose}>
            <DialogContent>
              <form onSubmit={handleSubmit(handleUpdate)}>
                <TextField
                  fullWidth
                  placeholder="Enter your name"
                  {...register("name", { required: true })}
                />
                <TextField
                  fullWidth
                  placeholder="Enter your last"
                  {...register("last", { required: true })}
                />
                <TextField
                  fullWidth
                  placeholder="Enter your email"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    },
                  })}
                />
                <TextField
                  fullWidth
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                />
                <TextField
                  fullWidth
                  placeholder="Enter your phone number"
                  {...register("number", {
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                  })}
                />
                <Button type="submit" variant="contained" color="primary">
                  Update
                </Button>
                <Button
                  onClick={handleClose}
                  variant="contained"
                  color="primary"
                >
                  Cancel
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </Box>
      </Box>
    </div>
  );
};
export default Usertable;
