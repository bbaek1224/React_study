/*
  컴포넌트 -> 함수 -> HTML 태그를 리턴하는 함수
*/

import { Fragment } from "react";
import Hello from "./components/Hello";

function App() {
  return <>
          <div>
            <Hello></Hello>
          </div>
          <div>
            <Hello></Hello>
          </div>
  </>
}

export default App;
