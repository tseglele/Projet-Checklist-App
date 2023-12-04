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
    transform:translateY(-3px);
    animation: 0.6s ease infinite;

  }
`;

const Checklist = () => {
  return (
    <>
      <CheckDiv>
        <h1>Checklist</h1>
        <p>Checklist description</p>
        <ul>
          <li>
            <input type="checkbox" id="item_one" />
            <label htmlFor="item_one">Item 1</label>
          </li>
          <li>
            <input type="checkbox" id="item_two" />
            <label htmlFor="item_two">Item 2</label>
          </li>
          <li>
            <input type="checkbox" id="item_three" />
            <label htmlFor="item_three">Item 3</label>
          </li>
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
