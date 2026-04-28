import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import AddCardIcon from '@mui/icons-material/AddCard';


export const PaymentPage = () => {

    return (
        <>

            <div>

                <Container>

                    <Typography variant="h3" component="h3">
                        Checkout
                    </Typography>

                    <Typography variant="h5" component="h5">
                        Completa tu compra de forma segura
                    </Typography>

                    <Container>

                        <Card>
                            <CardContent>

                                <Grid>
                                    <Grid>
                                        <div>
                                            I1
                                        </div>
                                    </Grid>

                                    <Grid>

                                        <Typography variant="h5" component="h5">
                                            Informaciòn de pago
                                        </Typography>

                                        <Typography variant="h5" component="h5">
                                            Ingresa los datos de tu tarjeta
                                        </Typography>

                                    </Grid>


                                </Grid>

                                <Grid container sx={{ dispay: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

                                    <Grid>

                                        <Typography sx={{textAlign:'start'}}>
                                            Número de tarjeta
                                        </Typography>

                                        <TextField
                                            fullWidth
                                            sx={{ background: '#eae8e8' }}
                                            slotProps={{
                                                input: {
                                                    endAdornment: <InputAdornment position="start">
                                                        <AddCardIcon />
                                                    </InputAdornment>,
                                                },
                                            }}
                                            label="Número de tarjeta" variant="outlined" />
                                    </Grid>

                                      <Grid>


                                        <Typography sx={{textAlign:'start'}}>
                                            Nombre del titular
                                        </Typography>

                                        <TextField
                                            fullWidth
                                            sx={{ background: '#eae8e8' }}
                                            label="Nombre del titular" variant="outlined" />

                                    </Grid>


                                    <Grid container sx={{gap:'4px'}}>

                                        <Grid>

                                            <Typography sx={{textAlign:'start'}}>
                                                vencimiento
                                            </Typography>

                                            <TextField
                                                fullWidth
                                                sx={{ background: '#eae8e8' }}
                                                label="Vencimiento" variant="outlined" />
                                        </Grid>

                                        <Grid>

                                            <Typography sx={{textAlign:'start'}}>
                                                CCV
                                            </Typography>

                                            <TextField
                                                fullWidth
                                                sx={{ background: '#eae8e8' }}
                                                label="CCV" variant="outlined" />
                                        </Grid>

                                    </Grid>


                                    <Grid sx={{ width:'100%', background: '#eae8e8', borderRadius:'10%' }}>

                                        <Grid sx={{display:'flex', justifyContent:'space-between'}}>

                                          <Grid>
                                            subtotal
                                          </Grid>

                                          <Grid>
                                             213423
                                          </Grid>

                                        </Grid>

                                        <Grid sx={{justifyContent:'space-between'}}>

                                          <Grid>
                                            Iva(16%)
                                          </Grid>

                                          <Grid>
                                             213423
                                          </Grid>

                                        </Grid>

                                    </Grid>


                                  
                                </Grid>

                            </CardContent>
                        </Card>

                        <Card>

                        </Card>

                    </Container>




                </Container>

            </div>

        </>
    )
}