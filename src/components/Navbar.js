import React, {memo} from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="flex p-6 bg-blue-800">
        <li className="mr-6">
          <Link className="text-white hover:text-blue-100" to="/">Home</Link>
        </li>
        <li className="mr-6">
          <Link className="text-white hover:text-blue-100" to="/memo">React.memo Demo</Link>
        </li>
        <li className="mr-6">
          <Link className="text-white hover:text-blue-100" to="/usecallback">useCallback Demo</Link>
        </li>
        <li className="mr-6">
          <Link className="text-white hover:text-blue-100" to="/usememo">useMemo Demo</Link>
        </li>
      </ul>
    </nav>
  );
}

export default memo(Navbar);
