import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useLogout from '../../hooks/useLogout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faRightFromBracket,
  faUserGroup,
  faBuilding,
  faChartSimple,
  faUserCircle,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <aside
      className={
        'fixed bottom-0 rounded-none left-0 flex h-20 w-full items-center justify-between gap-3 overflow-auto border-t bg-white px-4 sm:h-screen sm:w-20 sm:flex-col sm:border-r sm:border-t-0 sm:px-0 sm:py-4'
      }
    >
      <div className="sm:flex-center hidden h-10 font-bold text-pro-300">Pro</div>
      <div className="flex flex-1 justify-between gap-2 sm:flex-grow-0 sm:flex-col">
        <NavbarLink label="Home" to="/" icon={faHome} active />
        <NavbarLink label="Company Info" to="/company-info" icon={faBuilding} />
        <NavbarLink label="Roles" to="roles" icon={faUserGroup} />
        <NavbarLink label="Reports" to="reports" icon={faChartSimple} />
        <NavbarLink label="Profile" to="profile" icon={faUserCircle} />
        <LogoutButton className="block sm:hidden" />
      </div>
      <LogoutButton className="hidden sm:block" />
    </aside>
  );
}

export default Navbar;

function NavbarLink({ to, icon }) {
  const constClasses = 'nav-link';
  const className = ({ isActive }) =>
    isActive
      ? constClasses + ' text-pro-300 bg-pro-50'
      : constClasses + ' btn-light text-progray-100';

  return (
    <NavLink to={to} className={className}>
      <FontAwesomeIcon icon={icon} />
    </NavLink>
  );
}

function LogoutButton({ className }) {
  const [loading, setLoading] = useState(false);
  const logout = useLogout();

  return (
    <button
      onClick={async () => {
        setLoading(true);
        await logout();
      }}
      className={
        'nav-link btn-light ' + className
      }
    >
      {loading ? (
        <FontAwesomeIcon icon={faSpinner} className="animate-spin-slow" />
      ) : (
        <FontAwesomeIcon icon={faRightFromBracket} className="sm:rotate-180" />
      )}
    </button>
  );
}
