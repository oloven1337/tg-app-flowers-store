import { Arrow } from "../../../assets/icons/arrow.tsx";
import tgIcon from '../../../assets/icons/tg.svg';
import avatar from '../../../assets/images/avatar.jpg';
import { Button } from "../../../ui/button";
import { Text } from "../../../ui/text";

export const MainHeader = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const tg = window.Telegram.WebApp;

  return (
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <img className="rounded-[50%] w-9 h-9" src={avatar} alt=""/>
          <Text variant="REGULAR"
                style={{
                  color: tg.themeParams.text_color
                }}
          >
            {tg?.initDataUnsafe?.user?.first_name || ''}
          </Text>
          <Arrow color={tg.themeParams.text_color}/>
        </div>
        <Button className="rounded-2xl bg-white flex items-center py-0.5 px-2.5" onClick={() => {
        }}>
          <>
            <img src={tgIcon} alt=""/>
            <div>
              <Text className="text-[16px]" variant="REGULAR">@Flowersshop</Text>
              <Text className="text-[#A3A3A3]" variant="SMALL">наш Telegram- канал</Text>
            </div>
          </>
        </Button>
      </div>
  );
};