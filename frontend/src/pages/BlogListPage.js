import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { APP_ROUTE } from "../routes/BlogRoutes";

export const BlogListPage = () => {
    const navigate = useNavigate();
    const [allBlogs, setAllBlogs] = useState([]);

    const fetchAllBlogs = async () => {
        const response = await axios.get("/api/blog/");
        const allBlogs = response.data;

        setAllBlogs(allBlogs);
    };

    const handleReadMoreClick = (blogId) => {
        const url = APP_ROUTE.BLOG_DETAILS.replace(":blogId", blogId);
        navigate(url);
    };

    const handleCreateBlog = () => {
        navigate(APP_ROUTE.BLOG_CREATE);
    };

    useEffect(() => {
        fetchAllBlogs();
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} display="flex" justifyContent="space-between">
                <Typography variant="h4">List of blogs</Typography>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleCreateBlog}
                >
                    Create new blog
                </Button>
            </Grid>

            {allBlogs.map((blog, index) => (
                <Grid item key={index} lg={4} md={6} xs={12}>
                    <Card variant="outlined">
                        <CardHeader
                            title={blog.title}
                            subheader={blog.createdAt}
                        />

                        <CardContent>{blog.description}</CardContent>

                        <CardActions
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                padding: 16,
                            }}
                        >
                            <Typography>3 min read</Typography>

                            <Button
                                variant="outlined"
                                endIcon={<ChevronRightIcon />}
                                onClick={() => handleReadMoreClick(blog._id)}
                            >
                                Read More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};