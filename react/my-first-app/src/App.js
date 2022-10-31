
import './App.css';
import Badge from './Badge';
import Card from './Card';
import Clock from './Clock';
import Message from './Message';

function App() {
  return (
    <div className="container row">
      <Card title="React JS"/>
      <Card title="Angular JS"/>
      <Card title="React JS"/>
      <Card title="Angular JS"/>
      <Card title="React JS"/>
      <Card title="Angular JS"/>
      {/* <Clock now={new Date()}></Clock>
      <Badge caption="Inbox"></Badge>
      <Badge caption="Sent"></Badge>
      <Message text="abcd"></Message>
      <Message text="pqrs"></Message> */}
    </div>
  );
}

export default App;
