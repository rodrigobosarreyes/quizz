import { TriangleProps } from "../../components/triangle/triangle.model";

const emmTriangles: TriangleProps[] = [
  { isHover: false, position: {bottom: 25, left: 25}, config: {rotateZ: 25, borderWidth: '0 25px 50px 25px', borderColor: '#001D3D', borderColorHover: '#003566'}, animation: {rotateZ: 50, translate: 100}},
  { isHover: false, position: {bottom: 70, left: 25}, config: {rotateZ: 0, borderWidth: '0 10px 15px 10px', borderColor: '#001D3D', borderColorHover: '#003566'}, animation: {rotateZ: 50, translate: 100}},
  { isHover: false, position: {bottom: 25, left: 75}, config: {rotateZ: 0, borderWidth: '0 10px 15px 10px', borderColor: '#001D3D', borderColorHover: '#003566'}, animation: {rotateZ: 50, translate: 100}},
  { isHover: false, position: {bottom: 100, left: 50}, config: {rotateZ: -10, borderWidth: '0 15px 25px 15px', borderColor: '#001D3D', borderColorHover: '#003566'}, animation: {rotateZ: 50, translate: 100}},
  { isHover: false, position: {bottom: 50, left: 70}, config: {rotateZ: 25, borderWidth: '0 5px 25px 5px', borderColor: '#001D3D', borderColorHover: '#003566'}, animation: {rotateZ: 50, translate: 100}},
  { isHover: false, position: {bottom: 100, left: 0}, config: {rotateZ: 0, borderWidth: '0 15px 25px 5px', borderColor: '#001D3D', borderColorHover: '#003566'}, animation: {rotateZ: 50, translate: 100}},
  { isHover: false, position: {bottom: 100, left: 30}, config: {rotateZ: 40, borderWidth: '0 15px 15px 5px', borderColor: '#001D3D', borderColorHover: '#003566'}, animation: {rotateZ: 50, translate: 100}},
  { isHover: false, position: {bottom: 70 * 2, left: 25}, config: {rotateZ: 0, borderWidth: '0 10px 15px 10px', borderColor: '#001D3D', borderColorHover: '#003566'}, animation: {rotateZ: 50, translate: 100}},
  { isHover: false, position: {bottom: 25 * 3, left: 75}, config: {rotateZ: 0, borderWidth: '0 10px 15px 10px', borderColor: '#001D3D', borderColorHover: '#003566'}, animation: {rotateZ: 50, translate: 100}},
  { isHover: false, position: {bottom: 100 * 1.3, left: 50}, config: {rotateZ: -10, borderWidth: '0 15px 25px 15px', borderColor: '#001D3D', borderColorHover: '#003566'}, animation: {rotateZ: 50, translate: 100}},
  { isHover: false, position: {bottom: 50 * 1.5, left: 70}, config: {rotateZ: 25, borderWidth: '0 5px 25px 5px', borderColor: '#001D3D', borderColorHover: '#003566'}, animation: {rotateZ: 50, translate: 100}},
  { isHover: false, position: {bottom: 100 * 1.9, left: 0}, config: {rotateZ: 0, borderWidth: '0 15px 25px 5px', borderColor: '#001D3D', borderColorHover: '#003566'}, animation: {rotateZ: 50, translate: 100}},
  { isHover: false, position: {bottom: 100 * 1.7, left: 130}, config: {rotateZ: 40, borderWidth: '0 15px 15px 5px', borderColor: '#001D3D', borderColorHover: '#003566'}, animation: {rotateZ: 50, translate: -100}},
];

const rodTriangles: TriangleProps[] = [
  { isHover: false, position: {top: 0, right: 0}, config: {rotateZ: 25, borderWidth: '0 25px 50px 25px', borderColor: '#240046', borderColorHover: '#3C096C'}, animation: {rotateZ: 0, translate: -100} },
  { isHover: false, position: {top: 25, right: 25}, config: {rotateZ: 25, borderWidth: '0 25px 50px 25px', borderColor: '#240046', borderColorHover: '#3C096C'}, animation: {rotateZ: 150, translate: -100}},
  { isHover: false, position: {top: 70, right: 25}, config: {rotateZ: 0, borderWidth: '0 10px 15px 10px', borderColor: '#240046', borderColorHover: '#3C096C'}, animation: {rotateZ: 50, translate: -100}},
  { isHover: false, position: {top: 25, right: 75}, config: {rotateZ: 0, borderWidth: '0 10px 15px 10px', borderColor: '#240046', borderColorHover: '#3C096C'}, animation: {rotateZ: 150, translate: -100}},
  { isHover: false, position: {top: 100, right: 50}, config: {rotateZ: -10, borderWidth: '0 15px 25px 15px', borderColor: '#240046', borderColorHover: '#3C096C'}, animation: {rotateZ: 50, translate: -100}},
  { isHover: false, position: {top: 50, right: 70}, config: {rotateZ: 25, borderWidth: '0 5px 25px 5px', borderColor: '#240046', borderColorHover: '#3C096C'}, animation: {rotateZ: 50, translate: -100}},
  { isHover: false, position: {top: 100, right: 0}, config: {rotateZ: 0, borderWidth: '0 15px 25px 5px', borderColor: '#240046', borderColorHover: '#3C096C'}, animation: {rotateZ: 50, translate: -100}},
  { isHover: false, position: {top: 100, right: 30}, config: {rotateZ: 40, borderWidth: '0 15px 15px 5px', borderColor: '#240046', borderColorHover: '#3C096C'}, animation: {rotateZ: 50, translate: -100}},
  { isHover: false, position: {top: 70 * 2, right: 25}, config: {rotateZ: 0, borderWidth: '0 10px 15px 10px', borderColor: '#240046', borderColorHover: '#3C096C'}, animation: {rotateZ: 50, translate: -100}},
  { isHover: false, position: {top: 25 * 3, right: 75}, config: {rotateZ: 0, borderWidth: '0 10px 15px 10px', borderColor: '#240046', borderColorHover: '#3C096C'}, animation: {rotateZ: 50, translate: -100}},
  { isHover: false, position: {top: 100 * 1.3, right: 50}, config: {rotateZ: -10, borderWidth: '0 15px 25px 15px', borderColor: '#240046', borderColorHover: '#3C096C'}, animation: {rotateZ: 50, translate: -100}},
  { isHover: false, position: {top: 50 * 1.5, right: 70}, config: {rotateZ: 25, borderWidth: '0 5px 25px 5px', borderColor: '#240046', borderColorHover: '#3C096C'}, animation: {rotateZ: 50, translate: -100}},
  { isHover: false, position: {top: 100 * 1.9, right: 0}, config: {rotateZ: 0, borderWidth: '0 15px 25px 5px', borderColor: '#240046', borderColorHover: '#3C096C'}, animation: {rotateZ: 50, translate: -100}},
  { isHover: false, position: {top: 100 * 2, right: 30}, config: {rotateZ: 40, borderWidth: '0 15px 15px 5px', borderColor: '#240046', borderColorHover: '#3C096C'}, animation: {rotateZ: 50, translate: -100}},
];

export { emmTriangles, rodTriangles };