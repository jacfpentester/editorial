import { Grid } from "@mui/material";
import { FC } from "react"
import { LibroCard } from ".";
import { ILibro } from '../../interfaces/libros/ILibro';

interface Props {
    libros: ILibro[]
}
export const LibrosCardList:FC<Props> = ({ libros }) => {
  return (
    <Grid container spacing={4}>
      {
        libros.map( (libro ) => (
          <LibroCard 
            libro = { libro }
            key = { libro.isbn }
          />
        ))
      }

    </Grid>
  )
}
