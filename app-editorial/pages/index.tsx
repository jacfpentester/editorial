import { Container, Grid } from "@mui/material";
import { NextPage } from "next"
import { PublicLayouts } from "../layouts";

 
//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {
  

  return (
   
      <PublicLayouts>
        <Container maxWidth="lg">
          <Grid
            container direction="row" justifyContent="center" 
            alignItems="strech" spacing={4}
          >
            <Grid item xs={12}>
              <h1>Public Libreria Picasso </h1>
              <p>No somos solo una librería, somos un lugar de encuentro donde el trato con los lectores y la actividad cultural en torno al libro es fundamental desde 1977.</p>
            </Grid>
          </Grid>
        </Container>
     </PublicLayouts>

  )
}

export default indexPage