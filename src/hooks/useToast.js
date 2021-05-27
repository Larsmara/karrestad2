import { useToast as UseToast } from '@chakra-ui/react';
import useIsMobile from './useIsMobile';

export default function useToast() {
  const toast = UseToast();
  const isMobile = useIsMobile();

  const types = {
    success: {
      title: 'Success',
      status: 'success',
      duration: 9000,
      isClosable: true
    },
    error: {
      title: 'Error',
      status: 'error',
      duration: 9000,
      isClosable: true
    },
    warning: {
      title: 'Warning',
      status: 'warning',
      duration: 9000,
      isClosable: true
    },
    info: {
      title: 'Info',
      status: 'info',
      duration: 9000,
      isClosable: true
    }
  };

  const positions = ['top', 'top-right', 'top-left', 'bottom', 'bottom-right', 'bottom-left'];

  const addToast = ({ type, title, description, position }) => {
    const isPositionValid = positions.includes(position);

    if (type === 'success')
      return toast({
        ...types.success,
        title: title ?? types.success.title,
        description,
        position: isPositionValid && !isMobile ? position : 'bottom'
      });
    if (type === 'error')
      return toast({
        ...types.error,
        title: title ?? types.error.title,
        description,
        position: isPositionValid && !isMobile ? position : 'bottom'
      });
    if (type === 'warning')
      return toast({
        ...types.warning,
        title: title ?? types.warning.title,
        description,
        position: isPositionValid && !isMobile ? position : 'bottom'
      });
    if (type === 'info')
      return toast({
        ...types.info,
        title: title ?? types.info.title,
        description,
        position: isPositionValid && !isMobile ? position : 'bottom'
      });
    return null;
  };

  return { addToast };
}
