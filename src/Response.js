import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 80vh;
    align-items: center;
    justify-content: center;
`;

const Token = styled.div`
    border: 1px solid #CCC;
    padding: 12px 16px;
    width: 50%;
    word-break: break-all;
`;

const Response = (props) => {
    const { search } = props.location;
    const token = search.substring(search.indexOf('=')+1,search.indexOf('&'));

    return (
        <Container>
            { token && ( <Token>{token}</Token> ) }
        </Container>
    );
};

export default Response;
