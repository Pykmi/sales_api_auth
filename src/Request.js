import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 80vh;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    border-radius: 15px;
    padding: 12px 16px;
    width: 15%;
    text-align: center;
    background-color: #d1d1d1;
    font-size: 1.3rem;
`;

class Request extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            payload: {
                locale: "fi",
                redirectUrl: "http://localhost:5001/response",
                organizationId: "..."
            },
            requestUrl: "https://authorisations.hsl.fi/sandbox?state="
        };

        this.send = this.send.bind(this);
    }

    send() {
        const { payload } = this.state;
        const b64 = btoa(JSON.stringify(payload));

        window.location.replace(`${this.state.requestUrl}${b64}`)
    }

    render() {
        return (
            <Container>
                <Button onClick={this.send}>Send Request</Button>
            </Container>
        );
    }
}

export default Request;
