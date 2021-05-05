import { createContext } from "react";

// initial state of currentuser context, will be used in App compo
const CurrentUserContext = createContext(undefined);
// state will be change, so we have to use CurrentUserContext.Provider with value in parent compo to send state value to child compo
// e.g CurrentUserContext.Provider being used in App compo where we are accessing currentUser value from firebase database using componentDidMount()
// & that currentUser state value being passed in CurrentUserContext.Provider which is being wrapped outside Header compo
// & inside Header compo, we are accessing that currentUser value using CurrentUserContext
// const currentUser = useContext(CurrentUserContext);

// CurrentUserContext.Provider to send the state value to child compo
// useContext(CurrentUserContext) to read the state value from context

export default CurrentUserContext;
