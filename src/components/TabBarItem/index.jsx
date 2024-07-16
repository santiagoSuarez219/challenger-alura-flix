import { useLocation, Link } from "react-router-dom";

export default function TabBarItem(props) {
  const location = useLocation();

  if (location.pathname === props.path) {
    return (
      <li className="w-56 bg-primary/50 rounded-full px-6 py-3 flex flex-row-reverse border-2 border-primary gap-2 justify-center">
        <p className="text-primary text-xl uppercase font-bold">
          {props.title}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="size-6 text-primary"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={props.svg} />
        </svg>
      </li>
    );
  }
  return (
    <Link to={props.path}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="size-12 text-white"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={props.svg} />
      </svg>
    </Link>
  );
}
