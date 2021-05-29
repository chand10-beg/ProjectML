import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import {CardData} from './DummyData';
import Paper from '@material-ui/core/Paper';
const CardDetails = () => {
    return(
        <div>
            <Card style={{width: '95%', marginRight: '1rem'}}><CardHeader style={{background: "#3f51b5", color: 'white', fontFamily: 'montserrat'}} title="Account Holder Info"/>
         <hr style={{margin: '0'}}/>
         <CardContent>
         <div style={{display: 'flex'}}>
            <div style={{marginRight: '8rem', fontFamily: 'sans-serif', marginBottom: '0.5rem'}}>First Holder Name:</div> <span style={{fontFamily: 'cursive'}}>{CardData.fields.first_holder_name}</span></div>
            <div style={{display: 'flex'}}>
            <div style={{marginRight: '10rem', fontFamily: 'sans-serif', marginBottom: '0.5rem'}}>Folio Number:</div> <span style={{fontFamily: 'cursive'}}>{CardData.fields.folio_number}</span></div>
            <div style={{display: 'flex'}}>
            <div style={{marginRight: '9rem', fontFamily: 'sans-serif', marginBottom: '0.5rem'}}>Guardian Name:</div> <span style={{fontFamily: 'cursive'}}>{CardData.fields.guardian_name}</span></div>
            <div style={{display: 'flex'}}>
            <div style={{marginRight: '9rem', fontFamily: 'sans-serif', marginBottom: '0.5rem'}}>Mode of Holding:</div> <span style={{fontFamily: 'cursive'}}>{CardData.fields.mode_of_holding}</span></div>
            <div style={{display: 'flex'}}>
            <div style={{marginRight: '9rem', fontFamily: 'sans-serif', marginBottom: '0.5rem'}}>Nominee Name:</div> <span style={{fontFamily: 'cursive'}}>{CardData.fields.nominee_name}</span></div>
            <div style={{display: 'flex'}}>
            <div style={{marginRight: '9rem', fontFamily: 'sans-serif'}}>Statement Date:</div> <span style={{fontFamily: 'cursive'}}>{CardData.fields.statement_date}</span></div>
            <div style={{display: 'flex'}}>
            <div style={{marginRight: '11rem', fontFamily: 'sans-serif'}}>Tax Status:</div> <span style={{fontFamily: 'cursive'}}>{CardData.fields.tax_status}</span></div>
            </CardContent>
</Card>
        </div>
    )
}
export default CardDetails;