import * as React from 'react';
import './prueba.scss';

interface ITestProps {
}

const Test: React.FunctionComponent<ITestProps> = (props) => {
  return <>
    <div className="figure hours hours-1">
        <span className="top">2</span>
        <span className="top-back">
          <span>2</span>
        </span>
        <span className="bottom">2</span>
        <span className="bottom-back">
          <span>2</span>
        </span>
      </div>
  </>;
};

export default Test;
