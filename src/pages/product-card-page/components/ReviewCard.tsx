import React, { useEffect, useState } from "react";

interface ReviewProps {
  imageSrc?: string | null;
  reviewText: string;
  views: number;
  time: string;
}

export const ReviewCard: React.FC<ReviewProps> = ({ imageSrc }) => {
  const [size, setSize] = useState<number[]>([])
  const tg = window.Telegram.WebApp;
  const img = new Image();


  useEffect(() => {
    img.onload = () => {
      setSize([img.width, img.height]);
    };
  }, []);
  console.log(size)
  return (
      <div style={{
        background: tg?.themeParams?.bg_color || '#FFFFFF'
      }}
      >
        {!imageSrc ? (
            <div className="flex items-center justify-center w-[300px] h-[300px] text-primary">Отзыв без фото</div>
        ) : (
            <img style={{
              maxHeight: (size[1] > 540 ? 540 : size[1]) || 540,
              width: (size[0] > 250 ? 250 : size[0]) || 300,
            }} src={imageSrc} alt="Review Image" className="rounded-lg mb-4 object-contain"/>
        )}
        <div className="px-2.5">
        </div>
      </div>
  );
};
