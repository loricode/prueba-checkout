import { useState } from 'react';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { Avatar, Button, CardActionArea, Divider, InputAdornment, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import AddCardIcon from '@mui/icons-material/AddCard';
import FolderIcon from '@mui/icons-material/Folder'
import { usePaymentPage } from './usePaymentPage';
import HttpsIcon from '@mui/icons-material/Https';

export const PaymentPage = () => {

    const [dense, setDense] = useState(false);
    const [secondary, setSecondary] = useState(false);
    const { state } = usePaymentPage();

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
                         <Grid sx={{display:'flex', flexDirection:'row', gap:'10px'}}>
                       
                            <Card>
                                <CardContent>

                                    <Grid sx={{display:'flex', mb:2, gap:2, alignItems:'center'}}>
                                        <Grid>
                                            <AddCardIcon/>
                                        </Grid>

                                        <Grid>

                                            <Typography sx={{textAlign:'left'}} variant="subtitle1" component="p">
                                                Informaciòn de pago
                                            </Typography>

                                            <Typography sx={{textAlign:'left'}} variant="subtitle2" component="p">
                                                Ingresa los datos de tu tarjeta
                                            </Typography>

                                        </Grid>


                                    </Grid>

                                    <Grid container sx={{ dispay: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

                                        <Grid sx={{width:'100%'}}>

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
                                                label="Número de tarjeta" variant="outlined" />
                                        </Grid>

                                        <Grid sx={{width:'100%'}}>


                                            <Typography sx={{ textAlign: 'start' }}>
                                                Nombre del titular
                                            </Typography>

                                            <TextField
                                                fullWidth
                                                sx={{ background: '#eae8e8' }}
                                                label="Nombre del titular" variant="outlined" />

                                        </Grid>


                                        <Grid sx={{ display:'flex', gap: '4px' }}>

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


                                        <Grid sx={{ marginTop:'5px', width: '100%', background: '#eae8e8', borderRadius: '2%', padding: '4px' }}>

                                            <Grid sx={{ px:1, mt:1, width: '100%', display: 'flex', justifyContent: 'space-between' }}>

                                                <Grid>
                                                    subtotal
                                                </Grid>

                                                <Grid>
                                                    213423
                                                </Grid>

                                            </Grid>

                                            <Grid sx={{ px:1, mb:1, width: '100%', display: 'flex', justifyContent: 'space-between' }}>

                                                <Grid>
                                                    Iva(16%)
                                                </Grid>

                                                <Grid>
                                                    213423
                                                </Grid>

                                            </Grid>

                                            <Divider />

                                            <Grid sx={{ p:1, width: '100%', display: 'flex', justifyContent: 'space-between' }}>

                                                <Grid>
                                                    Total a pagar
                                                </Grid>

                                                <Grid>
                                                    {"aqui total"}
                                                </Grid>

                                            </Grid>

                                        </Grid>

                                    </Grid>



                                </CardContent>


                                <CardActionArea sx={{px:2, mb:2}}>
                                    <Button sx={{background:"#000", color:'#FFF'}} fullWidth variant="outlined" startIcon={<HttpsIcon />}>
                                       Pagar
                                    </Button>
                                </CardActionArea>

                            </Card>

                            <Card>
                                <CardContent>

                                    <List dense={dense}>
                                        {state.map((product) =>
                                            <ListItem
                                                key={product.id}
                                                secondaryAction={
                                                    <p aria-label="price" >
                                                        {product.price}
                                                    </p>
                                                }
                                            >
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <FolderIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={product?.title}
                                                    secondary={secondary ? 'Secondary text' : null}
                                                />
                                            </ListItem>,
                                        )}
                                    </List>

                                </CardContent>
                            </Card>

                        </Grid>
                    </Container>

                </Container>

            </div>

        </>
    )
}