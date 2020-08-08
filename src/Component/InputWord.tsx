import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

type WordState = {
    word: string,
    shift: string,
    result: string
}

export class InputWord extends Component<{}, WordState> {
    state: WordState = {
        word: "",
        shift: "0",
        result: ""
    };

    onChangeWord = (event: { target: { value: any; }; }) => {
        this.setState({ word: event.target.value });
    }

    onChangeShift = (event: { target: { value: any; }; }) => {
        this.setState({ shift: event.target.value });
    }

    modulo = (a: number, b: number) => {
        return ((a % b) + b) % b; 
    }

    shiftLetter = () => {
        const shift = parseInt(this.state.shift);
        const word = this.state.word;
        let result = ""
        for (let i = 0; i < word.length; i++) {
            const codeChar = word.charCodeAt(i);
            if (codeChar >= 65 && codeChar <= 90) {
                result += String.fromCharCode(this.modulo((codeChar - 65 + shift), 26) + 65);
            }

            // Lowercase letters
            else if (codeChar >= 97 && codeChar <= 122) {
                result += String.fromCharCode(this.modulo((codeChar - 97 + shift), 26) + 97);
            }
        }
        this.setState({ result: result });
    }

    render() {
        let alertResult = <div></div>
        if (this.state.result.length > 0) {
            alertResult = <Alert variant="info" className="text-center">{this.state.result}</Alert>
        }
        return (
            <div className="my-5">
                <Form.Group as={Row} controlId="formWord">
                    <Form.Label column sm="2">Mot : </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" value={this.state.word} onChange={this.onChangeWord} />
                    </Col>
                    <Form.Label column sm="2">Décalage : </Form.Label>
                    <Col sm="3">
                        <Form.Control type="number" onChange={this.onChangeShift} />
                    </Col>
                </Form.Group>
                <Button variant="outline-info" onClick={this.shiftLetter}>Décaler les lettres</Button>
                <div className="my-2">
                    <Form.Label>Resultat : </Form.Label>
                    {alertResult}
                </div>
            </div>
        )
    }
}

export default InputWord;
