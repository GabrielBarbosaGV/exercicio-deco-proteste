import React from 'react';
import MainGridComponent from '../components/MainGridComponent';
import styled from 'styled-components';

interface OverviewProps {
    handleCreateButtonClick?: (event: any) => void
}

const Overview: React.FC<OverviewProps> = ({handleCreateButtonClick}) => {
    const Button = styled.button`
    background-color: blue;
    color: white;
    float: right;
    margin: 10px 10px 10px 10px;
    height: 30px;
    width: 80px;
    border-style: none;
    border-radius: 3px;
    `;

    return (
        <>
        <MainGridComponent outerDivStyle={{height: '400px'}} />
        <Button onClick={handleCreateButtonClick}>Create</Button>
        </>
    )
};

export default Overview;