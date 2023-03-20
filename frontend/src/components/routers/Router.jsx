import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddPeople from "../AddPeople";
import ViewAllPeoples from "../ViewAllPeoples";
import ViewPeople from "../ViewPeople";
import UpdatePeople from "../UpdatePeople";

function Router() {
  /* Getting the userType from the AuthContext. */
  return (
    <BrowserRouter>


      <div className="App">
        {/* {userType !== null && <TopProfile />} */}
        <Routes>
              <Route exact path="/addpeople" element={<AddPeople />} />
              <Route path="/update/:id" element={<UpdatePeople/>}/>
              <Route exact path="/view/:id" element={<ViewPeople />} />
              <Route path="/" element={<ViewAllPeoples/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Router;
