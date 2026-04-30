import {
    Box,
    Button,
    Card,
    CardContent,
    CardActions,
    Container,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField, Typography
} from '@mui/material';
import { HeaderComponent } from '../../../../components/header/HeaderComponent';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import SendIcon from '@mui/icons-material/Send';

const formatterCurrency = (value: number) => {
    const formatter = new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "USD",
        currencyDisplay: "narrowSymbol",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    const parts = formatter.formatToParts(value);

    const symbol = parts.find(p => p.type === "currency")?.value || "";
    const number = parts
        .filter(p => p.type !== "currency" && p.type !== "literal")
        .map(p => p.value)
        .join("");

    return `${symbol}${number}`;
}


export const TabWallet = () => {

    return (
        <Container>

            <HeaderComponent
                title={'Wallet Dashboard'}
                subtitle={'Gestiona tus finanzas y transacciones'}
            />

            <Grid container sx={{ display: 'flex', mt: 2, flexDirection: 'row', }}>

                <Grid size={{ md: 9, lg: 9 }} sx={{ px: 1, display: 'flex', flexDirection: 'column' }}>

                    <Card sx={{ background: '#070214', height: 'max-content' }}>
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
                                {new Intl.NumberFormat("es-ES", {
                                    currency: "USD",
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,

                                }).format(
                                    15431.65,
                                )}
                            </Typography>


                        </CardContent>

                    </Card>

                    <Card>
                        <List sx={{ width: '100%' }} dense={true}>
                            {[{ id: '1', description: "transf 1", value: 123.34,  },

                                { id: '2', description: "transf 2", value: 33423.34,  }
                            ].map((product) =>
                                <ListItem
                                    key={product.id}
                                    secondaryAction={
                                        <p aria-label="value" >
                                            {formatterCurrency(product.value)}
                                        </p>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '8%', p: 1, background: 'rgba(255, 255, 255, .15)' }}>
                                            <ArrowOutwardIcon fontSize='small' />
                                        </Box>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={product?.description}
                                        secondary={"Cantidad " + product.id}
                                    />
                                </ListItem>,
                            )}
                        </List>
                    </Card>

                </Grid>

                <Grid size={{ md: 3, lg: 3 }}>
                    <Card>

                        <CardContent>
                            <Typography sx={{ color: '#000', textAlign: 'left' }} variant="subtitle1" component="p">
                                {"Nueva Transferencia"}
                            </Typography>


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
                                        Monto
                                    </Typography>

                                    <TextField
                                        type='number'
                                        fullWidth
                                        sx={{ background: '#eae8e8' }}
                                        variant="outlined" />

                                </Grid>




                                <Grid sx={{ width: '100%' }}>

                                    <Typography sx={{ textAlign: 'start' }}>
                                        Nota (Opcional)
                                    </Typography>

                                    <TextField
                                        fullWidth
                                        sx={{ background: '#eae8e8' }}
                                        variant="outlined" />
                                </Grid>

                            </Grid>

                        </CardContent>

                        <CardActions sx={{ px: 2, mb: 1 }}>
                            <Button sx={{ textTransform: 'capitalize', background: "#000", color: '#FFF' }} fullWidth variant="outlined" startIcon={<SendIcon />}>
                                Enviar Transferencia
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>



            </Grid>

        </Container>
    )

}