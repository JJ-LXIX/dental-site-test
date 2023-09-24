const reviews = [
  {
    name: "Alice Johnson",
    review:
      "I had a wonderful experience at Washington Dental Clinic with Dr. Smith. Highly recommended for all your dental needs.",
  },
  {
    name: "Bob Miller",
    review:
      "Dr. Smith and the team at Washington Dental Clinic are friendly, professional, and provide top-notch care. Great experience!",
  },
  {
    name: "Caroline Davis",
    review:
      "My family loves Washington Dental Clinic. Dr. Smith is fantastic, and the staff is always welcoming. A great dental practice!",
  },
];

type Props = {};

function SmallScreenTestimonial({}: Props) {
  return (
    <div className="min-h-screen w-full bg-[#141414] pb-10 md:min-h-[30svh] md:pb-20">
      <div className="flex min-h-screen w-full flex-col items-center space-y-2 md:min-h-[30svh] md:flex-row md:justify-around md:space-y-0  md:pb-20">
        {reviews.map((review) => {
          return (
            <div
              key={review.name}
              className="h-[40svh] w-3/4 overflow-hidden rounded-2xl bg-zinc-300 p-5 md:h-[25svh] md:w-[30%]"
            >
              <div className="flex h-full w-full flex-col">
                {/* Review Text */}
                <div className="flex h-4/6 w-full items-center p-2 ">
                  "{review.review}"
                </div>
                {/* Image and Name */}
                <div className="flex h-2/6 w-full md:space-x-2">
                  <div className="flex h-full w-2/6 items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-red-500"></div>
                  </div>
                  <div className="flex h-full w-4/6 items-center text-xl font-semibold ">
                    {review.name}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SmallScreenTestimonial;
