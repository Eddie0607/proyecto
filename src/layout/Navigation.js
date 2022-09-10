import styled from "styled-components"
import { Link } from "react-router-dom"
const Navigation = props => {
  return(
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/categoria/ilustracion-digital">UX Design</Link>
    </Nav>
  )
}
const Nav = styled.nav`
  display: flex ;
  align-items:center ;
  gap: 10px ;
  a{
    color: inherit;
  }
`
export default Navigation;