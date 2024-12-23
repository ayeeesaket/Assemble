import { NavIcons } from "../icons/NavIcons";
import { ProfileIcon } from "../icons/ProfileIcon";
import Logo from "../svg/Logo";
import {NavBell} from "../svg/NavBell";
import { NavPayment } from "../svg/NavPayment";
import NavConsole from "./NavConsole";

const UpperNav = () => {
  return (
    <div className="m-4 flex justify-between z-10 ">
        <div className="w-[5vw]">
            <Logo/>
        </div>
        <div className="relative w-[25vw] z-10">
            <NavConsole/>
        </div>
        <div className=" w-[14vw]  flex justify-between items-center z-10">
            <NavIcons icons={<NavPayment/>} />
            <NavIcons icons={<NavBell/>}/>
            <ProfileIcon/>
        </div>
    </div>
  );
};
export default UpperNav;
