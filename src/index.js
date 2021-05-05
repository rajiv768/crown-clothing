import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";
import CartProvider from "./providers/cart/cart.provider.jsx";

import "./index.css";
import App from "./App";

ReactDOM.render(
  // CartProvider returns CartContext.Provider with value property which contains all data related to cart inside hidden,toggleHidden,cartItems etc
  <CartProvider>
    {/* Provider is redux which needs to be removed & we can remove whole redux folder from our application */}
    <Provider store={store}>
      <BrowserRouter>
        {/* PersistGate is redux which needs to be removed */}
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </CartProvider>,
  document.getElementById("root")
);
