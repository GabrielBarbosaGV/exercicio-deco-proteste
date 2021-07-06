import React, { CSSProperties } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import { County } from '../features/counties/County';
import { Button } from '@material-ui/core';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

interface MainGridComponentProps {
    outerDivStyle: CSSProperties
}

const makeCountyFormatters = ({
    editButtonMaker,
    viewButtonMaker
}: {
    editButtonMaker: (county: County) => any,
    viewButtonMaker: (county: County) => any
}) => {
    const formatCounty = (county: County) => ({
        id: county.id,
        name: county.name,
        countryName: county.country.name,
        districtName: county.district.name,
        initialZipCode: county.initialZipCode,
        finalZipCode: county.finalZipCode,
        editButton: editButtonMaker(county),
        viewButton: viewButtonMaker(county)
    });

    const formatCounties = (counties: County[]) => counties.map(formatCounty);

    return {formatCounty, formatCounties};
};

const MainGridComponent: React.FC<MainGridComponentProps> = ({outerDivStyle}) => {
    const {formatCounties} = makeCountyFormatters({
        editButtonMaker: (county: County) => <Button>Edit</Button>,
        viewButtonMaker: (county: County) => <Button>View</Button>
    });

    return (
        <div className="ag-theme-alpine" style={outerDivStyle}>
            <AgGridReact {rowData}>

            </AgGridReact>
        </div>
    );
};

export default MainGridComponent;