
import { useState } from 'react';
import './App.css';
import Badge from './Badge';
import BadgeWithClass from './BadgeWithClass';
import Card from './Card';
import Clock from './Clock';
import Dropdown from './Dropdown';
import Message from './Message';

function App() {
  const [courses, setCourses] = useState([
    {id:1, title: 'React'},
    {id:3, title: 'Angular'},
    {id:2, title: 'NodeJS'},
    {id:4, title: '.NET'},
  ])

  let courseList = courses.map((course, i)=> <Card key={course.id} title={course.title}/>);
  console.log(courseList);

  return (
    <div className="container row">
       <Badge caption="Inbox"></Badge>
       <BadgeWithClass caption="WithClass"></BadgeWithClass>
      {/* <Dropdown/>
      <Dropdown/> */}
      {/* {courseList} */}
      {/* <Card title="React JS"/>
      <Card title="Angular JS"/>
      <Card title="React JS"/>
      <Card title="Angular JS"/>
      <Card title="React JS"/>
      <Card title="Angular JS"/> */}
      {/* <Clock now={new Date()}></Clock>
      <Badge caption="Inbox"></Badge>
      <Badge caption="Sent"></Badge>
      <Message text="abcd"></Message>
      <Message text="pqrs"></Message> */}
    </div>
  );
}

export default App;
