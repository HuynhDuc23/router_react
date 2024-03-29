import "./LayoutDefault.scss";
import { NavLink, Outlet } from "react-router-dom";
function LayoutDefault() {
  return (
    <>
      <div className="layout-default">
        <header className="layout-default__header">
          <div className="layout-default__logo">Logo</div>
          <div className="layout-default__menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
                {/* Render <NavLink/> -> a : no reload page */}
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
                <u className="menu__sub">
                  <li>
                    <NavLink to="/blog/new">Blog new</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog/relad">Blog relad</NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="/blog/all">Blog All</NavLink>
                  </li> */}
                </u>
              </li>
            </ul>
          </div>
        </header>
        <main className="layout-default__content">
          <Outlet />
        </main>
        <footer className="layout-default__footer">Coppyright</footer>
      </div>
    </>
  );
}
export default LayoutDefault;
