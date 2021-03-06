import {showMessage as showToast} from 'react-native-flash-message';

export const showMessage = (message, type) => {
  showToast({
    message: message,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? '#1ABC9C' : '#D9435E',
    titleStyle: {fontSize: 14, fontFamily: 'Poppins-Regular'},
  });
};
