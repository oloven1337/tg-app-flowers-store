import { FC } from "react";
import { useQuery } from "react-query";

import { ReviewCard } from "./ReviewCard.tsx";
import { fetchReviews } from "../../../api/products";
import { IReview } from "../../../models/IReview.ts";
import { Text } from "../../../ui/text";

const PATH = import.meta.env.VITE_URL

interface ReviewsProps {
  id: string;
}

export const Reviews: FC<ReviewsProps> = ({ id }) => {
  const tg = window.Telegram.WebApp;

  const { data: reviewData } = useQuery<IReview[]>(
      ['review', id],
      () => fetchReviews(id!),
      {
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000,
      },
  );

  return (
      <div style={{
        background: tg?.themeParams?.bottom_bar_bg_color || '#F2F2F7'
      }} className="mt-3 pb-4 bg-white rounded-lg shadow-md p-4 overflow-x-scroll">
        <div className="w-max">
          <Text className="mb-[18px]" variant="MEDIUM" style={{color: tg.themeParams.text_color, fontWeight: 600}}>Отзывы</Text>
          <div className="flex align-center gap-2">
            {!!reviewData && reviewData?.length > 0 && reviewData?.map(review => (
                <ReviewCard
                    key={review.review_id}
                    imageSrc={review.image_path ? PATH + '/static/' + review.image_path : undefined}
                    reviewText={review.review_description}
                    views={528}
                    time="10:27"
                />
            ))}
          </div>
        </div>
      </div>
  );
}
