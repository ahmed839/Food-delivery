import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
  // we use the class component of the name extends the React.component
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "dummy",
        location: "Dummy",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ahmed839");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    //and will render method wich return a pice of jsx

    return (
      <>
        <UserContext.Consumer>
          {({ LoggedInUser }) => (
            <h1 className="text-xl font-bold">{LoggedInUser}</h1>
          )}
        </UserContext.Consumer>
        <img className="w-60" src={avatar_url} />
        <h1>Name: {name}</h1>
        <h1>Location: {location}</h1>
      </>
    );
  }
}
export default UserClass;
