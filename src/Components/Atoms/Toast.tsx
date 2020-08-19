import React from 'react';
import ToastMsg from 'react-native-root-toast';

interface ToastProps {
  visible: boolean;
  animation: boolean;
  hideOnPress: boolean;
}
const Toast = ({ visible, animation, hideOnPress }: ToastProps) => {
  return (
    <ToastMsg
      visible={visible}
      position={50}
      shadow={false}
      animation={animation}
      hideOnPress={hideOnPress}>
      This is a message
    </ToastMsg>
  );
};

export default Toast;
