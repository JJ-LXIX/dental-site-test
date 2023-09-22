import Image from "next/image";
import React from "react";
import Dentist1 from "../../public/images/team/pexels-linkedin-sales-navigator-2182970.jpg";
import Dentist2 from "../../public/images/team/pexels-cottonbro-studio-5491144.jpg";
import Dentist3 from "../../public/images/team/pexels-emmy-e-2381069.jpg";
import Dentist4 from "../../public/images/team/pexels-andrea-piacquadio-3760263.jpg";

type Props = {};

const dentists = [
  {
    image: Dentist1,
    name: "Dr. Michael Smith, DDS",
    job: "Senior Dentist",
    objectPosition: "100% 0",
  },
  {
    image: Dentist2,
    name: "Dr. Sarah Johnson, DMD",
    job: "Senior Dentist",
    objectPosition: "0% 30%",
  },
  {
    image: Dentist3,
    name: "Dr. Lisa Martinez, DDS",
    job: "Pediatric Dentist",
    objectPosition: "50% 50%",
  },
  {
    image: Dentist4,
    name: "Dr. David Wilson, DMD",
    job: "Oral Surgeon",
    objectPosition: "50% 50%",
  },
];

export default function TeamSection({}: Props) {
  return (
    <div className="min-h-screen w-full bg-[#141414]  pb-20">
      <div className="min-h-screen w-full xl:flex xl:flex-row xl:justify-between">
        <h3 className="text-center text-3xl font-semibold text-white xl:w-1/2 xl:text-7xl">
          Our Team
        </h3>

        <div className="Team__Images flex flex-col items-center gap-5  pt-10 md:mx-8 md:grid md:grid-cols-2 md:grid-rows-2  xl:w-full  xl:justify-items-center xl:gap-4 xl:pt-0">
          {dentists.map((dentist) => {
            return (
              <div className="h-[60svh] w-10/12  md:h-[50svh] md:w-full  xl:h-[70vh]">
                <div className="relative h-5/6 w-full">
                  <Image
                    src={dentist.image}
                    alt="Dentist Image"
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: dentist.objectPosition,
                    }}
                  />
                </div>
                <div className="flex h-1/6 w-full flex-col justify-center bg-[#202020] px-2">
                  <h3 className="text-lg text-white md:text-2xl">
                    {dentist.name}
                  </h3>
                  <h4 className="text-base text-zinc-300 md:text-xl">
                    {dentist.job}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
