import styled from 'styled-components';

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  background-color: lightpink;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  width: 700px;

  align-items: flex-end;
  gap: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -moz-box-shadow: rgba(50, 50, 93, 0.25) -10px -5px 0px -10px,
    rgba(0, 0, 0, 0.3) 2px 4px 5px -2px;
  -webkit-box-shadow: rgba(50, 50, 93, 0.25) -10px -5px 0px -10px,
    rgba(0, 0, 0, 0.3) 2px 4px 5px -2px;
  box-shadow: rgba(50, 50, 93, 0.25) -10px -5px 0px -10px,
    rgba(0, 0, 0, 0.3) 2px 4px 5px -2px;
`;

const HeaderApp = styled.h1`
  font-size: 50px;
  padding-bottom: 50px;
`;

const AddContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const HeaderContacts = styled.h2`
  margin-bottom: 20px;
`;
export {
  Container,
  HeaderApp,
  AddContactWrapper,
  ContactsWrapper,
  HeaderContacts,
};
