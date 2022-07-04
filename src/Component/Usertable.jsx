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
import { DeleteUser, EditUser ,UpdateUser} from "../Redux/Action/Action";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Usertable = () => {
  const Item = localStorage.getItem("register");
  const rows = JSON.parse(Item);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { register, handleSubmit, setValue,reset } = useForm();
  const state = useSelector((state) => state?.Reducer?.isEdit);
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
    dispatch(UpdateUser(data))
    reset();
  };
  const handleDelete = (id) => {
    let user = window.confirm("Are you sure you want to delete?");
    if (user === true) {
      dispatch(DeleteUser(id));
    } else {
      return false;
    }
  };

  useEffect(() => {
    const data = state;

    if (data) {
      setValue("name", data?.name);
      setValue("email", data?.email);
      setValue("last", data?.last);
      setValue("number", data?.number);
      setValue("id", id);
    }
  }, [state]);
  return (
    <div>
        <input 
        className="search"
        placeholder="Enter Title ..........."
        onChange={(event) => setSearch(event.target.value)}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead style={{ backgroundColor: "#4875c2" }}>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows ?.filter((post) => {
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
                <TableCell align="right">
                  <Button onClick={() => handleDelete(index)}>
                    <DeleteOutlineIcon />
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleClickOpen(index)}>Edit</Button>
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
              label="Name"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
            <TextField
              fullWidth
              label="Last"
              placeholder="Enter your last"
              {...register("last", { required: true })}
            />
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
            <TextField
              fullWidth
              label="Password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
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
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
            <Button onClick={handleClose} variant="contained" color="primary">
              Cancel
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default Usertable;
