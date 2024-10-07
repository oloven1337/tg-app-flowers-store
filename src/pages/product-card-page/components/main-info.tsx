import { FC } from "react";
import Skeleton from 'react-loading-skeleton'

import { Button } from "../../../ui/button";
import { Text } from "../../../ui/text";
import { ProductType } from "../index.tsx";


interface MainInfoProps {
  title: string;
  isLoading: boolean;
  price_base?: number | undefined;
  price_build?: number | undefined;
  typeProduct: ProductType;
  setTypeProduct: (type: ProductType) => void;
}

export const MainInfo: FC<MainInfoProps> = ({title, price_build, price_base, isLoading, setTypeProduct, typeProduct}) => {
  const tg = window.Telegram.WebApp;

  const changeTypeProduct = (type: ProductType) => {
    if (type === 'Без сборки') {
      setTypeProduct('Без сборки');
    } else {
      setTypeProduct('Со сборкой');
    }
  }

  return (
      <div style={{
        background: tg?.themeParams?.bg_color || '#FFFFFF'
      }} className="relative bottom-5 z-10 text-start p-4 bg-white rounded-2xl mb-[-8px]">
        {isLoading ? <Skeleton width={210} height={40}/> : (
            <Text style={{
              color: tg.themeParams.text_color
            }} className="text-[28px]" variant={"HEAD"}>{title}</Text>
        )}
        {isLoading ? <Skeleton width={160} height={40}/> : <Text style={{
          color: tg.themeParams.text_color
        }} variant={"HEAD"}>{price_base + " ₽"}</Text>}
        <div className="border border-t-[#FFFFFF] my-3"></div>
        <Text style={{
          color: tg.themeParams.text_color
        }} className="font-semibold mb-3" variant={"MEDIUM"}>Цена</Text>
        <div style={{
          // background: '#F2F2F7'
          background: tg?.themeParams?.secondary_bg_color || '#FFFFFF',
        }} className="text-center flex items-center justify-between p-1 rounded-xl">
          {/*#A3A3A3*/}
          {/*${typeProduct === 'Без сборки' ? 'border-primary' : 'border-[#FFFFFF]'}*/}
          <Button
              style={{
                background: typeProduct === 'Без сборки' ? tg?.themeParams?.bg_color : tg?.themeParams?.secondary_bg_color
              }}
              className={`flex items-center justify-between mx-1 w-[168px] p-2 text-center rounded-xl`}
              onClick={() => changeTypeProduct('Без сборки')}>
            <>
              <Text style={{
                color: tg.themeParams.text_color
              }} variant="REGULAR" className="font-medium">Без сборки</Text>
              <Text style={{
                background: typeProduct === 'Без сборки' ? `linear-gradient(90deg, ${tg?.themeParams?.destructive_text_color || '#ef5b5b'} -19%, ${tg?.themeParams?.accent_text_color || '#626aee'}) 72%` : '#A3A3A3',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }} variant="REGULAR" className="text-[#A3A3A3] font-medium">{
                !price_base
                    ? (<Skeleton width={60} height={20}/>)
                    : price_base + " ₽"
              }</Text>
            </>
          </Button>
          <Button
              style={{
                background: typeProduct === 'Со сборкой' ? tg?.themeParams?.bg_color : tg?.themeParams?.secondary_bg_color
              }}
              className={`flex items-center justify-between mx-1 w-[168px] p-2 text-center rounded-lg`}
              onClick={() => changeTypeProduct('Со сборкой')}>
            <>
              <Text style={{
                color: tg.themeParams.text_color
              }} variant="REGULAR" className="font-medium">Со сборкой</Text>
              <Text style={{
                background: typeProduct === 'Со сборкой' ? `linear-gradient(90deg, ${tg?.themeParams?.destructive_text_color || '#ef5b5b'} -19%, ${tg?.themeParams?.accent_text_color || '#626aee'}) 72%` : '#A3A3A3',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }} variant="REGULAR" className="text-[#A3A3A3] font-medium">{
                !price_build
                    ? (<Skeleton width={60} height={20}/>)
                    : price_build + " ₽"}
              </Text>
            </>
          </Button>
        </div>
        {/*Полезная информация*/}
      </div>
  )
}