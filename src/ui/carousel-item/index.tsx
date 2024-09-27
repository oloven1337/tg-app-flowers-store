export const CarouselItem = () => {
  const tg = window.Telegram.WebApp;

  return (
      <div className="w-max">
        <div
            style={{
              background: `linear-gradient(90deg, ${tg?.themeParams?.destructive_text_color || '#ef5b5b'} -19%, ${tg?.themeParams?.accent_text_color || '#626aee'}) 72%`,
            }}
            className="relative p-0.5 rounded-[18px] bg-gradient-to-r from-purple-500 to-blue-400"
        >
          <div className="rounded-[18px] bg-white p-0.5">
            <div className="w-[86px] h-[86px] bg-gray-300 rounded-[16px]"></div>
          </div>
        </div>
      </div>

  );
};