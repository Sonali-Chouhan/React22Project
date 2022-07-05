import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import { Link } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { MdDashboard } from "react-icons/md";
import { ImTable2 } from "react-icons/im";
import { SiAboutdotme } from "react-icons/si";
// import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;
const Common = () => {
  // const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    // navigate("/");
    window.location.href = "/";
  };
  return (
    <div>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MdDashboard />
                </ListItemIcon>
                <ListItemText>
                  <Link to="/dashboard">Dashboard</Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ImTable2 />
                </ListItemIcon>
                <ListItemText>
                  <Link to="/userlist">User-List</Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SiAboutdotme />
                </ListItemIcon>
                <ListItemText>
                  {" "}
                  <Link to="/about">About-Us</Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText onClick={() => handleLogout()}>
                  Logout
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Common;
