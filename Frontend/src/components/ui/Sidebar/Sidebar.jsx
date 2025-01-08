import { SidebarIcon } from "../icons/SidebarIcons";
import { HomeIcon } from "../svg/HomeIcon";
import { InstaIcon } from "../svg/InstaIcon";
import { SettingIcon } from "../svg/SettingsIcon";
import { YoutubeIcon } from "../svg/YoutubeIcon";

export function Sidebar() {
  return (
    <div className="relative h-[85vh] w-[3.2vw] ">
      <div className=" fixed top-20 left-6 h-[85vh] w-[3.2vw] rounded-xl bg-[#151313ee] flex flex-col items-center justify-between p-3">
      <div>
        <SidebarIcon icons={<HomeIcon />} />
      </div>
      <div className="gap-3 flex flex-col">
        <SidebarIcon icons={<YoutubeIcon />} />
        <SidebarIcon icons={<InstaIcon />} />
        <SidebarIcon icons={<YoutubeIcon />} />
        <SidebarIcon icons={<InstaIcon />} />
      </div>
      <div>
        <SidebarIcon icons={<SettingIcon />} />
      </div>
    </div>
    </div>
  );
}
