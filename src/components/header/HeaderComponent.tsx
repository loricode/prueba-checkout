import { Typography } from '@mui/material';

type HeaderProps = {
    title: string;
    subtitle: string;
}


export const HeaderComponent = ({ title, subtitle }:HeaderProps) => {

    return (
        <>
            <Typography variant="subtitle1" component="p" sx={{ fontWeight: 600, textAlign: 'left', fontSize: 20 }}>
                {title}
            </Typography>

            <Typography variant="body2" component="p" sx={{ textAlign: 'left' }}>
                {subtitle}
            </Typography>
        </>
    )

}