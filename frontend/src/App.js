import { Container } from "@mui/system";
import React from "react";
import { BlogRoutes } from "./routes/BlogRoutes";
import { NavBar } from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

export const App = () => {
    return (
        <React.Fragment>
            <NavBar />

            <Container style={{ paddingBlock: "20px" }}>
                <BlogRoutes />
            </Container>

            <ToastContainer autoClose={4000} />
        </React.Fragment>
    );
};
