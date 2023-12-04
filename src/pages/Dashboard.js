import styled from "styled-components";
import Aside from "../components/Aside";
import Checklist from "../components/Checklist";
const TotalDiv= styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:row;
margin:0;
background-color:bisque;
`
const CheckContainerDiv =styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
margin-left: 300px;
gap:2rem;
`
const PagenameH1 =styled.h1` 
font-size:3rem;
text-align:center;
font-family:'Roboto',sans-serif;
color:#EF476F;
margin-left:200px;
`
const DashContinerDiv =styled.div`
display:flex;
flex-direction:column;
`
const CreateButton =styled.button`
margin-left:300px;
 width:200px;
 display:block;
 padding:20px;
 border:none;
 border-radius:20px;
 background-color:#FFD166;
`
export default function Dashboard  ()  {
    return ( 
    <TotalDiv>
      
    <Aside></Aside>
    <DashContinerDiv>
    <PagenameH1>Dashboard </PagenameH1>

    <CreateButton>Create Checklist</CreateButton>
    <CheckContainerDiv>
    <Checklist></Checklist>
    <Checklist></Checklist>
     <Checklist></Checklist>
      <Checklist></Checklist> 
      <Checklist></Checklist>
  
    </CheckContainerDiv>
   
    </DashContinerDiv>
    </TotalDiv>
    );
}
