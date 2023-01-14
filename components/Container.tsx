"use client";

import styled from "styled-components";

interface Props {
    background: string;
}

const Container = styled.div<Props>`
    padding: 0 0.5rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-height: 100vh;
    background: ${props => props.background};
`;

export default Container