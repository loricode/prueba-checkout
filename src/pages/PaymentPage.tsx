import { useState } from 'react';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Tab, Tabs } from '@mui/material';

import FolderIcon from '@mui/icons-material/Folder'
import { usePaymentPage } from './usePaymentPage';
import { TabCheckout } from './tabsPayment/TabCheckout';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const PaymentPage = () => {

    const { state, value, handleChange } = usePaymentPage();

    return (
        <>
            <div>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Wallet Dashboard" {...a11yProps(0)} />
                        <Tab label="Checkout" {...a11yProps(1)} />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
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
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    <TabCheckout
                        total={state.total}
                        subtotal={state.subtotal}
                        products={
                            state.products
                        } />
                </CustomTabPanel>


            </div>

        </>
    )
}