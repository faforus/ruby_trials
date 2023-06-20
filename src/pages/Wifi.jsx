import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MUIDataTable from 'mui-datatables';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

// unable to provide proper sorting for dates and subordinates
// unable to remove tick for positions without subordinates

const Wifi = () => {
  const renderIsWorkingRemotely = (value) => {
    return value ? 'Yes' : 'No';
  };

  const renderDate = (value) => {
    const day = value.slice(0, 2);
    const month = value.slice(3, 5);
    const year = value.slice(6, 10);
    const newDate = new Date(year, month - 1, day);
    return { date: newDate, stringDate: value };
  };

  const customSort = () => {
    return console.log('failed to sort');
  };

  const columns = [
    { name: 'firstName', label: 'First Name' },
    { name: 'lastName', label: 'Last Name' },
    {
      name: 'isWorkingRemotely',
      label: 'Remote',
      options: { customBodyRender: renderIsWorkingRemotely },
    },
    {
      name: 'joinDate',
      label: 'Join Date',
      options: {
        customBodyRender: renderDate.stringDate,
        customSort: customSort,
      },
    },
  ];

  const data = [
    {
      joinDate: '23-04-2021',
      firstName: 'Alice',
      lastName: 'Roberts',
      isWorkingRemotely: true,
      subordinates: [
        {
          joinDate: '15-06-2022',
          firstName: 'Hugh',
          lastName: 'Burrows',
          isWorkingRemotely: false,
        },
        {
          joinDate: '13-02-2021',
          firstName: 'Robert',
          lastName: 'Clarke',
          isWorkingRemotely: true,
        },
      ],
    },
    {
      joinDate: '17-05-2022',
      firstName: 'Barry',
      lastName: 'Berkman',
      isWorkingRemotely: false,
      subordinates: [],
    },
    {
      joinDate: '23-01-2023',
      firstName: 'Terry',
      lastName: 'Joy',
      isWorkingRemotely: true,
      subordinates: [
        {
          joinDate: '08-12-2022',
          firstName: 'May',
          lastName: 'Williams',
          isWorkingRemotely: true,
        },
        {
          joinDate: '21-04-2021',
          firstName: 'April',
          lastName: 'Smith',
          isWorkingRemotely: false,
        },
      ],
    },
    {
      joinDate: '04-05-2021',
      firstName: 'Ari',
      lastName: 'Kent',
      isWorkingRemotely: true,
      subordinates: [],
    },
    {
      joinDate: '06-03-2022',
      firstName: 'Albert',
      lastName: 'Wesker',
      isWorkingRemotely: false,
      subordinates: [
        {
          joinDate: '09-09-2022',
          firstName: 'Chris',
          lastName: 'Redfield',
          isWorkingRemotely: false,
        },
        {
          joinDate: '21-04-2022',
          firstName: 'Jill',
          lastName: 'Valentine',
          isWorkingRemotely: false,
        },
        {
          joinDate: '05-11-2021',
          firstName: 'Leon',
          lastName: 'Kennedy',
          isWorkingRemotely: false,
        },
      ],
    },
  ];

  const renderExpandableRow = (rowData, rowMeta) => {
    const dataIndex = rowMeta.rowIndex;
    const subordinates = data[dataIndex].subordinates;

    return subordinates.map((subordinate, index) => (
      <TableRow key={index}>
        <TableCell></TableCell>
        <TableCell>{subordinate.firstName}</TableCell>
        <TableCell>{subordinate.lastName}</TableCell>
        <TableCell>{renderIsWorkingRemotely(subordinate.isWorkingRemotely)}</TableCell>
        <TableCell>{renderDate(subordinate.joinDate).stringDate}</TableCell>
      </TableRow>
    ));
  };

  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'standard',
    expandableRows: true,
    expandableRowsHeader: false,
    expandableRowsOnClick: true,
    isRowExpandable: (dataIndex, expandedRows) => {
      const subordinates = data[dataIndex].subordinates;
      return subordinates.length > 0;
    },
    renderExpandableRow,
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>WiFi</title>
      </Helmet>
      <div className='h-screen flex items-center justify-center'>
        <MUIDataTable title={'Employee List'} data={data} columns={columns} options={options} />
      </div>
    </HelmetProvider>
  );
};

export default Wifi;
