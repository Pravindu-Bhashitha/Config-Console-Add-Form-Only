import { FaSignOutAlt } from "react-icons/fa";
const Logout = () => {
  return (
    <>
      <button className="logoutbutton" type="logout">
        <FaSignOutAlt></FaSignOutAlt>
      </button>
      <button className="logoutbutton2">Log out</button>
    </>
  );
};
export default Logout;
