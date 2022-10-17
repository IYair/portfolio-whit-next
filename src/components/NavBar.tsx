import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="w-full fixed inset-x-0 bottom-14 z-20">
      <div className="">
        <ul className="font-thin tracking-widest text-sm mx-52 flex flex-row justify-between content-center border-b border-white text-white pb-2">
          <li>
            <Link href={`/`}>HOME</Link>
          </li>
          <li>
            <Link href={`/About`}>ABOUT</Link>
          </li>
          <li><Link href={`/Portfolio`}>PORTFOLIO</Link></li>
          <li><Link href={`/Courses`}>COURSES</Link></li>
          <li><Link href={`/Blog`}>BLOG</Link></li>
        </ul>
      </div>
    </nav>
  );
};
