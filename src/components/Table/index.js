import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Pagination from '@material-ui/lab/Pagination';

import InputOrder from 'components/Input/index';
import * as St from './Styles';
import { Endpoints } from 'utils/Endpoints';
import * as Fn from 'utils/functions';

const StickyHeadTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [statements, setStatements] = useState([]);
  const [rows, setRows] = useState([]);
  const [pagesNumber, setPagesNumber] = useState(1);

  const getStatements = React.useCallback(() => {
    axios
      .get(`${Endpoints.statements}/?page=${page + 1}&per_page=${rowsPerPage}`)
      .then((res) => {
        setStatements(res.data);
        const extract = res.data.list.map((stm) => {
          return createData(stm.source_user.name, stm.destination_user.name, stm.description, stm.amount, stm.inserted_at, 3);
        });
        setRows(extract);
        setPagesNumber(Math.ceil(res.data.count / rowsPerPage));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [rowsPerPage, page]
  );

  useEffect(() => {
    getStatements();
  }, [getStatements]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1);
  };

  const handleChoicePage = (event) => {
    const newPage = event.target.value;

    if (newPage <= pagesNumber) {
      setPage(newPage - 1);
    } else {
      setPage(page);
    }
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    { id: 'source', label: 'De', columnWidth: '21.5%' },
    { id: 'destination', label: 'Para', columnWidth: '21.5%' },
    {
      id: 'description',
      label: 'O que',
      columnWidth: '23%'
    },
    {
      id: 'stringHours',
      label: 'Tempo',
      columnWidth: '12%',
      align: 'center',
      format: (value) => value.toFixed(1)
    },
    {
      id: 'date',
      label: 'Data',
      columnWidth: '21%'
    },
    {
      id: 'id',
      label: 'ID',
      columnWidth: '1%',
      align: 'center'
    }
  ];

  const createData = (source, destination, description, seconds, initialDate, id) => {
    let string = 'hora';
    const hours = Fn.secondToHours(seconds);

    if (hours >= 2) {
      string = 'horas';
    }

    const stringHours = `${hours} ${string}`;
    const date = Fn.formatDate(initialDate);
    return { source, destination, description, stringHours, date, id };
  };

  console.log(statements);

  return (
    <St.Wrapper>
      <St.Container>
        <Table
          stickyHeader
          aria-label="sticky table"
          size='small'
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <St.Head
                  key={column.id}
                  align={column.align}
                  style={{ width: column.columnWidth }}
                >
                  {column.label}
                </St.Head>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <St.Row tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <St.Cell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </St.Cell>
                    );
                  })}
                </St.Row>
              );
            })}
          </TableBody>
        </Table>
      </St.Container>
      <div className='table-pagination'>
        <section>
          <span>Linhas por página:&nbsp;</span>
          <select value={rowsPerPage} onChange={handleChangeRowsPerPage}>
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
          </select>
        </section>

        <section>
          <Pagination count={pagesNumber} page={page + 1} onChange={handleChangePage} size="small" />
        </section>

        <section>
          <span>Ir para a página: &nbsp;</span>
          <InputOrder
            type={'number'}
            onChange={handleChoicePage}
            value={page + 1}
            width={'3vw'}
            max={pagesNumber}
            min={1}
          />
        </section>
      </div>
    </St.Wrapper>
  );
};

export default StickyHeadTable;
