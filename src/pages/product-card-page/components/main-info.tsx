import { FC } from "react";
import Skeleton from 'react-loading-skeleton'

import { Button } from "../../../ui/button";
import { Text } from "../../../ui/text";

interface MainInfoProps {
  title: string;
  isLoading: boolean;
  price_base?: number | undefined;
  price_build?: number | undefined;
}

export const MainInfo: FC<MainInfoProps> = ({ title, price_build, price_base, isLoading }) => {
  const tg = window.Telegram.WebApp;

  return (
      <div style={{
        background: tg?.themeParams?.bottom_bar_bg_color || '#F2F2F7'
      }} className="relative bottom-5 z-10 text-start p-4 bg-white rounded-2xl">
        {isLoading ? <Skeleton width={210} height={40} /> : (
            <Text style={{
              color: tg.themeParams.text_color
            }} className="text-[28px]" variant={"HEAD"}>{title}</Text>
        )}
        {isLoading ? <Skeleton width={160} height={40} /> : <Text style={{
          color: tg.themeParams.text_color
        }} variant={"HEAD"}>{price_base + " ₽"}</Text>}
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
              }} variant="SMALL" className="text-[#A3A3A3]">{price_base + " ₽"}</Text>
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
              }} variant="SMALL" className="text-[#A3A3A3]">{price_build + " ₽"}</Text>
            </>
          </Button>
        </div>
      </div>
  )
}