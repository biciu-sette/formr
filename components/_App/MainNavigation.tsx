import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "../../utils/ActiveLink";
import FullScreenMenu from "../Menus/FullScreenMenu";

const pointer = {
  cursor: "pointer",
};

const MainNavigation = () => {
  const [displayAuth, setDisplayAuth] = useState(false);
  const [displayMiniAuth, setDisplayMiniAuth] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // sticky menu
  const showStickyMenu = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", showStickyMenu);
  }

  const toggleAuth = () => {
    setDisplayAuth(!displayAuth);
  };
  const toggleMiniAuth = () => {
    setDisplayMiniAuth(!displayMiniAuth);
  };

  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  useEffect(() => {
    let abortController = new AbortController();
    // your async action is here
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <div className={displayAuth ? "body_overlay open" : "body_overlay"}></div>
      <div
        className={sticky ? "is-sticky navbar-area " : "navbar-area "}
        style={{
          backgroundColor: "none!important",
          padding: "10px",
          boxShadow: "none",
        }}
      >
        <div className={showMenu ? "miran-nav show" : "miran-nav"}>
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <div className="others-option d-flex align-items-center">
                <div
                  className="others-option d-flex align-items-center"
                  style={pointer}
                  onClick={() => {
                    console.log("show work");
                  }}
                >
                  work
                </div>
              </div>

              <div className="collapse navbar-collapse mean-menu">
                <ul className="navbar-nav">
                  <Link href="/">
                    <a className="navbar-brand">
                      <Image
                        src="/images/formr-logo.png"
                        alt="logo"
                        width={150}
                        height={50}
                      />
                      {/* <img src="/images/formr.svg" alt="logo" /> */}
                    </a>
                  </Link>
                </ul>

                <div
                  className="others-option d-flex align-items-center"
                  style={pointer}
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  menu
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <FullScreenMenu 
        showMenu={showMenu}
        toggleMenu={toggleMenu}
       />
    </>
  );
};

export default MainNavigation;
