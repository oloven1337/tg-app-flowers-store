import { FC } from "react";
import { Link } from "react-router-dom";

import { Text } from "../text";

interface IRedirectCardProps {
  title: string;
  link?: string;
}

export const RedirectCard: FC<IRedirectCardProps> = ({ title, link }) => {
  const tg = window.Telegram.WebApp;

  return (
      <Link to={link || "/"} style={{
        background: tg?.themeParams?.bottom_bar_bg_color || '#F2F2F7'
      }} className="w-[168px] h-[90px] bg-white rounded-2xl p-4">
        <div>
          <Text style={{
            // color: tg.themeParams.accent_text_color
            background: `linear-gradient(90deg, ${tg?.themeParams?.destructive_text_color || '#ef5b5b'} -19%, ${tg?.themeParams?.accent_text_color || '#626aee'}) 72%`,
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }} className="text-start" variant="MEDIUM">{title}</Text>
        </div>
      </Link>
  );
};