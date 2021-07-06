import React from 'react';
import MainGridComponent from '../components/MainGridComponent';
import {Button} from '@material-ui/core';

const Overview: React.FC = () => {
    return (
        <>
        <MainGridComponent outerDivStyle={{height: '400px'}} />
        <Button style={{float: 'right'}} />
        </>
    )
};

export default Overview;