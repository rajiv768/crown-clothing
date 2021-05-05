import { createContext } from "react";

import SHOP_DATA from "./shop.data";

// initial state of collection context, will ve used in collection compo
const CollectionsContext = createContext(SHOP_DATA);
// if only initial state is to be provided(no change in state) the context can be accessed directly like this(e.g collection compo)
//const collections = useContext(CollectionsContext);

export default CollectionsContext;
