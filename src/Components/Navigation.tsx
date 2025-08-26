import { type FC, useState } from "react";

const Navigation: FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header>
      <div className="navbar bg-primary text-primary-content p-4">
        <div className="flex-1 pl-4 align-left">
          <a className=" text-xl text-base-100 logo" href="/">
            <h1>nom²</h1>
          </a>
        </div>

        <div className="flex-none">
          <button
            className="btn btn-primary btn-lg"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>{" "}
            </svg>
          </button>
        </div>

        {openMenu && (
          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            {menuOptions.map((item, index) => (
              <li key={index}>
                <a href="{item.href}">{item.text}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navigation;
