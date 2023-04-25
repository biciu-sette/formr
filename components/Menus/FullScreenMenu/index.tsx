import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useTrail, a } from "@react-spring/web";
import FadeIn from "../../SpringAnimate/FadeIn";
import HoverTextAnimation from "../../SpringAnimate/HoverTextAnimation";

const TrailMenuItems: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

type FullScreenMenuProps = {
  showMenu: boolean;
  toggleMenu: () => void;
};

const FullScreenMenu = ({ showMenu, toggleMenu }: FullScreenMenuProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      setIsOpenMenu(true);
    } else {
      setIsOpenMenu(false);
    }
  }, [showMenu]);

  return (
    <div className={`overlay ${showMenu ? "menu-active" : "menu-inactive"}`}>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div
            style={{
              position: "relative",
              top: "40px",
              margin: "0 auto",
              textAlign: "center",
              display: "block",
            }}
          >
            <Image
              src="/images/formr-white.png"
              alt="formr logo"
              width={100}
              height={50}
            />
          </div>
        </div>
        <div className="col-4">
          <a href="#" className="closebtn" onClick={toggleMenu}>
            &times;
          </a>
        </div>
      </div>
      <div
        className={`overlay-content`}
        style={{
          display: showMenu ? "block" : "none",
        }}
      >
        <TrailMenuItems open={isOpenMenu}>
          <Link
            href=""
            style={{
              cursor: "pointer",
            }}
          >
            <a href="#" className="navigation-item-option">
              home
            </a>
          </Link>

          <Link href="">
            <a href="#" className="navigation-item-option">
              portofolio
            </a>
          </Link>
          <Link href="">
            <a href="#" className="navigation-item-option">
              services
            </a>
          </Link>
          <Link href="">
            <a href="#" className="navigation-item-option">
              about
            </a>
          </Link>
          <Link href="">
            <a href="#" className="navigation-item-option">
              contact
            </a>
          </Link>
        </TrailMenuItems>

        {/* Social  */}
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center">
            <ul className="list-group list-group-horizontal-lg border-0">
              <FadeIn>
                <li className="list-group-item border-0 bg-transparent text-white">
                  facebook
                </li>
              </FadeIn>
              <li className="list-group-item border-0 bg-transparent text-white">
                instagram
              </li>
              <li className="list-group-item border-0 bg-transparent text-white">
                linkedin
              </li>
              <li className="list-group-item border-0 bg-transparent text-white">
                youtube
              </li>
              <li className="list-group-item border-0 bg-transparent text-white">
                pinterest
              </li>
              <li className="list-group-item border-0 bg-transparent text-white">
                behance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenMenu;
