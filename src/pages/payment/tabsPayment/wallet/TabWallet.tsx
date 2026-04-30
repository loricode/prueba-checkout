import { Box, Card, CardContent, Container, Grid, TextField, Typography } from '@mui/material';
import { HeaderComponent } from '../../../../components/header/HeaderComponent';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SouthWestIcon from '@mui/icons-material/SouthWest';

export const TabWallet = () => {

    return (
        <Container>

            <HeaderComponent
                title={'Wallet Dashboard'}
                subtitle={'Gestiona tus finanzas y transacciones'}
            />

            <Grid sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>

                <Card sx={{ background: '#070214', minWidth: '70%' }}>
                    <CardContent>

                        <Grid sx={{ display: 'flex', mb: 2, gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>

                            <Grid>
                                Balance total
                            </Grid>

                            <Grid sx={{ display: 'flex', gap: 1 }}>

                                <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '8%', p: 1, background: 'rgba(255, 255, 255, .15)' }}>
                                    <ArrowOutwardIcon fontSize='small' />
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '8%', p: 1, background: 'rgba(255, 255, 255, .15)' }}>
                                    <SouthWestIcon fontSize='small' />
                                </Box>

                            </Grid>


                        </Grid>

                        <Typography sx={{ color: '#FFF', textAlign: 'start' }}>
                            USD
                        </Typography>


                        <Typography sx={{ color: '#FFF', textAlign: 'start' }}>
                            {new Intl.NumberFormat("es-ES", {  currency: "USD", 
 minimumFractionDigits: 2,
  maximumFractionDigits: 2,

                            }).format(
                                15431.65,
                            )}
                        </Typography>


                    </CardContent>

                </Card>

                <Card>
                    <CardContent>

 <Grid container sx={{ dispay: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

                        <Grid sx={{ width: '100%' }}>

                            <Typography sx={{ textAlign: 'start' }}>
                                Destinatario
                            </Typography>

                            <TextField
                                fullWidth
                                sx={{ background: '#eae8e8' }}
                                variant="outlined" />
                        </Grid>

                        <Grid sx={{ width: '100%' }}>


                            <Typography sx={{ textAlign: 'start' }}>
                                Nombre del titular
                            </Typography>

                            <TextField
                                fullWidth
                                sx={{ background: '#eae8e8' }}
                                variant="outlined" />

                        </Grid>


                        <Grid sx={{ display: 'flex', gap: '4px' }}>

                            <Grid>

                                <Typography sx={{ textAlign: 'start' }}>
                                    vencimiento
                                </Typography>

                                <TextField
                                    fullWidth
                                    sx={{ background: '#eae8e8' }}
                                    label="Vencimiento" variant="outlined" />
                            </Grid>

                            <Grid>

                                <Typography sx={{ textAlign: 'start' }}>
                                    CCV
                                </Typography>

                                <TextField
                                    fullWidth
                                    sx={{ background: '#eae8e8' }}
                                    label="CCV" variant="outlined" />
                            </Grid>

                        </Grid>



                    </Grid>

                    </CardContent>
                </Card>

            </Grid>

        </Container>
    )

}