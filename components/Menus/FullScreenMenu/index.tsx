import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useTrail, a } from "@react-spring/web";
import FadeIn from "../../SpringAnimate/FadeIn";
import HoverTextAnimation from "../../SpringAnimate/HoverTextAnimation";
import { motion } from "framer-motion";

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
  const [showSocial, setShowSocial] = useState(false);
  const [showSingleSocial, setShowSingleSocial] = useState(false);

  useEffect(() => {
    if (showMenu) {
      setIsOpenMenu(true);
    } else {
      setIsOpenMenu(false);
    }
  }, [showMenu]);

  useEffect(() => {
    if (isOpenMenu) {
      setTimeout(() => {
        setShowSocial(true);
      }, 1000);
    } else {
      setShowSocial(false);
    }
  }, [isOpenMenu]);

  useEffect(() => {
    if (showSocial) {
      setTimeout(() => {
        setShowSingleSocial(true);
      }, 1200);
    } else {
      setShowSingleSocial(false);
    }
  }, [showSocial]);

  const fullVariants = {
    hidden: { y: "100vh", opacity: 0 },
    visible: {
      y: "0px",
      opacity: 1,
      transition: {
        // delay: 1,
        // when: "beforeChildren",
        // delayChildren: 0.8,
        // staggerChildren: 0.6,
      },
    },
  };
  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // delay: 1,
        delayChildren: 0,
        staggerChildren: 0.1,
        // when: "beforeChildren",
      },
    },
  };

  const socialVariant = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0px",
      opacity: 1,
      transition: {
        // delay: 0.1,
        // staggerChildren: 0.1,
      },
      // opacity: 1,
    },
  };

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
      <motion.div
        variants={fullVariants}
        initial="hidden"
        animate={isOpenMenu ? "visible" : "hidden"}
        className={`overlay-content`}
        transition={{ duration: 0.5 }}
        // style={{
        //   display: showMenu ? "block" : "none",
        // }}
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
        <div
          className="row mt-5"

          // transition={{ duration: 0.1 }}
        >
          <div className="col-12 d-flex justify-content-center">
            <motion.ul
              variants={socialVariants}
              initial="hidden"
              animate={showSocial ? "visible" : "hidden"}
              className="list-group list-group-horizontal-lg border-0"
              // style={{
              //   display: isOpenMenu ? "flex" : "none",
              // }}
            >
              <motion.li
                variants={socialVariant}
                // initial="hidden"
                // animate={showSocial ? "visible" : "hidden"}
                style={{
                  color: "white",
                  cursor: "pointer",
                  transition: "color 0.6s ease-out;",
                }}
                className="list-group-item border-0 bg-transparent "
              >
                facebook
              </motion.li>

              <motion.li
                variants={socialVariant}
                // initial="hidden"
                // animate={showSocial ? "visible" : "hidden"}
                style={{
                  color: "white",
                  cursor: "pointer",
                  transition: "color 0.6s ease-out;",
                }}
                className="list-group-item border-0 bg-transparent "
              >
                instagram
              </motion.li>
              <motion.li
                variants={socialVariant}
                // initial="hidden"
                // animate={showSocial ? "visible" : "hidden"}
                style={{
                  color: "white",
                  cursor: "pointer",
                  transition: "color 0.6s ease-out;",
                }}
                className="list-group-item border-0 bg-transparent "
              >
                linkedin
              </motion.li>
              <motion.li
                variants={socialVariant}
                // initial="hidden"
                // animate={showSocial ? "visible" : "hidden"}
                style={{
                  color: "white",
                  cursor: "pointer",
                  transition: "color 0.6s ease-out;",
                }}
                className="list-group-item border-0 bg-transparent "
              >
                youtube
              </motion.li>
              <motion.li
                variants={socialVariant}
                // initial="hidden"
                // animate={showSocial ? "visible" : "hidden"}
                style={{
                  color: "white",
                  cursor: "pointer",
                  transition: "color 0.6s ease-out;",
                }}
                className="list-group-item border-0 bg-transparent "
              >
                pinterest
              </motion.li>
              <motion.li
                variants={socialVariant}
                // initial="hidden"
                // animate={showSocial ? "visible" : "hidden"}
                style={{
                  color: "white",
                  cursor: "pointer",
                  transition: "color 0.6s ease-out;",
                }}
                className="list-group-item border-0 bg-transparent "
              >
                behance
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FullScreenMenu;
