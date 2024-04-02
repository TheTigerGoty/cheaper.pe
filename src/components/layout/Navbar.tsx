import Link from "next/link";
import Logo from "../shared/Logo";
import { ModeToggle } from "../shared/ModeToggle";
import { Menu } from "./navbar/Menu";
import Searcher from "../shared/Searcher";

export default function Navbar() {
    return (
        <div className="bg-base-light dark:bg-navbardark sticky top-0 z-20 flex justify-around items-center p-5">
            <Link href={"/"}>
                <Logo />
            </Link>

            <div>
                <Menu />
            </div>

            <div>
                {/* <Searcher/> */}
            </div>

            <div>
                <ModeToggle />
            </div>
        </div>
    );
}