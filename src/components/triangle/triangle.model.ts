export interface TriangleAnimation {
  rotateZ: number;
  translate: number;
}

export interface TrianglePosition {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface TriangleConfig {
  borderWidth: string;
  rotateZ: number;
  borderColor: string;
  borderColorHover: string;
}

export interface TriangleProps {
  isHover: boolean;
  position: TrianglePosition;
  config: TriangleConfig;
  animation: TriangleAnimation;
}
