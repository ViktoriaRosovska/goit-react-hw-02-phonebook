import styled from 'styled-components';

const ContactsListContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 340px;
  height: 280px;
  overflow: hidden;
`;

const ContactListRender = styled.div`
  box-sizing: border-box;
  width: 330px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 10px;
  padding-bottom: 0px;
  height: 195px;
  overflow: auto;
  border-radius: 10px;
  scrollbar-color: pink;

  &::-moz-scrollbar {
    background-color: transparent;
    width: 10px;
  }

  &::-moz-scrollbar-thumb {
    background-color: pink;
    border-radius: 10px;
  }
  &::-webkit-scrollbar {
    background-color: transparent;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: pink;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
  }
  &::-webkit-scrollbar {
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  width: fit-content;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SortOptions = styled.div`
  -webkit-box-shadow: rgba(50, 50, 93, 0.25) -10px -5px 0px -10px,
    rgba(0, 0, 0, 0.3) 2px 4px 5px -2px;
  -moz-box-shadow: rgba(50, 50, 93, 0.25) -10px -5px 0px -10px,
    rgba(0, 0, 0, 0.3) 2px 4px 5px -2px;
  box-shadow: rgba(50, 50, 93, 0.25) -10px -5px 0px -10px,
    rgba(0, 0, 0, 0.3) 2px 4px 5px -2px;

  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
`;

const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

const Span = styled.span`
  margin-right: 10px;
  width: 130px;
`;
export {
  ContactsListContainer,
  ContactListRender,
  Button,
  SortOptions,
  List,
  Span,
};
