import React from 'react';
import ToastMsg from 'react-native-root-toast';

interface ToastProps {
  visible: boolean;
  animation: boolean;
  hideOnPress: boolean;
  message: string;
}
const Toast = ({ message, visible, animation, hideOnPress }: ToastProps) => {
  return (
    <ToastMsg
      visible={visible}
      position={50}
      shadow={false}
      animation={animation}
      hideOnPress={hideOnPress}>
      {message}
    </ToastMsg>
  );
};

export default Toast;
