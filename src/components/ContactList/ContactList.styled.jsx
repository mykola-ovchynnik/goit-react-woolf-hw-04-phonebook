import { styled } from 'styled-components';

export const List = styled.ul`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #217093;
  list-style: circle;
  padding-left: 30px;
`;

export const ContactItem = styled.li`
  color: inherit;
  font-size: 18px;
`;

export const DeleteButton = styled.button`
  margin-left: 10px;
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  transition: transforme 0.1s ease-in-out, background-color 0.2s ease-out;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #217093;
  }

  &:active {
    transform: scale(0.98);
  }
`;
