import styled from "styled-components";
import Aside from "../components/Aside";
import Checklist from "../components/Checklist";
import {fetchDataFromApi} from "./Api";
import { useEffect,useState} from 'react';

const TotalDiv= styled.div`
width:100%;
height:100vh;
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
const DashContainerDiv =styled.div`
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
  const [checklists, setChecklists] = useState([]);
  useEffect(() => {
    fetchDataFromApi()
      .then((data) => {
        setChecklists(data);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made, but the server responded with a status code
          console.error("Server responded with an error:", error.response.data);
          // Handle specific error messages or display them to the user
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received:", error.request);
        } else {
          // Something happened in setting up the request that triggered an error
          console.error("Error during request setup:", error.message);
        }
        // Handle the error gracefully (e.g., display an error message to the user)
      });
  }, []);

    return ( 
    <TotalDiv >
      
    <Aside></Aside>
    <DashContainerDiv>
   
    <PagenameH1></PagenameH1>

    <CreateButton>Create Checklist</CreateButton>
    <CheckContainerDiv>
    {checklists && checklists.length > 0 ? (
  checklists.map((checklist, index) => (
    <Checklist key={index} data={checklist} />
  ))
) : (
  <p>No checklists available</p>
)}

        </CheckContainerDiv>
   
    </DashContainerDiv>
    </TotalDiv>
    );
}
