import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center max-w-5xl mx-auto h-20 bg-white ">
        <div className="w-full flex items-center justify-end">
          <ul className="flex items-center">
            <li className="text-lg font-semibold">
              <Link to={`/images`}>Images</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
