import styled from "styled-components"
import { catagories } from "../Data"
import { mobile } from "../Responsive"
import CatagoryItem from "./CatagoryItem"

const Container=styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({padding:"0px",flexDirection:"column" })}
`
const Catagories = () => {
  return (
    <Container>
        {catagories.map((item)=>(
            <CatagoryItem item={item} key={item.id} />
        ))}

    </Container>
  )
}

export default Catagories