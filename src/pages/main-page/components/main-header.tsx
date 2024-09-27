import { useEffect } from "react";

import { getAvatar } from "../../../api/profile.ts";
import tgIcon from '../../../assets/icons/tg.svg';
import defaultAvatar from '../../../assets/images/avatar.svg';
import { useUserContext } from "../../../context/user.tsx";
import { Button } from "../../../ui/button";
import { Text } from "../../../ui/text";

export const MainHeader = () => {
  const { avatar, setAvatar } = useUserContext();
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    if (avatar) return;

    const fetchAvatar = async () => {
      try {
        const response = await getAvatar();
        const contentType = response.headers.get('Content-Type');
        if (contentType?.startsWith('image/') || contentType === 'application/octet-stream') {
          const blob = await response.blob();
          const imageUrl = URL.createObjectURL(blob);
          setAvatar(imageUrl);
        } else if (contentType?.includes('application/json')) {
          const data = await response.json();
          console.log('Response data:', data);
        }
      } catch (error) {
        console.error('Error fetching avatar:', error);
      }
    };

    fetchAvatar();
  }, []);

  return (
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <img className="rounded-[50%] w-9 h-9" src={avatar || defaultAvatar} alt="User Avatar" />
          <Text
              variant="MEDIUM"
              style={{
                color: tg.themeParams.text_color,
              }}
          >
            {tg?.initDataUnsafe?.user?.first_name || ''}
          </Text>
        </div>
        <Button className="rounded-2xl bg-white flex items-center py-0.5 px-2.5" onClick={() => {}}>
          <>
            <img src={tgIcon} alt="Telegram Icon" />
            <div>
              <Text className="text-[16px]" variant="REGULAR">@Flowersshop</Text>
              <Text className="text-[#A3A3A3]" variant="SMALL">наш Telegram-канал</Text>
            </div>
          </>
        </Button>
      </div>
  );
};
