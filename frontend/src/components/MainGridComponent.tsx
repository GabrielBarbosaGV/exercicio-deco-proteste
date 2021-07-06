import React, { CSSProperties } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

interface MainGridComponentProps {
    outerDivStyle: CSSProperties
}

const MainGridComponent: React.FC<MainGridComponentProps> = ({outerDivStyle}) => {
    const rowData
    return (
        <div className="ag-theme-alpine" style={outerDivStyle}>
            <AgGridReact {rowData}>

            </AgGridReact>
        </div>
    );
};

export default MainGridComponent;