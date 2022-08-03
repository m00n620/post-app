import React from "react";
import { Container } from "@mui/material";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <Container maxWidth="sm" sx={{ py: 10 }}>
      {children}
    </Container>
  );
}
