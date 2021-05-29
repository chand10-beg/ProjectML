import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import {CardData} from './DummyData';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
const ComponentTable = () => {
    const classes = useStyles();
    return(
        <div>
            <Card style={{width: '95%', marginRight: '1rem'}}><CardHeader style={{background: "#3f51b5", color: 'white', fontFamily: 'montserrat'}} title={CardData.components[0].component_name}/>
         <hr style={{margin: '0'}}/>
         <CardContent>
         <div style={{display: 'flex'}}>
            <div style={{marginRight: '9rem', fontFamily: 'sans-serif', marginBottom: '0.5rem'}}>Advisor:</div> <span style={{fontFamily: 'cursive'}}>{CardData.components[0].data[0].fields.advisor}</span></div>
            <div style={{display: 'flex'}}>
            <div style={{marginRight: '6rem', fontFamily: 'sans-serif', marginBottom: '0.5rem'}}>Bank Account:</div> <span style={{fontFamily: 'cursive'}}>{CardData.components[0].data[0].fields.bank_account}</span></div>
            <div style={{display: 'flex'}}>
            <div style={{marginRight: '10.5rem', fontFamily: 'sans-serif', marginBottom: '0.5rem'}}>Isin:</div> <span style={{fontFamily: 'cursive'}}>{CardData.components[0].data[0].fields.isin}</span></div>
            <div style={{display: 'flex'}}>
            <div style={{marginRight: '8rem', fontFamily: 'sans-serif', marginBottom: '0.5rem'}}>Lien Units:</div> <span style={{fontFamily: 'cursive'}}>{CardData.components[0].data[0].fields.lien_units}</span></div>
            <div style={{display: 'flex'}}>
            <div style={{marginRight: '6rem', fontFamily: 'sans-serif', marginBottom: '0.5rem'}}>Scheme name:</div> <span style={{fontFamily: 'cursive'}}>{CardData.components[0].data[0].fields.scheme_name}</span></div>
            {/* <div style={{display: 'flex'}}>
            <div style={{marginRight: '9rem', fontFamily: 'sans-serif'}}>Statement Date:</div> <span style={{fontFamily: 'cursive'}}>{CardData.components[1].data.fields.statement_date}</span></div>
            <div style={{display: 'flex'}}>
            <div style={{marginRight: '11rem', fontFamily: 'sans-serif'}}>Tax Status:</div> <span style={{fontFamily: 'cursive'}}>{CardData.components[1].data.fields.tax_status}</span></div> */}
            <hr/>
            <div>
            <TableContainer style={{width: '100%'}}  className={classes.root} component={Paper}>
      <Table aria-label="simple table">
        <TableHead style={{background: "white", color: 'black'}}>
          <TableRow>
          <TableCell  style={{ color: 'black'}} align="center">Amount</TableCell>
            <TableCell  style={{ color: 'black'}}>Correction type</TableCell>
            <TableCell  style={{ color: 'black'}} align="center">Date</TableCell>
            <TableCell  style={{ color: 'black'}}align="center">Nav</TableCell>
            <TableCell  style={{ color: 'black'}} align="center">Price</TableCell>
            <TableCell  style={{ color: 'black'}} align="center"> Txn Type</TableCell>
            <TableCell  style={{ color: 'black'}} align="center">Unit Balance</TableCell>
            <TableCell  style={{ color: 'black'}} align="center">Units</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {CardData.components[0].data[0].tables[0].data.map((row, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {row.amount}
              </TableCell>
              <TableCell align="right">{row.correction_type}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.nav}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.txn_type}</TableCell>
              <TableCell align="right">{row.unit_balance}</TableCell>
              <TableCell align="right">{row.units}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
            </CardContent>
</Card>
        </div>
    )
}
export default ComponentTable;