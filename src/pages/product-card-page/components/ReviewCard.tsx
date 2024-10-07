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
      // console.log(`Ширина: ${img.width}`);
      // console.log(`Высота: ${img.height}`);
      setSize([img.width, img.height]);
    };
  }, []);
  console.log(size)
  return (
      <div style={{
        background: tg?.themeParams?.bg_color || '#FFFFFF'
      }}
           // className="relative mb-1 rounded-lg shadow-lg w-[300px]"
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
          {/*<Text variant="REGULAR" style={{*/}
          {/*  color: tg.themeParams.text_color,*/}
          {/*}} className="text-gray-800 mb-1">{reviewText}</Text>*/}
          {/*<div className="flex justify-end gap-1 items-center text-gray-600 text-sm">*/}
          {/*  <div className="flex items-center gap-1">*/}
          {/*    <img src={eye} alt=""/>*/}
          {/*    <Text variant="SMALL" style={{*/}
          {/*      color: tg.themeParams.text_color,*/}
          {/*    }}>{views}</Text>*/}
          {/*  </div>*/}
          {/*  <Text variant="SMALL" style={{*/}
          {/*    color: tg.themeParams.text_color,*/}
          {/*  }}>{time}</Text>*/}
          {/*</div>*/}
        </div>
      </div>
  );
};
