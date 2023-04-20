import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";
import { FC } from "react";
import { ILibro } from "../../interfaces/libros";
import NextLink  from 'next/link';

interface Props {
    libro: ILibro;
}
export const LibroCard:FC<Props> = ({ libro }) => {
  return (
    <Grid item  xs= {6} sm={3}>
        <Card sx={{ width: '90%' }}>
          <Link href={`/libros/${libro.isbn}`}  passHref component={NextLink} prefetch={false}>
            <CardActionArea>
                <Box display='flex' alignItems='flex-start' flexDirection='row'>
                    <CardMedia
                        component='img' className='fadeIn'
                        image={ libro.thumbnailUrl } alt={ libro.title } 
                        sx={{ width:'120px' }}
                    />
                    <Box sx={{marginLeft: 3}}>
                        <Typography fontWeight={500}>Precio</Typography> 
                        <Typography fontWeight={700}>{libro.precio} €</Typography> 
                    </Box>
                </Box>
            </CardActionArea>
          </Link>
        </Card>
        <Box sx= {{ marginTop: 1}} className='fadeIn'>
            <Typography fontWeight={700}>{libro.title}</Typography>
            <Typography fontWeight={500}>{libro.precio}</Typography>
        </Box>
    </Grid>
  )
}
