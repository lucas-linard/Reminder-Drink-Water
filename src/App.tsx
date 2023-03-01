import React from "react";
import { Routes } from "./routes";
import styled, { ThemeProvider } from 'styled-components'
import light from "./theme/light";

export default function App() {

  return (
    <ThemeProvider theme={light}>
      <Routes/>

    </ThemeProvider>
      
  );
}

