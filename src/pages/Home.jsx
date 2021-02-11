import React from 'react';
import Button from "@material-ui/core/Button";

function Home () {
    return (
        <div>
            <h1>
                Welcome to Home
            </h1>
            <Button variant="contained" color="primary" href="/Quiz">
                Try the Quiz!
            </Button>
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
        </div>
    )
}

export default Home;
