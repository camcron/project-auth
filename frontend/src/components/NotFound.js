import React from "react";
import { Box, Button } from '@mui/material';
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <Box>
            <p>PAGE COULD NOT BE FOUND :(</p>
            <Link to="/login">
                <Button 
                    type="submit" 
                    variant="outlined"
                >           
                GO TO LOGIN
                </Button>
            </Link>

            <Link to="/">
                <Button 
                    type="submit" 
                    variant="outlined"
                >           
                GO TO STARTPAGE
                </Button>
            </Link>

        </Box>
    )
}