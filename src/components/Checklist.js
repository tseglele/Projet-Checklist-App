import styled from "styled-components";
const CheckDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(239, 71, 111, 1);
  width: 250px;
  border-radius: 8px;
  box-shadow: 0 0 10px black;
  margin: 30px;

  h1 {
    color: white;
  }

  p {
    color: white; 
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

 
  }
  &:hover {
 
    transform:scale(1.2);
    animation: 0.6s ease infinite;

  }
`;

const CheckButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px; 

  button {
    margin-left: 15px;
    padding: 8px;
    border: none;
    border-radius: 10px;
    background-color: #ffd166;
    cursor: pointer; 

  }

  button:hover {
    background-color: #26547c;
    color: white;
    transform:translateY(-5px);
    animation: 0.6s ease infinite;

  }
`;

const Checklist = ({dataForChecklist}) => {
  const { title, description, todos } = dataForChecklist;
  //updateChecklistItem 
  //const handleTodoChange = (index, event) => {
   // const updatedTodo = event.target.value;
  //  updateChecklistItem(index, updatedTodo);
 // };
  return (
    <>
      <CheckDiv>
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <input type="checkbox" id={`item_${index}`} />
              <label htmlFor={`item_${index}`}>{todo.title}</label>
            </li>
          ))}
        </ul>
        <CheckButton>
          <button>Edit</button>
          <button>Delete</button>
        </CheckButton>
      </CheckDiv>
    </>
  );
};

export default Checklist;
