import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
const AsideDiv = styled.div`
position: fixed;
left: 0;
display:flex;
flex-direction:column;
background-color:rgba(38, 84, 124, 1);
width:200px;
height:100vh;
border:none;
border-radius:  0  35px 35px 0 ;
input{
  color: #333;
  background-color: #f4f4f4;
  border: none;
  border-radius: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  padding: 8px;
  width:60%;
  margin:10%;
}

@media screen and (max-width: 1030px) {
    width: 100%; /* Prend toute la largeur */
    height:100px;
    position:fixed;
    bottom:0;
    border-radius: 0;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;


}
`
const LogoDiv = styled.h1`
margin-left:15px;
width:150px;
height:50px;
background-color:rgba(38, 84, 124, 1);
color:white;
`

const CreateButton =styled.button`
 margin:8px;
 width:150px;
 display:block;
 padding:20px;
 border:none;
 border-radius:20px;
 background-color:#FFD166;
`
const Aside = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
   
    navigate(path);
  };
    return (<>
    <AsideDiv>
        <LogoDiv onClick={() => handleNavigation('/')}>Pre-flight Checklist</LogoDiv>
        <CreateButton onClick={() => handleNavigation('/form')}>Create Checklist</CreateButton>
    </AsideDiv>
         </> );
}

 
export default Aside;