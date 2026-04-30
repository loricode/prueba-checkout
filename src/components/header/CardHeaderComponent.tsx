
import type { ReactNode } from 'react';
import { Grid, Typography } from '@mui/material';

type CardHeaderProps = {
  icon: ReactNode;
  title:string;
  subtitle:string;
}

export const CardHeaderComponent = ({ icon, title, subtitle } : CardHeaderProps) => {

    return (
        <>
            <Grid sx={{ display: 'flex', mb: 2, gap: 2, alignItems: 'center' }}>
                <Grid>
                    {icon}
                </Grid>

                <Grid>

                    <Typography sx={{ textAlign: 'left' }} variant="subtitle1" component="p">
                       {title}
                    </Typography>

                    <Typography sx={{ textAlign: 'left' }} variant="subtitle2" component="p">
                        {subtitle}
                    </Typography>

                </Grid>

            </Grid>
        </>
    )
}