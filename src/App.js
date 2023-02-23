import * as React from "react";
import './Style/responsive.scss'
import { useState } from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Paper, Switch } from "@mui/material";
import Navbar from "./Components/Navbar";
import "./Style/style.scss";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  const [mode, setMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          maxWidth="100vw"
          elevation={0}
        >
          <Navbar></Navbar>

          <Switch
            onClick={() => {
              setMode(!mode);
            }}
            sx={{
              position: "absolute",
              right: "55px",
            }}
          ></Switch>
        </Paper>
      </Paper>
          <Home/>
      <About/>
      <Contact/>
      <Footer></Footer>
    </ThemeProvider>
  );
}
export default App;
