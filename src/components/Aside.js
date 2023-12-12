import styled from "styled-components";
const AsideDiv = styled.div`
position: fixed;
top: 0;
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
`
const LogoDiv = styled.img`
 margin-left:58px;
width:50px;
height:50px;
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
    return (<>
    <AsideDiv>
        <LogoDiv src="/logo192.png"></LogoDiv>
        <input type="text" placeholder="Search"/>
        <CreateButton>Create Checklist</CreateButton>
    </AsideDiv>
         </> );
}

 
export default Aside;