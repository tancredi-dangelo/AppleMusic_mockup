import { createRoot } from "react-dom/client";

import App from "./App.tsx";
/*import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";*/

createRoot(document.getElementById("root")!).render(
  /*<Provider store={store}>
    <PersistGate persistor={persistedStore}>*/
  <App />,
  /*</PersistGate>
  </Provider>,*/
);
