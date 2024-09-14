import { ReviewCard } from "./ReviewCard.tsx";
import { Text } from "../../../ui/text";

export const Reviews = () => {
  const tg = window.Telegram.WebApp;

  return (
      <div style={{
        background: tg?.themeParams?.bottom_bar_bg_color || '#F2F2F7'
      }} className="mt-3 w-full max-w-md pb-4 bg-white rounded-lg shadow-md p-4">
        <Text className="mb-[18px]" variant="MEDIUM" style={{color: tg.themeParams.text_color, fontWeight: 600}}>Отзывы</Text>
        <ReviewCard
            imageSrc="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            reviewText="Спасибо большое. Девушке всё понравилось 😌🥺"
            views={528}
            time="10:27"
        />
      </div>
  );
}
