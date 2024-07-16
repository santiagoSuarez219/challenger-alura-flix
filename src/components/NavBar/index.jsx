import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const handleLocationStyles = (path) => {
    if (location.pathname === path) {
      return "bg-black border-2 border-primary text-primary";
    }
    return "border-white text-white";
  };

  return (
    <nav className="hidden md:flex w-full h-32 uppercase bg-black/90 border-b-4 border-primary justify-between px-14 py-12">
      <ul>
        <li className="title">Aluraflix</li>
      </ul>
      <ul className="flex gap-6">
        <li className={`navbar__button ${handleLocationStyles("/")}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`navbar__button ${handleLocationStyles("/new-video")}`}>
          <Link to="/new-video">Nuevo video</Link>
        </li>
      </ul>
    </nav>
  );
}
