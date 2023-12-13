import styled from "styled-components";
import Aside from "../components/Aside";
import {postDataToApi} from "./Api";
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';

const TotalDiv = styled.div`
box-sizing:border-box;
    padding: 0;

    margin: 0;

    width: 100%;

    height: 100%;

    display: flex;

    flex-direction: row;

    justify-content: center;

    background-color: bisque;
`;

const FormDiv = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:  #EF476F;
    border: none;
    border-radius: 35px;
    padding: 50px;

    input {
        margin:20px;
        color: #333;
        background-color: #f4f4f4;
        border: 1px solid #ccc; 
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        font-size: 16px;
        padding: 8px;
        width: 300px;
    }

    button {
        margin: 10px 0px 30px 100px;

        display: block;

        border: 2px solid;

        padding: 8px;

        border-radius: 10px;
    }

    button:hover {
        visibility:40%;
    }

    .saveButton {
        display: flex;

        justify-content: center;

        padding: 15px;

        width: 100px;

        background-color: #FFD166;
    }
`;

const FormContainerDiv = styled.div`
    display: flex;

    flex-direction: column;

    h1 {
        position: relative;

        font-size: 3rem;

        text-align: center;

        font-family: "Roboto", sans-serif;

        color: #EF476F;
    }
`;
const ButtonsDiv  = styled.div`
width:200px;

 display: flex;

flex-direction: row;

        background-color: #EF476F;
`;
export default function  Form() {
    const [title, setTitle] = useState(''); // État pour stocker le titre du formulaire
    const [description, setDescription] = useState(''); // État pour stocker la description du formulaire
    const [todos, setTodos] = useState([]);// État pour stocker les todo du formulaire
   
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleTodoChange = (index, event) => {
        const newTodos = [...todos];
        newTodos[index] = { ...newTodos[index], [event.target.name]: event.target.value };
        setTodos(newTodos);
    };
    const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
      };

    const handleAddTodo = () => {
        setTodos([...todos, { title: '', description: '' }]);
    };
 
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        
        const formData = {
            title: title,
            description: description,
            todo: todos,
        };

   
    try {
        const response = await postDataToApi(formData);
        console.log('Response from API:', response);
      
    } catch (error) {
        console.error('Error sending data to API:', error);
    }
};
const navigate = useNavigate();

const handleNavigation = (path) => {
 
  navigate(path);
};
    return (
        <TotalDiv>
            <Aside></Aside>

            <FormContainerDiv>
                <h1> Create a new list</h1>
                <FormDiv onSubmit={handleFormSubmit}>
                    <input type="text" placeholder="Add a Title"  value={title}
                        onChange={handleTitleChange} ></input>


                    <input type="text" placeholder="Add a Description"  value={description}
                        onChange={handleDescriptionChange} ></input>
            {todos.map((todo, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder="Add a Todo Title"
                        value={todo.title}
                        name="title"
                        onChange={(event) => handleTodoChange(index, event)}
                    />
                <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                </div>
            ))}

            <button type="button" onClick={handleAddTodo}>
                Add Todo
            </button>
        
                    
                <ButtonsDiv>
                    <button type="submit" className="saveButton">Save</button>
                    <button  onClick={() => handleNavigation('/')} className="saveButton">Back to Dashboard</button></ButtonsDiv>
                </FormDiv>
            </FormContainerDiv>
        </TotalDiv>
    );
}
