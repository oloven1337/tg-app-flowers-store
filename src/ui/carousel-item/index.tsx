import { FC } from "react";

import { ICarouselItem } from "../../models/ICarouselItem.ts";
import { Text } from "../text";

interface CarouselItemProps {
  data: ICarouselItem;
}

export const CarouselItem: FC<CarouselItemProps> = ({ data }) => {
  const { name, link, image, bgColor, textColor } = data;
  const tg = window.Telegram.WebApp;

  return (
      <div className="w-max">
        <div onClick={() => tg.openLink(link)}>
          <div
              style={{
                background: `linear-gradient(90deg, ${tg?.themeParams?.destructive_text_color || '#ef5b5b'} -19%, ${tg?.themeParams?.accent_text_color || '#626aee'}) 72%`,
              }}
              className="relative p-0.5 rounded-[18px] bg-gradient-to-r from-purple-500 to-blue-400"
          >
            <div className="rounded-[18px] bg-white p-0.5">
              <div style={{
                background: bgColor || '#383838',
              }} className={`w-[86px] h-[86px] rounded-[16px] relative`}>
                <Text style={{
                  color: textColor || '#FFFFFF',
                }} variant="SMALL" className="absolute top-0 left-0 ml-2 mt-2">{name}</Text>
                <img className="absolute bottom-0 right-0 w-12 h-12" src={image} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};