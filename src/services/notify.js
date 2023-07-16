import { Notify, Confirm } from 'notiflix';

Notify.init({
  width: 'fit-content',
  padding: '20px',
  position: 'center-top',
  distance: '200px',
  borderRadius: '15px',
  fontSize: '25px',
  textColor: 'black',
  timeout: 1500,
  useIcon: false,
  closeButton: false,
  warning: {
    borderRadius: '15px',
    heigth: '200px',
    closeButton: false,
    background: '#f26b94',
    fontSize: '40px',
    titleFontSize: '40px',
    messageFontSize: '40px',
    textColor: 'white',
  },
  info: {
    background: 'transparent',
    textColor: 'black',
  },
});

Confirm.init({
  background: '#f26b94',
  heigth: '100px',
  okButtonBackground: '#f26b94',
  titleColor: '#f26b94',
});

export { Notify, Confirm };
