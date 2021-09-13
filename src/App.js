import './App.css';
import AuthButton from 'relysia-sdk';
import { useState } from 'react';

function App() {
  const [packageResp, setPackageResp] = useState({});
  return (
    <div className="App">
      <div>
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
        {packageResp.data && <h1>Response From Npm package :</h1>}
        {packageResp.data && packageResp.data.status && <h3>Status : {packageResp.data.status}</h3>}
        {packageResp.data && packageResp.data.msg && <h3>Token : {packageResp.data.msg}</h3>}
      </div>
    </div>
  );
}

export default App;
