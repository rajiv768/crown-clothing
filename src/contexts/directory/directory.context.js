import { createContext } from "react";

import DIRECTORY_DATA from "./directory.data";

// initial state of DirectoryContext, will ve used in Directory compo
const DirectoryContext = createContext(DIRECTORY_DATA);
// if only initial state is to be provided(no change in state) the context can be accessed directly like this(e.g Directory compo)
//const sections = useContext(DirectoryContext);

export default DirectoryContext;
