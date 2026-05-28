import "./App.css";
import { Card } from "./component/Card";
import Users from "./component/User.json";
function App() {
  // let response = Users.map((obj, index) => {
  //   console.log(obj, index);
  // });
  // console.log(response);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {Users.map((person, index) => {
        return (
          <Card
            key={index}
            name={person.Name}
            role={person.Role}
            likeCount={person.LikeCount}
            imgUrl={person.imgUrl}
          />
        );
      })}
    </div>
  );
}

export default App;
