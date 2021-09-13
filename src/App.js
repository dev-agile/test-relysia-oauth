import './App.css';
import AuthButton from 'relysia-sdk';
import { useState } from 'react';

function App() {
  const {packageResp, setPackageResp} = useState('Token');
  return (
    <div className="App">
      <h1>Using React npm package</h1>
      <AuthButton
        clientKey="7c9a952e-1bd1-4ac5-a0cc-ecfaeb9d09ed"
        clientSecret="NCMCWFHbNcdbcIASPCbACdAHFJAPIYNLaVTNYBJEEGRKaQGTIYQTUXNLeQATLG"
        // isSignedIn={loggedIn}
        onSuccess={(resp) => {
          console.log(resp);
          setPackageResp(resp);
        }}
        onError={(errorResp) => {
          console.log(errorResp);
        }}
        customComponent={<div>Relysia OAuth Login</div>}
      />
      <h1>Response : {packageResp}</h1>
    </div>
  );
}

export default App;
