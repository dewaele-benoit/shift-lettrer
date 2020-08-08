import 'bootstrap/dist/css/bootstrap.min.css';
import { hot } from 'react-hot-loader';
import * as React from 'react';
import Container from "react-bootstrap/Container";
import InputWord from "./Component/InputWord";

const App = () => {
    return (
        <Container>
            <InputWord></InputWord>
        </Container>
    )
}

export default hot(module)(App);
