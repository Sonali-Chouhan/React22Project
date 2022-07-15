import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import DeshboardCommon from "./DeshboardCommon";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { MdOutlineGroup } from "react-icons/md";

const UserProfile = () => {
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  const Data = JSON.parse(localStorage.getItem("login"));
  return (
    <Box sx={{ display: "flex" }}>
      <DeshboardCommon />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <div>
          <Paper
            sx={{
              p: 5,
              margin: "auto",
              maxWidth: 700,
              flexGrow: 1,
              border: "2px solid #ebf5ff",
              borderRadius: "12",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#a0b2c9" : "#ffffff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 160, height: 100 }}>
                  <Img
                    alt="complex"
                    src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  {Data?.map((e, id) => {
                    return (
                      <Grid item xs key={id}>
                        <Typography gutterBottom variant="h5" component="div">
                          
                        <MdOutlineGroup />Profile
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          Manage your profile
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                          {e.email}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                          {e.User_Role}
                        </Typography>
                      </Grid>
                    );
                  })}
                </Grid>
                {/* <Grid item>
                  <Typography variant="subtitle1" component="div">
                    <CgProfile/>
                  </Typography>
                </Grid> */}
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Box>
    </Box>
  );
};

export default UserProfile;
