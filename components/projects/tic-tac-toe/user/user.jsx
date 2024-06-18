import clsx from "clsx";
import Image from "next/image";

export const User = ({ profile, rating, children, className }) => {
  return (
    <div className="max-w-40 flex items-center gap-2 flex-grow">
      <Image className="rounded-full" src={profile.avatar} alt="userIcon" width={48} height={48} />
      <div className="grid overflow-hidden">
        <span
          className={clsx(
            className ? className : " text-[#AE7EE8] leading-6",
            " text-left text-lg transition-colors truncate cursor-default"
          )}
        >
          {profile.name}
        </span>
        <span className="text-left text-xs text-slate-400 leading-4">
          rating: {rating} {children}
        </span>
      </div>
    </div>
  );
};
