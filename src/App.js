import React from "react";
import EightBall, { answers } from "./EightBall";

EightBall.defaultProps = { answers };

const App = () => {
    return (
        <>
            <EightBall />
        </>
    );
};

export default App;