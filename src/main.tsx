import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { Provider } from "react-redux";
//import { PersistGate } from "redux-persist/integration/react";

import store from "./components/redux/store/index.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
