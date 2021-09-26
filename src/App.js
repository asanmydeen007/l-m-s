import Home from "./components/Home";
import Courses from "./components/Courses";
import Course1 from "./components/Course1";
import Course2 from "./components/Course2";
import Course3 from "./components/Course3";
import Events from "./components/Events";
import Contact from "./components/Contact";
import About from "./components/About";
// import Quiz from "./components/lectures/course-1/Quiz";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import Fade from 'react-reveal/Fade'

import Lecture1 from "./components/lectures/course-1/Lecture1";
import Lecture1_2 from "./components/lectures/course-1/Lecture1_2";
import Lecture1_3 from "./components/lectures/course-1/Lecture1_3";
import Lecture1_4 from "./components/lectures/course-1/Lecture1_4";
import Lecture1_5 from "./components/lectures/course-1/Lecture1_5";
import Lecture2_1 from "./components/lectures/course-1/Lecture2_1";
import Lecture2_2 from "./components/lectures/course-1/Lecture2_2";
import Lecture2_3 from "./components/lectures/course-1/Lecture2_3";
import Lecture2_4 from "./components/lectures/course-1/Lecture2_4";
import Lecture3_1 from "./components/lectures/course-1/Lecture3_1";
import Lecture3_2 from "./components/lectures/course-1/Lecture3_2";
import Lecture3_3 from "./components/lectures/course-1/Lecture3_3";
import Lecture3_4 from "./components/lectures/course-1/Lecture3_4";
import Lecture4_1 from "./components/lectures/course-1/Lecture4_1";
import Lecture4_2 from "./components/lectures/course-1/Lecture4_2";
import Lecture4_3 from "./components/lectures/course-1/Lecture4_3";
import Lecture4_4 from "./components/lectures/course-1/Lecture4_4";
import Lecture5_1 from "./components/lectures/course-1/Lecture5_1";
import Lecture5_2 from "./components/lectures/course-1/Lecture5_2";
import Lecture5_3 from "./components/lectures/course-1/Lecture5_3";

//Course - 2
import Lecture_1 from "./components/lectures/course-2/Lecture1";
import Lecture_1_2 from "./components/lectures/course-2/Lecture1_2";
import Lecture_1_3 from "./components/lectures/course-2/Lecture1_3";
import Lecture_1_4 from "./components/lectures/course-2/Lecture1_4";
import Lecture_1_5 from "./components/lectures/course-2/Lecture1_5";
import Lecture_2_1 from "./components/lectures/course-2/Lecture2_1";
import Lecture_2_2 from "./components/lectures/course-2/Lecture2_2";
import Lecture_2_3 from "./components/lectures/course-2/Lecture2_3";
import Lecture_2_4 from "./components/lectures/course-2/Lecture2_4";
import Lecture_3_1 from "./components/lectures/course-2/Lecture3_1";
import Lecture_3_2 from "./components/lectures/course-2/Lecture3_2";
import Lecture_3_3 from "./components/lectures/course-2/Lecture3_3";
import Lecture_3_4 from "./components/lectures/course-2/Lecture3_4";
import Lecture_4_1 from "./components/lectures/course-2/Lecture4_1";
import Lecture_4_2 from "./components/lectures/course-2/Lecture4_2";
import Lecture_4_3 from "./components/lectures/course-2/Lecture4_3";
import Lecture_4_4 from "./components/lectures/course-2/Lecture4_4";


//Course - 3
// import Lecture__1 from "./components/lectures/course-3/Lecture1";
// import Lecture__1_2 from "./components/lectures/course-3/Lecture1_2";
// import Lecture__1_3 from "./components/lectures/course-3/Lecture1_3";
// import Lecture__1_4 from "./components/lectures/course-3/Lecture1_4";
// import Lecture__1_5 from "./components/lectures/course-3/Lecture1_5";
// import Lecture__2_1 from "./components/lectures/course-3/Lecture2_1";
// import Lecture__2_2 from "./components/lectures/course-3/Lecture2_2";
// import Lecture__2_3 from "./components/lectures/course-3/Lecture2_3";
// import Lecture__2_4 from "./components/lectures/course-3/Lecture2_4";
// import Lecture__3_1 from "./components/lectures/course-3/Lecture3_1";
// import Lecture__3_2 from "./components/lectures/course-3/Lecture3_2";
// import Lecture__3_3 from "./components/lectures/course-3/Lecture3_3";
// import Lecture__3_4 from "./components/lectures/course-3/Lecture3_4";
// import Lecture__4_1 from "./components/lectures/course-3/Lecture4_1";
// import Lecture__4_2 from "./components/lectures/course-3/Lecture4_2";
// import Lecture__4_3 from "./components/lectures/course-3/Lecture4_3";
// import Lecture__4_4 from "./components/lectures/course-3/Lecture4_4";



import firebase from "firebase";
// import 'firebase/compat/auth'
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// firebase.initializeApp({
//   apiKey: "AIzaSyDbvXrg9YuneqpUKLftMfl548M5AYsVKqk",
//   authDomain: "fir-auth-tutorial-ed11f.firebaseapp.com"
// })
import Login from "./components/Login.js";

function App() {
  return (
    <div className="App">
     
      <Router>
        <Switch>
          
          <Route path="/" exact component={Login} />
          
          <Route path="/home"  component={Home} />
          <Route path="/course-1" component={Course1} />
          <Route path="/course-2" component={Course2} />
          <Route path="/course-3" component={Course3} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/courses" component={Courses} />
          <Route path="/events" component={Events} />
          
          <Route path="/cr-3-1.1" component={Lecture1} />
          <Route path="/cr-3-1.2" component={Lecture1_2} />
          <Route path="/cr-3-1.3" component={Lecture1_3} />
          <Route path="/cr-3-1.4" component={Lecture1_4} />
          <Route path="/cr-3-1.5" component={Lecture1_5} />
          <Route path="/cr-3-2.1" component={Lecture2_1} />
          <Route path="/cr-3-2.2" component={Lecture2_2} />
          <Route path="/cr-3-2.3" component={Lecture2_3} />
          <Route path="/cr-3-2.4" component={Lecture2_4} />
          <Route path="/cr-3-3.1" component={Lecture3_1} />
          <Route path="/cr-3-3.2" component={Lecture3_2} />
          <Route path="/cr-3-3.3" component={Lecture3_3} />
          <Route path="/cr-3-3.4" component={Lecture3_4} />
          <Route path="/cr-3-4.1" component={Lecture4_1} />
          <Route path="/cr-3-4.2" component={Lecture4_2} />
          <Route path="/cr-3-4.3" component={Lecture4_3} />
          <Route path="/cr-3-4.4" component={Lecture4_4} />
          <Route path="/cr-3-5.1" component={Lecture5_1} />
          <Route path="/cr-3-5.2" component={Lecture5_2} />
          <Route path="/cr-3-5.3" component={Lecture5_3} />

          {/* Course 2*/}

          <Route path="/cr-2-1.1" component={Lecture_1} />
          <Route path="/cr-2-1.2" component={Lecture_1_2} />
          <Route path="/cr-2-1.3" component={Lecture_1_3} />
          <Route path="/cr-2-1.4" component={Lecture_1_4} />
          <Route path="/cr-2-1.5" component={Lecture_1_5} />
          <Route path="/cr-2-2.1" component={Lecture_2_1} />
          <Route path="/cr-2-2.2" component={Lecture_2_2} />
          <Route path="/cr-2-2.3" component={Lecture_2_3} />
          <Route path="/cr-2-2.4" component={Lecture_2_4} />
          <Route path="/cr-2-3.1" component={Lecture_3_1} />
          <Route path="/cr-2-3.2" component={Lecture_3_2} />
          <Route path="/cr-2-3.3" component={Lecture_3_3} />
          <Route path="/cr-2-3.4" component={Lecture_3_4} />
          <Route path="/cr-2-4.1" component={Lecture_4_1} />
          <Route path="/cr-2-4.2" component={Lecture_4_2} />
          <Route path="/cr-2-4.3" component={Lecture_4_3} />
          <Route path="/cr-2-4.4" component={Lecture_4_4} />

          {/* <Route path="/quiz" component={Quiz} /> */}    
        </Switch>
      </Router>
    </div>
  );
}

export default App;
