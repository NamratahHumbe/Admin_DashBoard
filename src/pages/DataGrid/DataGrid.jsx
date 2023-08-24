// import React, { useMemo } from 'react'
// import MaterialReactTable from "material-react-table";
// import { userData } from '../../data';
// import './DataGrid.css'
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// const DataGrid = () => {

//     const columns = useMemo(() => [
//         {
//             accessorKey: "name.firstName",
//             header: 'First Name',
//         },
//         {
//             accessorKey: "name.lastName",
//             header: 'Last Name',
//         },
//         {
//             accessorKey: "address",
//             header: "Address",
//         },
//         {
//             accessorKey: "city",
//             header: "City",
//         },
//         {
//             accessorKey: "state",
//             header: "State",
//         },
//     ])
//     const theme = useMemo(
//         () => createTheme({
//             palette: {
//                 mode: "dark"
//             }
//         })
//     )

//     return (
//         <div className="table-container">
//             <ThemeProvider theme={theme}>
//                 <MaterialReactTable columns={columns} data={userData} />
//             </ThemeProvider>
//         </div>
//     )
// }

// export default DataGrid

import React from 'react';
import { useQuery } from 'react-query';
import MaterialReactTable from 'material-react-table';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const fetchUserData = async () => {
  const response = await fetch('http://localhost:3001/api/users'); // Adjust the URL to your backend API endpoint
  const data = await response.json();
  return data;
};

const DataGrid = () => {
  const { data: userData, isLoading, isError } = useQuery('userData', fetchUserData);

  const columns = [
    {
      accessorKey: 'name.firstName',
      header: 'First Name',
    },
    {
      accessorKey: 'name.lastName',
      header: 'Last Name',
    },
    {
      accessorKey: 'address',
      header: 'Address',
    },
    {
      accessorKey: 'city',
      header: 'City',
    },
    {
      accessorKey: 'state',
      header: 'State',
    },
  ];

  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="table-container">
      <ThemeProvider theme={theme}>
        <MaterialReactTable columns={columns} data={userData} />
      </ThemeProvider>
    </div>
  );
};

export default DataGrid;
