import React from "react";

import eye from "../../../assets/icons/eye.svg";
import { Text } from "../../../ui/text";

interface ReviewProps {
  imageSrc?: string | null;
  reviewText: string;
  views: number;
  time: string;
}

export const ReviewCard: React.FC<ReviewProps> = ({ imageSrc, reviewText, views, time }) => {
  const tg = window.Telegram.WebApp;

  return (
      <div style={{
        background: tg?.themeParams?.bg_color || '#F2F2F7'
      }} className="relative mb-1 rounded-lg shadow-lg w-[300px]">
        {!imageSrc ? (
            <div className="flex items-center justify-center w-[300px] h-[300px] text-primary">Отзыв без фото</div>
        ) : (
            <img src={imageSrc} alt="Review Image" className="rounded-lg mb-4 w-[300px] h-[300px] object-cover"/>
        )}
        <div className="px-2.5">
          <Text variant="REGULAR" style={{
            color: tg.themeParams.text_color,
          }} className="text-gray-800 mb-1">{reviewText}</Text>
          <div className="flex justify-end gap-1 items-center text-gray-600 text-sm">
            <div className="flex items-center gap-1">
              <img src={eye} alt=""/>
              <Text variant="SMALL" style={{
                color: tg.themeParams.text_color,
              }}>{views}</Text>
            </div>
            <Text variant="SMALL" style={{
              color: tg.themeParams.text_color,
            }}>{time}</Text>
          </div>
        </div>
      </div>
  );
};
