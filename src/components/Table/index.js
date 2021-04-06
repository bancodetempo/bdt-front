import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import { Endpoints } from 'utils/Endpoints';
import * as Fn from 'utils/functions';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%'
  },
  container: {
    maxHeight: '65%'
  }
});

const StickyHeadTable = () => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [statements, setStatements] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getStatements();
  }, [rowsPerPage, page]);

  const getStatements = async () => {
    axios
      .get(`${Endpoints.statements}/?page=${page + 1}&per_page=${rowsPerPage}`)
      .then((res) => {
        setStatements(res.data);
        const extract = res.data.list.map((stm) => {
          return createData(stm.source_user.name, stm.destination_user.name, stm.description, stm.amount, stm.inserted_at, 3);
        });
        setRows(extract);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    { id: 'source', label: 'De', columnWidth: '22%' },
    { id: 'destination', label: 'Para', columnWidth: '22%' },
    {
      id: 'description',
      label: 'O que',
      columnWidth: '23.5%'
    },
    {
      id: 'hours',
      label: 'Tempo',
      columnWidth: '7%',
      align: 'center',
      format: (value) => value.toFixed(1)
    },
    {
      id: 'date',
      label: 'Data',
      columnWidth: '23.5%'
    },
    {
      id: 'id',
      label: 'ID',
      columnWidth: '2%',
      align: 'center'
    }
  ];

  const createData = (source, destination, description, seconds, initialDate, id) => {
    const hours = Fn.secondToHours(seconds);
    const date = Fn.formatDate(initialDate);
    return { source, destination, description, hours, date, id };
  };

  console.log(statements);

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table
          stickyHeader
          aria-label="sticky table"
          size='small'
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ width: column.columnWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default StickyHeadTable;
