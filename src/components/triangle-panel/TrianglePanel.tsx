import Triangle from "../triangle/Triangle";
import { TriangleProps } from "../triangle/triangle.model";

interface TrianglePanelProps {
  triangles: TriangleProps[];
  isHover: boolean;
}

const TrianglePanel: React.FC<TrianglePanelProps> = ({triangles, isHover}) => {
  return (
    <>
      {triangles.map( (t, i) => {
        return (
          <Triangle
            key={i}
            isHover={isHover}
            position={t.position}
            config={t.config}
            animation={t.animation}/>
        )
      })}
    </>
  )
}

export default TrianglePanel;
