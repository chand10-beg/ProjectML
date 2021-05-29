import React, { Component } from 'react';
import { render } from 'react-dom';
import {CardData} from './DummyData';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
const TableInfo = () => {
    const classes = useStyles();
    return(

<div>
<TableContainer style={{width: '95%'}}  className={classes.root} component={Paper}>
      <Table aria-label="simple table">
        <TableHead style={{background: "#3f51b5", color: 'white'}}>
          <TableRow>
            <TableCell  style={{ color: 'white'}}>fatca</TableCell>
            <TableCell  style={{ color: 'white'}} align="center">holder_id</TableCell>
            <TableCell  style={{ color: 'white'}}align="center">kyc</TableCell>
            <TableCell  style={{ color: 'white'}} align="center">pan</TableCell>
            <TableCell  style={{ color: 'white'}} align="center"> supplementary_kyc</TableCell>
            <TableCell  style={{ color: 'white'}} align="center">ubo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {CardData.tables[0].data.map((row, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {row.fatca}
              </TableCell>
              <TableCell align="right">{row.holder_id}</TableCell>
              <TableCell align="right">{row.kyc}</TableCell>
              <TableCell align="right">{row.pan}</TableCell>
              <TableCell align="right">{row.supplementary_kyc}</TableCell>
              <TableCell align="right">{row.ubo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</div>
    )
}
export default TableInfo;