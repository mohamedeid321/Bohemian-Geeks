// import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "/src/assets/images/bgk-logo.png";
function Header() {
  const navbar = [
    { title: "Services", link: "/services" },
    { title: "About", link: "/about" },
    { title: "Work", link: "/work" },
    { title: "Contact us", link: "/contact" },
  ];
  const location = useLocation();
  return (
    <div>
      <div className="z-100 flex justify-center items-center w-[38vw] h-[7vh] bg-[rgba(0,0,0,0.35)] rounded-[4vw] fixed  left-1/2 -translate-x-1/2 top-[2.5vh] shadow-[5px_5px_20px_rgba(0,0,0,0.35)] ">
        <div className="flex justify-between items-center w-full h-full mx-[2vw]">
          {/* ******** logo *******/}
          <Link to="/">
            <img src={logo} alt="bgk-logo.png" className="w-[11vw] " />
          </Link>

          {/* /********* split-line ******* */}
          <div className="split-line w-[0.1%] h-[70%] bg-pink rounded-2xl "></div>
          {/* /********* menu ******* */}
          <ul className="flex justify-between items-center w-[50%] font-bold text-[0.9vw]  ">
            {navbar.map((item) => (
              <li
                key={item.link}
                className={
                  location.pathname === item.link
                    ? "text-pink scale-[1.15] "
                    : "text-cream scale-[1]"
                }
              >
                <Link to={item.link} className="item place-content-center">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
