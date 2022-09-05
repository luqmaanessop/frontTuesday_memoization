import React, {memo} from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/memo">React.memo Demo</Link>
        </li>
        <li>
          <Link to="/usecallback">useCallback Demo</Link>
        </li>
        <li>
          <Link to="/usememo">useMemo Demo</Link>
        </li>
      </ul>
    </nav>
  );
}

export default memo(Navbar);
