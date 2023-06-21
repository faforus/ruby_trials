import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MUIDataTable from 'mui-datatables';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { data } from '../data/employeeList';

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
    responsive: 'stacked',
    selectableRows: false,
    filter: false,
    download: false,
    viewColumns: false,
    print: false,
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
      <div className='h-auto md:h-screen flex items-center justify-center md:min-h-[800px]'>
        <MUIDataTable
          className='mt-20 mb-10 md:mt-0 md:mb-0 w-[90%] md:w-auto border-2 border-orange-500 rounded-md'
          title={'Employee List'}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    </HelmetProvider>
  );
};

export default Wifi;
