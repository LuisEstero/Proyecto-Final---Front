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
        <button className="boton-nav-home">Home</button>
      </Link>
      <Link to="/oficina">
        <button className="boton-nav-oficina">Oficina</button>
        
      </Link>
      <Link to="/salareuniones">
        <button className="boton-nav-salas">Salas Reuniones</button>
        
      </Link>
-
      {isLoggedIn
        ? (<>
            <Link to="/">
              {/* <button>Reservas</button> */}
            </Link>
            <button className="boton-nav-logout" onClick={logOutUser}>Logout</button>
            <span>Bienvenido: {user.name}</span>
          </>)
        : 
        (<>
          <Link to="/signup"> <button className="boton-nav-signup">Signup</button> </Link>
          <Link to="/login"> <button className="boton-nav-login">Login</button> </Link>
        </>)
      }
    </nav>
  );
}

export default Navbar;