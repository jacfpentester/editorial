// import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// import { FC } from 'react';
// //import { ICliente } from '../../interfaces/clientes/IClientes';


// interface Props {
//     clientes: ICliente[]
// }
// export const ClientesList:FC<Props> = ({ clientes }) => {
//   return (
//     <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//             <TableRow>
//                 <TableCell>Nif</TableCell>
//                 <TableCell>Nombre</TableCell>
//                 <TableCell>Apellidos</TableCell>
//                 <TableCell>Ciudad</TableCell>
//                 <TableCell>Localidad</TableCell>
//             </TableRow>
//         </TableHead>

//         <TableBody>
//                 { 
//                     clientes.map((cliente: ICliente) => (
//                         <TableRow key= { cliente.nif } 
//                                   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                         >
//                             <TableCell component="th" scope="row">
//                                 { cliente.nif }
//                             </TableCell>
//                             <TableCell align="right">{cliente.nombre}</TableCell>
//                             <TableCell align="right">{cliente.apellidos}</TableCell>
//                             <TableCell align="right">{cliente.ciudad}</TableCell>
//                             <TableCell align="right">{cliente.localidad}</TableCell>
//                         </TableRow>
//                     )
//                 )}
                
//             </TableBody>
//         </Table>
//     </TableContainer>
//   )
// }

