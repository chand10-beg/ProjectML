import { Grid, Table } from '@material-ui/core';
import React from 'react';
import CardDetails from './component/cardDetails';
import ComponentTable from './component/Components';
import Left from './component/Left';
import SearchAppBar from './component/Navbar';
import TableInfo from './component/Table';

function App() {
    return (
      <div>
        <SearchAppBar/>
        <hr/>
        <Grid container direction="row"><Grid item xs={6}><div><Left/></div></Grid><Grid item xs={6}><div><CardDetails/></div><hr/><div><TableInfo/></div><hr/><div><ComponentTable/></div></Grid>
      </Grid>
      </div>
     
      )
  }

export default App;