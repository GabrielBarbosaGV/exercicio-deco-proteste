import { AppBar, Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react';
import CountyCreation from './CountyCreation';
import Overview from './Overview';

interface TabContent {
    label: string;
    index: number;
    component: any;
}

interface TabPanelProps {
    index: number;
    value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({index, value, children}) => {
    if (index === value) {
        return (
            <>
            {children}
            </>
        );
    } else return (null);
};

const Main: React.FC = () => {
    const initialTabContents: TabContent[] = [
        {
            label: "Overview",
            component: <Overview handleCreateButtonClick={handleOverviewCreateButtonClick}/>,
            index: 0
        }
    ];

    const [tabContents, setTabContents] = useState(initialTabContents);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleOverviewCreateButtonClick(event: any) {
        const [tabContent,] = tabContents;
        setTabContents(
            [
                tabContent,
                {
                    label: "Create County",
                    component: <CountyCreation />,
                    index: 1
                }
            ]
        );
        setCurrentTabIndex(1);
    };

    const handleChange = (event: Object, newValue: any) => {
        setCurrentTabIndex(newValue);
    };

    return (
        <>
        <AppBar position="static">
            <Tabs value={currentTabIndex} onChange={handleChange}>
                {tabContents.map(tc => <Tab label={tc.label} />)}
            </Tabs>
        </AppBar>
        {tabContents.map(tc => (
            <TabPanel index={tc.index} value={currentTabIndex}>
                {tc.component}
            </TabPanel>)
        )}
        </>
    )
};

export default Main;