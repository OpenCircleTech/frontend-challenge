import { Router } from "./Router";

import GlobalStyles from "./assets/styles/global";

import { AuthProvider } from "./Context/AuthContext";

export function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Router />
    </AuthProvider>
  )
}
