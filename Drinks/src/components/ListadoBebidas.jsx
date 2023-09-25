
import useBebidas from '../hooks/useBebidas'
import Bebida from './Bebida'
import { Row } from "react-bootstrap";


const ListadoBebidas = () => {
  
    const { bebidas } = useBebidas()

  return (
    <Row>
        {bebidas.map(bebida => (
            <Bebida 
            key={bebida.idDrink}
            bebida={bebida}
             />

        ))}
      
    </Row>
  )
}

export default ListadoBebidas
