// import { Routes, Route } from "react-router-dom";

// import { New } from "../pages/New";
// import { Home } from "../pages/Home";
// import { Details } from "../pages/Details";
// import { Profile } from "../pages/Profile";

// export function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/new" element={<New />} />
//       <Route path="/profile" element={<Profile />} />
//       <Route path="/details/:id" element={<Details />} />
//     </Routes>
//   );
// }

import { Routes, Route } from "react-router-dom";

import { Profile } from "../pages/Profile";
import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { New } from "../pages/New";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/new" element={<New />} />
    </Routes>
  );
}
