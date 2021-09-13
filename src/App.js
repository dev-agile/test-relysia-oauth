import logo from './logo.svg';
import './App.css';
import AuthButton from 'relysia-sdk';

function App() {
  return (
    <div className="App">
      <AuthButton
        clientKey="7c9a952e-1bd1-4ac5-a0cc-ecfaeb9d09ed"
        clientSecret="NCMCWFHbNcdbcIASPCbACdAHFJAPIYNLaVTNYBJEEGRKaQGTIYQTUXNLeQATLG"
        // isSignedIn={loggedIn}
        onSuccess={(resp) => {
          console.log(resp);
        }}
        onError={(errorResp) => {
          console.log(errorResp);
        }}
        customComponent={<div>Relysia OAuth</div>}
      />
    </div>
  );
}

export default App;
