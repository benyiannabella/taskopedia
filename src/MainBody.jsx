import React from "react";
import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";

class MainBody extends React.Component {
  render() {
    const learn = "React JS";
    const num = 3;
    return (
      <div style={{ minHeight: "70hv" }}>
        <p>In this course we will learn {learn} by building Taskopedia!</p>
        <p>Total Lecture - {num}</p>
        <ul>
          <li>Basic Fundations</li>
          <li>Functional and Class Component</li>
        </ul>
        <div>
          <div className="container row">Students Enroled</div>
          <Student
            name="Kris Walley"
            experience={2}
            picture="https://api.lorem.space/image/face?w=150&h=155"
          >
            <StudentReview />
          </Student>
          <Student
            name="Mary Pops"
            experience={4}
            picture="https://api.lorem.space/image/face?w=150&h=159"
          >
            <StudentReview />
          </Student>
          <Student
            name="Jimmy Bones"
            experience={3}
            picture="https://api.lorem.space/image/face?w=150&h=154"
          >
            <StudentReview />
          </Student>
        </div>
      </div>
    );
  }
}

export default MainBody;
