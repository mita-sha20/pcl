import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Registration from "./Registration";
import Homepage from "./Homepage";
import Voting from "./Votingpage";
import firebaseConfig from "./Registration/firebaseconfig";
function App() {

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route elements="/">
        <Route path="/" element={<Homepage/>}></Route>
      </Route>
      <Route elements={<Registration/>}>
        <Route path="/registration" element={<Registration/>}></Route>
      </Route>
      <Route elements={<Voting/>}>
        <Route path="/voting" element={<Voting/>}></Route>
      </Route>
    </Route>
  )
)

  return (
   <>
     <div className="App">
         <RouterProvider router={router}></RouterProvider>
     </div>
   </>
  );
}

export default App;
