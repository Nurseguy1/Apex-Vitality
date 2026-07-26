import type { Metadata } from "next";
import ReviewTour from "./ReviewTour";

export const metadata: Metadata = {
  title: "Daily Nutrition Support Review Tour | Apex Vitality",
  robots: { index: false, follow: false },
};

export default function NutritionReviewPage() {
  return <ReviewTour />;
}
