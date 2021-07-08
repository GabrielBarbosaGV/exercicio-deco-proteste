import React, { CSSProperties, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { County } from '../features/counties/County';
import { fetchAllCountiesAsync, selectCounties, selectStatus as selectCountiesStatus } from '../features/counties/countiesSlice';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

interface MainGridComponentProps {
    outerDivStyle?: CSSProperties
}

const formatCounty = (county: County) => ({
    id: county.id,
    name: county.name,
    countryName: county?.country?.name,
    districtName: county?.district?.name,
    initialZipCode: county.initialZipCode,
    finalZipCode: county.finalZipCode,
    active: county.active,
    editButton: county,
    viewButton: county
});

const formatCounties = (counties: County[]) => counties.map(formatCounty);

const MainGridComponent: React.FC<MainGridComponentProps> = ({outerDivStyle}) => {
    const counties = useSelector(selectCounties);
    const countiesStatus = useSelector(selectCountiesStatus);

    const dispatch = useDispatch();

    useEffect(() => {
        if (countiesStatus === 'unloaded')
            dispatch(fetchAllCountiesAsync());
    }, [dispatch, countiesStatus]);

    const rowData = formatCounties(counties);

    const ColumnButton = styled.button`
        border: 0;
        background-color: blue;
        border-radius: 3px;
        color: white;
    `;

    const columnDefs = [
        { headerName: "ID", field: "id" },
        { headerName: "Name", field: "name" },
        { headerName: "Country Name", field: "countryName" },
        { headerName: "District Name", field: "districtName"},
        { headerName: "Initial Zip Code", field: "initialZipCode" },
        { headerName: "Final Zip Code", field: "finalZipCode" },
        { headerName: "Active", field: "active"},
        { headerName: "Edit", field: "editButton", cellRendererFramework: (county: any) => <ColumnButton>Edit</ColumnButton> },
        { headerName: "View", field: "viewButton", cellRendererFramework: (county: any) => <ColumnButton>View</ColumnButton>}
    ];

    return (
        <div className="ag-theme-alpine" style={outerDivStyle}>
            <AgGridReact rowData={rowData} columnDefs={columnDefs}>
            </AgGridReact>
        </div>
    );
};

export default MainGridComponent;