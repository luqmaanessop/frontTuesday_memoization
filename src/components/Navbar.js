import React, {memo} from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul class="flex p-6 bg-blue-800">
        <li class="mr-6">
          <Link class="text-white hover:text-blue-100" to="/">Home</Link>
        </li>
        <li class="mr-6">
          <Link class="text-white hover:text-blue-100" to="/memo">React.memo Demo</Link>
        </li>
        <li class="mr-6">
          <Link class="text-white hover:text-blue-100" to="/usecallback">useCallback Demo</Link>
        </li>
        <li class="mr-6">
          <Link class="text-white hover:text-blue-100" to="/usememo">useMemo Demo</Link>
        </li>
      </ul>
    </nav>
  );
}

export default memo(Navbar);
