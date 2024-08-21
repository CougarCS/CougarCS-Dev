import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import technicalWorkShop from "@/assets/technicalWorkshopCardImage.jpeg";
const OfferCards = () => {
  return (
    <AspectRatio ratio={2.11 / 1} className="relative min-w-96 min-h-44">
      <img
        src={technicalWorkShop}
        alt="Technical Workshop pics"
        className="w-full h-full object-cover rounded-lg "
      />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(30,31,34,0.85),rgba(30,31,34,0.85)),linear-gradient(90deg,#131313_25.5%,rgba(0,0,0,0)_75.01%)] rounded-lg border-2 border-gray-300" />
      <div className="absolute inset-0 flex flex-col items-start p-4 pr-16 text-left text-white gap-2">
        <div className="bg-red-700 h-16 w-16 rounded-full flex items-center justify-center ">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5622 30.4285H27.9985C28.894 30.4285 29.3418 30.4285 29.6838 30.2542C29.9846 30.1009 30.2292 29.8563 30.3825 29.5554C30.5568 29.2134 30.5568 28.7657 30.5568 27.8702V4.20629C30.5568 3.31081 30.5568 2.86307 30.3825 2.52105C30.2292 2.22019 29.9846 1.97559 29.6838 1.8223C29.3418 1.64803 28.894 1.64803 27.9985 1.64803H18.7248C17.8294 1.64803 17.3816 1.64803 17.0396 1.8223C16.7388 1.97559 16.4942 2.22019 16.3409 2.52105C16.1666 2.86307 16.1666 3.31081 16.1666 4.20629V6.44477M12.9688 25.6317V30.4285M8.17202 30.4285H17.7655M6.89289 25.6317H19.0446C20.8356 25.6317 21.7311 25.6317 22.4151 25.2832C23.0168 24.9766 23.506 24.4874 23.8126 23.8857C24.1612 23.2016 24.1612 22.3062 24.1612 20.5152V11.5613C24.1612 9.77034 24.1612 8.87486 23.8126 8.19081C23.506 7.5891 23.0168 7.09989 22.4151 6.79331C21.7311 6.44477 20.8356 6.44477 19.0446 6.44477H6.89289C5.10194 6.44477 4.20646 6.44477 3.52241 6.79331C2.9207 7.09989 2.4315 7.5891 2.12491 8.19081C1.77637 8.87486 1.77637 9.77034 1.77637 11.5613V20.5152C1.77637 22.3062 1.77637 23.2016 2.12491 23.8857C2.4315 24.4874 2.9207 24.9766 3.52241 25.2832C4.20646 25.6317 5.10194 25.6317 6.89289 25.6317Z"
              stroke="white"
              stroke-width="1.9187"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <p>Techical Workshop</p>
        <p>
          Enhance your skills and knowledge in the latest technologies and
          trends.
        </p>
      </div>
    </AspectRatio>
  );
};

export default OfferCards;
