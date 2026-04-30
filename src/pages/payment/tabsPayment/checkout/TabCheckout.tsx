import {
    Avatar,
    Button,
    Box,
    Card,
    CardContent,
    CardActions,
    Container,
    Divider,
    Grid,
    InputAdornment,
    List,
    ListItem, ListItemAvatar, ListItemText, TextField, Typography
} from '@mui/material';

import HttpsIcon from '@mui/icons-material/Https';
import AddCardIcon from '@mui/icons-material/AddCard';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FolderIcon from '@mui/icons-material/Folder';
import { HeaderComponent } from '../../../../components/header/HeaderComponent';
import { CardHeaderComponent } from '../../../../components/header/CardHeaderComponent';

import { useCheckout } from './useCheckout';


export const TabCheckout = () => {

    const { state } = useCheckout();

    return (<Container>

        <HeaderComponent
            title={'Checkout'}
            subtitle={'Completa tu compra de forma segura'}
        />

        <Grid sx={{ display: 'flex', flexDirection: 'row', gap: '10px', mt: 2, }}>

            <Card sx={{ flexGrow: 1 }}>
                <CardContent>

                    <CardHeaderComponent
                        icon={<AddCardIcon />}
                        title={'Informaciòn de pago'}
                        subtitle={'Ingresa los datos de tu tarjeta'}
                    />

                    <Grid container sx={{ dispay: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

                        <Grid sx={{ width: '100%' }}>

                            <Typography sx={{ textAlign: 'start' }}>
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
                                    Vencimiento
                                </Typography>

                                <TextField
                                    fullWidth
                                    sx={{ background: '#eae8e8' }}
                                    variant="outlined" />
                            </Grid>

                            <Grid>

                                <Typography sx={{ textAlign: 'start' }}>
                                    CCV
                                </Typography>

                                <TextField
                                    fullWidth
                                    sx={{ background: '#eae8e8' }}
                                    variant="outlined" />
                            </Grid>

                        </Grid>


                        <Grid sx={{ marginTop: '5px', width: '100%', background: '#eae8e8', borderRadius: '2%', padding: '4px' }}>

                            <Grid sx={{ px: 1, mt: 1, width: '100%', display: 'flex', justifyContent: 'space-between' }}>

                                <Grid>
                                    subtotal
                                </Grid>

                                <Grid>
                                    {state.subtotal.toFixed(2)}
                                </Grid>

                            </Grid>

                            <Grid sx={{ px: 1, mb: 1, width: '100%', display: 'flex', justifyContent: 'space-between' }}>

                                <Grid>
                                    Iva(16%)
                                </Grid>

                                <Grid>
                                    {(state.subtotal * 0.16).toFixed(2)}
                                </Grid>

                            </Grid>

                            <Divider />

                            <Grid sx={{ p: 1, width: '100%', display: 'flex', justifyContent: 'space-between' }}>

                                <Grid>
                                    Total a pagar
                                </Grid>

                                <Grid>
                                    {state.total.toFixed(2)}
                                </Grid>

                            </Grid>

                        </Grid>

                    </Grid>

                </CardContent>

                <CardActions sx={{ px: 2 }}>
                    <Button sx={{ textTransform:'capitalize', background: "#000", color: '#FFF' }} fullWidth variant="outlined" startIcon={<HttpsIcon />}>
                        Pagar
                    </Button>
                </CardActions>

                <Box sx={{ display: 'flex', color: '#a9a9a9', mb: 2, gap: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <HttpsIcon sx={{ color: '#a9a9a9' }} />
                    Pago seguro encriptado
                </Box>

            </Card>

            <Card sx={{ minWidth: '50%' }}>
                <CardContent>

                     <CardHeaderComponent
                        icon={<AddShoppingCartIcon />}
                        title={'Resumen del pedido'}
                        subtitle={ state.products.length > 1 ? state.products.length + ' productos' : '0 producto'}
                    />

                    <List sx={{ width: '100%' }} dense={true}>
                        {state.products.map((product) =>
                            <ListItem
                                key={product.id}
                                secondaryAction={
                                    <p aria-label="price" >
                                        {product.price}
                                    </p>
                                }
                            >
                                <ListItemAvatar>
                                    <img width={40} src={product.image
                                    } alt={product.id}>
                                    </img>
                                    
                                </ListItemAvatar>
                                <ListItemText
                                    primary={product?.title}
                                    secondary={"Cantidad " + product.id}
                                />
                            </ListItem>,
                        )}
                    </List>

                    <Divider />

                    <Grid sx={{ marginTop: '5px', width: '100%', borderRadius: '2%', padding: '4px' }}>

                        <Grid sx={{ px: 1, mt: 1, width: '100%', display: 'flex', justifyContent: 'space-between' }}>

                            <Grid>
                                subtotal
                            </Grid>

                            <Grid>
                                {state.subtotal.toFixed(2)}
                            </Grid>

                        </Grid>

                        <Grid sx={{ px: 1, mb: 1, width: '100%', display: 'flex', justifyContent: 'space-between' }}>

                            <Grid>
                                IVA (16%)
                            </Grid>

                            <Grid>
                                {(state.subtotal * 0.16).toFixed(2)}
                            </Grid>

                        </Grid>

                        <Divider />

                        <Grid sx={{ p: 1, width: '100%', display: 'flex', justifyContent: 'space-between' }}>

                            <Grid>
                                Total
                            </Grid>

                            <Grid>
                                {state.total.toFixed(2)}
                            </Grid>

                        </Grid>

                    </Grid>

                </CardContent>
            </Card>

        </Grid>


    </Container>)
}