import './App.css';
import UserProfile from './Components/UserProfile/index';

const userDetails = 
[
  {
    id: 1,
    imageUrl : 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name : 'Esther Howard',
    role : 'Software Developer'
  },
  {
    id: 2,
    imageUrl : 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name : 'Floyd Miles',
    role : 'Software Developer'
  },
  {
    id: 3,
    imageUrl : 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name : 'Jacob Jones',
    role : 'Software Developer'
  },
  {
    id: 4,
    imageUrl : 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name : 'Devon Lane',
    role : 'Software Developer'
  }
];
const App = () => {
  return (
    <div className="list-container">
      <h1 className="title">User Profiles</h1>
      <ul>
        {userDetails.map(eachUser => (
            <UserProfile userDetails={eachUser} key={eachUser.id}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
