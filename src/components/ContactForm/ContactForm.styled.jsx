import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 280px;
  background-color: #fff;
  margin: 0;
  margin-bottom: 20px;
  padding: 20px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  font-size: 1.2em;
  color: #353538;
  display: block;
`;

export const Input = styled.input`
  padding: 0.5em 0.5em;
  background-color: #f3fafd;
  border: solid 2px #4eb8dd;
  border-radius: 4px;
  box-sizing: border-box;
  width: calc(100% - 4px);
  height: 40px;
  color: #353538;
  font-weight: 600;
  font-family: inherit;
  transition: box-shadow 0.2s linear, border-color 0.25s ease-out;
  margin-top: 5px;
  margin-bottom: 20px;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #edf8fc;
    border-color: #4eb8dd;
  }
`;

export const Button = styled.button`
  margin: 0;
  padding: 0.5em;
  background-color: #4eb8dd;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: none;
  width: 100%;
  height: 50px;
  font-size: 1.2em;
  color: #fff;
  font-weight: 600;
  font-family: inherit;
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
