import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'

export const LoginPage = () => {
  
  return (
   <Grid
   container
   spacing={ 0 }
   direction="column"
   alignItems="center"
   justifyContent="center"
   sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
   >
    <Grid item
     className='box-shadow'
     xs={ 3 }
     sx={{ 
          width: { sm: 450 },
          backgroundColor: 'white', 
          padding: 3, 
          borderRadius: 2 
      }}>
       <Typography variant='h5' sx={{ mb: 1 }}>Login</Typography>
       <form >
        <Grid container>
          <Grid item>
            <TextField
            label="Correo"
            type="email"
            placholder = 'correo@google.com'
            fullWidth
            />
          </Grid>

        </Grid>
       </form>
    </Grid> 
   </Grid>
  )
}
