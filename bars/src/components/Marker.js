import styled from "styled-components"
import { useState } from "react"


const MarkerContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
`
const Marker =()=>{
    const [onHoover, setonHoover] = useState(false)

    const MarkerToogleOn = () =>{
        setonHoover(true)

    }
    const MarkerToogleOff = () =>{
        setonHoover(false)
    }

return (
    <MarkerContainer>
        <img onMouseLeave ={MarkerToogleOff} onMouseEnter = {MarkerToogleOn}
        src='https://st.depositphotos.com/1041273/3871/v/950/depositphotos_38715403-stock-illustration-beer-icon.jpg' height = '40 px' width = '40px'>
        </img>
        
    </MarkerContainer>
  )

}
export default Marker