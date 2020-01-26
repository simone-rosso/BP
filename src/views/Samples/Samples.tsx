import React, { Fragment, useContext, useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { useFetchData } from '../../utils/hooks/fetch';
import Context from '../../utils/context';
import { ISampleRow, useStyles, createRow } from './SamplesConfig';
import { getCookie } from '../../utils/cookie';
import { CircularProgress, Checkbox, TablePagination, Paper } from '@material-ui/core';
import { Order, stableSort, getSorting } from '../../utils/sort';
import ConfirmationDialogRaw from '../../components/Dialog/Dialog';
import SamplesTableToolbar from './components/SamplesTableToolbar';
import SamplesTableHead from './components/SamplesTableHead';
import ISampleModel from '../../models/ISample';

export default function SamplesTable() {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [order, setOrder] = useState<Order>('asc');
  const [loading, setLoading] = useState(true);
  const [orderBy, setOrderBy] = useState<keyof ISampleRow>('date');
  const [selected, setSelected] = useState<string[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { setSamplesList, sampleQuery, samplesList, sampleOpenDialog, setOpenDialogSamples } = useContext(Context);

  const rows: ISampleRow[] = samplesList ? samplesList.map((x: ISampleModel) => { return createRow(x) }) : [];

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof ISampleRow) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: any) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n: any) => n._id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  /*   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    }; */

  const isSelected = (name: any) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const endpoint = 'samples';
  const token = getCookie('BPtoken');
  const query = sampleQuery

  const samples = useFetchData(endpoint, token, query);

  useEffect(() => {
    setSamplesList(samples.items);
    setLoading(false)
  }, [samples.items]);

  /* useEffect(() => {
    context.setLoadingSamples(samples.loading);
  }, [samples.loading]); */

  const renderSubtitle = () => {
    return (<span className={classes.subtitle}>{samplesList && samplesList.length + " items"}</span>)
  }

  /*  Skeleton in table
      const renderSkeleton = () => {
      const table: JSX.Element[] = [];
      for (let i = 0; i < rowsPerPage; i++) {
        table.push(<TableSkeleton key={i} />)
      }
      return table
    } */

  return (
    <Fragment>
      <Typography variant="h3">Muestras{renderSubtitle()}</Typography>
      <div className={classes.root}>
        <SamplesTableToolbar numSelected={selected.length} />
        <Paper className={classes.paper}>
          {loading ? <CircularProgress /> : <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size='medium'
              aria-label="Samples table"
            >
              <SamplesTableHead
                classes={classes}
                numSelected={selected.length}
                onSelectAllClick={handleSelectAllClick}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row._id);
                    const labelId = `Samples-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={event => handleClick(event, row._id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row._id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </TableCell>
                        <TableCell component="th" id={labelId} scope="row" padding="none">
                          {row.date}
                        </TableCell>
                        <TableCell>{row.ref}</TableCell>
                        <TableCell>{row.type}</TableCell>
                        <TableCell>{row.parameters}</TableCell>
                        <TableCell>{row.localization}</TableCell>
                        <TableCell>{row.result}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={7} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>}
        </Paper>
        <TablePagination
          labelRowsPerPage=""
          component="div"
          count={rows.length}
          rowsPerPage={10}
          page={page}
          onChangePage={handleChangePage}
        /* rowsPerPageOptions={[5, 10, 25]} */
        /* onChangeRowsPerPage={handleChangeRowsPerPage} */
        />
        {sampleOpenDialog && <ConfirmationDialogRaw
          classes={{
            paper: classes.dialog,
          }}
          id="ringtone-menu"
          keepMounted
          open={sampleOpenDialog}
          onClose={() => setOpenDialogSamples(false)}
          value={"asdadds"}
        />}
      </div>
    </Fragment>
  );
}