import { Route, Routes, useLocation } from "react-router-dom";
import App from "./App";
import Question1 from "./pages/question1/Question1";
import Question2 from "./pages/question2/Question2";
import Question3 from "./pages/question3/Question3";
import { useTransition, animated } from "react-spring";
import Question4 from "./pages/question4/Question4";
import Question5 from "./pages/question5/Question5";
import Results from "./pages/results/Results";
import CountdownPage from "./components/countdown/Countdown";

const AppRoutes = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from:  { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return transitions((props, items) => (
      <animated.div style={props}>
        <Routes location={items}>
          <Route path='/' element={<CountdownPage />}/>
          {/* <Route path='/start' element={<App />}/>
          <Route path='/question-1' element={<Question1 />}/>
          <Route path='/question-2' element={<Question2 />}/>
          <Route path='/question-3' element={<Question3 />}/>
          <Route path='/question-4' element={<Question4 />}/>
          <Route path='/question-5' element={<Question5 />}/>
          <Route path='/results' element={<Results />}/> */}
        </Routes>
      </animated.div>
    ));
}

export default AppRoutes;