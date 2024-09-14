import { FC } from "react";

import { Button } from "../../../ui/button";
import { Text } from "../../../ui/text";

interface MainInfoProps {
  title: string;
  prices: number[];
}

export const MainInfo: FC<MainInfoProps> = ({ title, prices }) => {
  const tg = window.Telegram.WebApp;

  return (
      <div style={{
        background: tg?.themeParams?.bottom_bar_bg_color || '#F2F2F7'
      }} className="relative bottom-5 z-10 text-start p-4 bg-white rounded-2xl">
        <Text style={{
          color: tg.themeParams.text_color
        }} className="text-[28px]" variant={"HEAD"}>{title}</Text>
        <Text style={{
          color: tg.themeParams.text_color
        }} variant={"HEAD"}>{prices[1] + " ₽"}</Text>
        <div className="border border-t-[#F2F2F7] my-3"></div>
        <Text style={{
          color: tg.themeParams.text_color
        }} className="font-semibold mb-3" variant={"MEDIUM"}>Цена</Text>
        <div className="text-center">
          <Button className="mx-1 min-w-[172px] p-2 text-center border-2 border-primary rounded-lg"
                  onClick={() => console.log('click')}>
            <>
              <Text style={{
                color: tg.themeParams.text_color
              }} variant="REGULAR" className="font-medium">Без сборки</Text>
              <Text style={{
                color: tg.themeParams.text_color
              }} variant="SMALL" className="text-[#A3A3A3]">{prices[0] + " ₽"}</Text>
            </>
          </Button>
          <Button className="mx-1 min-w-[172px] p-2 text-center border-2 border-[#F2F2F7] rounded-lg"
                  onClick={() => console.log('click')}>
            <>
              <Text style={{
                color: tg.themeParams.text_color
              }} variant="REGULAR" className="font-medium">Со сборкой</Text>
              <Text style={{
                color: tg.themeParams.text_color
              }} variant="SMALL" className="text-[#A3A3A3]">{prices[1] + " ₽"}</Text>
            </>
          </Button>
        </div>
      </div>
  )
}