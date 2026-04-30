import { Card, CardContent, Container, Grid, Typography} from '@mui/material';

export const TabWallet = () => {

    return (
        <Container>

                        <Typography variant="h3" component="h3">
                            Wallet Dashboard
                        </Typography>

                        <Typography variant="h5" component="h5">
                            Gestiona tus finanzas y transacciones
                        </Typography>

                        <Container>
                            <Grid sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>

                                <Card>
                                    <CardContent>

                                        <Grid sx={{ display: 'flex', mb: 2, gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>

                                            <Grid>
                                                Balance total
                                            </Grid>

                                            <Grid sx={{ display: 'flex', gap: 2 }}>



                                            </Grid>


                                        </Grid>

                                        <Grid container sx={{ dispay: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

                                            <Grid sx={{ marginTop: '5px', width: '100%', background: '#eae8e8', borderRadius: '2%', padding: '4px' }}>

                                            </Grid>

                                        </Grid>

                                    </CardContent>

                                </Card>

                                <Card>
                                    <CardContent>

                                    </CardContent>
                                </Card>

                            </Grid>
                        </Container>

                    </Container>
    )

}