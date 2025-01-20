import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "./components/messenger";
import AccountProvider from "./components/context/accountProvider";

function App() {
  const clientId =
    "134002948262-j17gcrn62lsj1anomgnkocmtlimvk44s.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
