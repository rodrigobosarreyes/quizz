import { useState } from 'react';
import { useSpring } from 'react-spring';

const useHoverAnimation = (isHoverInit: boolean, initStyle: any): any[] => {
  const [style, _setStyle] = useSpring(() => initStyle);
  const [, setHoverState] = useState(isHoverInit);

  const setHover = (_isHover: boolean, hoverStyle?: any) => {
    setHoverState(_isHover);
    if (_isHover) {
      _setStyle(hoverStyle);
    } else {
      _setStyle(initStyle);
    }
  }

  return [style, setHover];
}

export default useHoverAnimation;