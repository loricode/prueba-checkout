import { Card, CardContent, Container, Grid } from '@mui/material';
import { HeaderComponent } from '../../../../components/header/HeaderComponent';

export const TabWallet = () => {

    return (
        <Container>

            <HeaderComponent
                title={'Wallet Dashboard'}
                subtitle={'Gestiona tus finanzas y transacciones'}
            />

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
    )

}