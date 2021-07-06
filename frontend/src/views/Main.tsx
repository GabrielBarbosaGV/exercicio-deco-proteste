import { AppBar, Tab } from '@material-ui/core';
import React, { useState } from 'react';
import Overview from './Overview';

interface TabContent {
    label: string;
    index: number;
    component: any;
}

interface TabPanelProps {
    index: number;
    value: number;
    component: any;
}

const TabPanel: React.FC<TabPanelProps> = ({index, value, component}) => {
    if (index === value) {
        return (
            <>
            {component}
            </>
        );
    } else return (null);
};

const Main: React.FC = () => {
    const initialTabContents: TabContent[] = [
        {
            label: "Overview",
            component: <Overview />,
            index: 0
        }
    ];

    const [tabContents, setTabContents] = useState(initialTabContents);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    
    return (
        <AppBar position="static">
            {tabContents.map(tc => <Tab label={tc.component} />)}
        </AppBar>
    )
};

export default Main;