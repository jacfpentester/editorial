import { Box, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';
import { ILibro } from '../../interfaces/libros/ILibro';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import AddBoxIcon from '@mui/icons-material/AddBox';
interface Props {
    libros: ILibro[]
}
export const LibrosList:FC<Props> = ({libros}) => {
  
  const colums: GridColDef[] = [
        { field: 'isbn', headerName: 'ISBN', width: 130},
        { field: 'title', headerName:'Titulo', width: 300 },
        { field: 'pageCount', headerName: 'Paginas', width: 100 },
        { field: 'precio', headerName: 'Precio', width: 100 },
        { field: 'status', headerName: 'Estado', width: 100 },
        { field: 'opciones',
          headerName: 'Acciones',
          description: 'Muestra información si la orden está pagada o no',
          width: 200,
          renderCell: () => (
              <>
                <ModeEditOutlineTwoToneIcon sx={{ color: 'red'}} />
                <ClearIcon  sx={{ color: 'blue'}} />
              </>
            ) 
        }
  ];
  const rows = libros;
  return (
            <Grid container sx={{ width: '70%', display: 'flex',justifyContent: 'flex-end'}}>
              <Box >
                <AddBoxIcon sx={{  color: 'green', fontSize:40 }} />
              </Box>
               
               <Grid item xs={12} 
                  sx={{ 
                    height: 350, width: '80%',
                    boxShadow: 2,
                    border: 2,
                    borderColor: 'primary.light',
                    '& .MuiDataGrid-cell:hover': {
                      color: 'primary.main',
                    },
                  }}>
                 <DataGrid 
                    columns={colums} rows={rows}
                    pageSize= {10}
                    // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination
                    getRowId = {( row: ILibro ) => row.isbn}
                  />
               </Grid>
            </Grid>
  )
}
