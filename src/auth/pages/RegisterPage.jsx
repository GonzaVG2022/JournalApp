import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, TextField, Typography, Link } from "@mui/material"
import {  } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"


export const RegisterPage = () => {
  return (
  <AuthLayout tittle= 'Register'> 
            
            <form>
                <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                        label='Name' 
                        type="text" 
                        placeholder="Flavio VG" 
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                        label='Email' 
                        type="email" 
                        placeholder="gonzagargantini20@gmail.com" 
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                        label='Password' 
                        type="password" 
                        placeholder="password" 
                        fullWidth
                        />
                    </Grid>
                    <Grid container spacing={ 2 } sx={{ mb: 2 , mt: 2}} >
                        <Grid item xs={12} sm={6}>
                            <Button 
                            variant="contained"
                            fullWidth
                            > 
                               Crear cuenta 
                            </Button>
                        </Grid>
                        
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                      <Typography sx={{ mr: 1 }}>do you already have an account?</Typography>
                        <Link component={ RouterLink } color='inherit' to='/auth/login'>
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>

    </AuthLayout>    
        
   
  )
}
