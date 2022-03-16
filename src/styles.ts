import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: #3179ba;
  height: 100%;
  padding: 20px;
  flex: 1;
`;

export const ColumnContainer = styled.div`
  background-color: #ebecf0;
  flex-direction: column;
  min-height: 40px;
  width: 300px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
`;

export const ColumnTitle = styled.div`
  font-weight: bold;
  padding: 6px 16px 12px;
`;

export const CardContainer = styled.div`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;

type AddItemButtonProps = {
  dark?: boolean;
};

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  width: 100%;
  &:hover {
    background-color: #ffffff52;
  }
  transition: background 85ms ease-in;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
`;
