import { FavouriteIcon } from "../icons/icon-favourite";
import { UsersIcon } from "../icons/icon-users";
import { TimeIcon } from "../icons/icon-time";
import Logo from "../../icons/logo.png";
import Image from "next/image";

export const Title = ({ options }) => {
  const sequence = () => {
    if (options.sequence == "3") return "3 in a row";
    if (options.sequence == "5") return "5 in a row";

    return "";
  };

  const time = () => {
    if (options.time == 30000) return "30 seconds per turn";
    if (options.time == 60000) return "1 minute per turn";
    if (options.time == 120000) return "2 minutes per turn";

    return "";
  };

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-4xl text-textLg">Tic-Tac-Toe Offline</h1>
        <div className="min-h-4 flex items-center gap-3 text-textMd text-xs">
          <span className="flex gap-1 items-center">
            <FavouriteIcon />
            {sequence()}
          </span>
          <span className="flex gap-1 items-center">
            <UsersIcon /> {options?.players || ""}
          </span>
          <span className="flex gap-1 items-center">
            <TimeIcon />
            {time()}
          </span>
        </div>
      </div>
      <div>
        <Image src={Logo} alt="logo" width={55} height={55} />
      </div>
    </div>
  );
};
