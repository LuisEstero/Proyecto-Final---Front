import { Link } from "react-router-dom";
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "./../context/auth.context";  // <== IMPORT

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <h5 className="cabecera">COWORKING BARCELONA</h5>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/oficina">
        <button>Oficina</button>
        
      </Link>
      <Link to="/salareuniones">
        <button>Salas Reuniones</button>
        
      </Link>
-
      {isLoggedIn
        ? (<>
            <Link to="/">
              {/* <button>Reservas</button> */}
            </Link>
            <button onClick={logOutUser}>Logout</button>
            <span>{user.name}</span>
          </>)
        : 
        (<>
          <Link to="/signup"> <button>Signup</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>)
      }
    </nav>
  );
}

export default Navbar;