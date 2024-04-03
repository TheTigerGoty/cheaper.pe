import Link from "next/link";
import Logo from "../shared/Logo";
import { ModeToggle } from "../shared/ModeToggle";
import { Menu } from "./navbar/Menu";
import Searcher from "../shared/Searcher";

export default function Navbar() {
    return (
        <div className="bg-white/80 dark:bg-black/80 sticky top-0 z-20 flex justify-around items-center p-5 border lg:rounded-full lg:mx-10 backdrop-blur-3xl md:mt-2">
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