import styled from "styled-components";
import Aside from "../components/Aside";

const FormDiv = styled.form`
width:500px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#FFD166;
border:none;
border-radius:35px;
padding:50px;
input{
    color: #333;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  padding: 8px;
  width:300px;
}

button{
    margin: 10px 0px 30px 100px;
    display:block;
    border:none;
    padding:8px;
    border-radius:10px;
}
button:hover{
background-color:#EF476F;
color:white;
}
.saveButton{
    display:flex;
    justify-content:center;
    padding:15px;
    width:100px;
    background-color:#EF476F;
}
`
const TotalDiv= styled.div`
padding:0;
margin:0;
width:100%;
height:100vh;
display:flex;
flex-direction:row;
justify-content:center;
background-color:bisque;
//Degradé des couleurs
 /*background: -webkit-linear-gradient(140deg, #ffd166,#ef476f);/* Chrome 10-25, Safari 5.1-6 *//*background: linear-gradient(140deg, #ffd166,#ef476f);/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7*/                                             ;
`
const FormContainerDiv =styled.div`
display:flex;
flex-direction:column;
h1{
position:relative;
font-size:3rem;
text-align:center;
font-family:'Roboto',sans-serif;
color:#EF476F;
}
`

export default function ModifyCheck ()  {
    return ( 
    <TotalDiv>
        
    <Aside></Aside>
    <FormContainerDiv>
    <h1> Modify list</h1>
    <FormDiv>
        <input  type="text"></input>
        <button>Add Title</button>

        <input  type="text"></input>
        <button>Add Description</button>

        <input  type="text"></input>
        <button>Add Task</button>

    <button className="saveButton">Save</button>
    </FormDiv>
    </FormContainerDiv>
    </TotalDiv> );
}
 