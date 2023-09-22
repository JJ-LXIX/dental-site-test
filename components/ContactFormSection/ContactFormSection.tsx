import dynamic from "next/dynamic";
import FormComponent from "./FormComponent";
import MapComponent from "./MapComponent";
import { Phone, Mail } from "lucide-react";
// import dynamic from "next/dynamic";
// const MapComponent = dynamic(() => import("./MapComponent"));

type Props = {};
function ContactFormSection({}: Props) {
  return (
    <div className="bg-white">
      <div
        id="contact"
        className="flex w-full scroll-m-20 flex-col space-y-10 pb-20 pt-20 md:mx-auto md:flex-row md:items-center md:space-y-0 md:px-2 lg:max-w-6xl"
      >
        <div className="w-full py-10">
          <h2 className="pb-4 text-center text-4xl font-semibold text-black lg:text-5xl ">
            Contact Us
          </h2>
          <div className="md: flex w-full items-center justify-around  px-5 md:h-10 xl:mx-auto xl:w-3/4">
            <h3 className="flex w-full items-center md:text-base">
              <Phone className="h-full pr-2 font-bold text-black" />
              {`(+1)123456789`}
            </h3>
            <h3 className="flex w-full items-center md:text-base">
              <Mail className="h-full pr-2 font-bold text-black" />
              yourEmail@gmail.com
            </h3>
          </div>

          <FormComponent />
        </div>

        <MapComponent />
      </div>
    </div>
  );
}

export default ContactFormSection;
