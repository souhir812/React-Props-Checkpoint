import './App.css';
import Profile from './profile/Profile';
import ProfilePhoto from './res/ProfilePhoto.jpg';


function App() {
  let fullName= "souhir ben boubaker ";
  let bio=" i am a biomedical ingeneering student specilized in embeddded electronic system.I am very intersted in this domain so to improve my skills i shoose to learn web developpment with GOMYCODE.I am so happy with this teamwork specillay my moniteur and my freinds."
  let profession=" web developer";
  const handleName=()=>alert(` welcome to know more details about ${fullName}`)
  return (
    <div className="App">
      <Profile fullName={fullName} bio={bio} profession={profession} handleName={handleName}>
        <img style={{marginTop:"6%", width:"25%", borderRadius:"50%"}} src={ProfilePhoto} alt='My pic Profile'/>
      </Profile>
    </div>
  );
}

export default App;