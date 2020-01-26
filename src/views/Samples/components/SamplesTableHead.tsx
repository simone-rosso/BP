import React from 'react'
import { TableHead, TableRow, TableCell, Checkbox, TableSortLabel } from '@material-ui/core';
import { SamplesTableProps, ISampleRow, headCells } from '../SamplesConfig';

const SamplesTableHead = (props: SamplesTableProps) => {
    const { classes, order, orderBy, onSelectAllClick, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property: keyof ISampleRow) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all samples' }}
            />
          </TableCell>
          {headCells.map(headCell => (
            <TableCell
              key={headCell.id}
              align='left'
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  export default SamplesTableHead