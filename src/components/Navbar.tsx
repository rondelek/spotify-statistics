import { useState, useEffect, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [dataUserAll, setDataUserAll] = useState<any>();

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    setAnchorElUser(null);
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    const dataUser: any = localStorage.getItem("dataUser");
    setDataUserAll(JSON.parse(dataUser));
  }, []);

  return (
    <AppBar position="sticky" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href="/">
            <GraphicEqIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
          </a>
          <a href="/">
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Spotify Stats
            </Typography>
          </a>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <a href="/artists">
                <MenuItem key="artists" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Artists</Typography>
                </MenuItem>
              </a>
              <a href="/tracks">
                <MenuItem key="tracks" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Tracks</Typography>
                </MenuItem>
              </a>
              <a href="/genres">
                <MenuItem key="genres" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Genres</Typography>
                </MenuItem>
              </a>
            </Menu>
          </Box>
          <GraphicEqIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <a href="/">Stats</a>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <a href="/artists">
              <Button
                key={"artists"}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  padding: "0 2rem",
                }}
              >
                Artists
              </Button>
            </a>
            <a href="/tracks">
              <Button
                key={"tracks"}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  padding: "0 2rem",
                }}
              >
                Tracks
              </Button>
            </a>
            <a href="/genres">
              <Button
                key={"genres"}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  padding: "0 2rem",
                }}
              >
                Genres
              </Button>
            </a>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open profile">
              <Box
                onClick={handleOpenUserMenu}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {dataUserAll?.images[0]?.url ? (
                  <Avatar alt="Remy Sharp" src={dataUserAll.images[0].url} />
                ) : (
                  <PersonOutlineIcon />
                )}
              </Box>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key="profile" onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem key="logout" onClick={logout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
