import { Container } from "@mui/system";
import React from "react";
import { BlogRoutes } from "./routes/BlogRoutes";
import { NavBar } from "./components/NavBar";
import "./App.css";

export const App = () => {
    return (
        <React.Fragment>
            <NavBar />

            <Container style={{ paddingBlock: "20px" }}>
                <BlogRoutes />
            </Container>
        </React.Fragment>
    );
};
