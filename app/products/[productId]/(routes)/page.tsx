import Image from "next/image";

import { PiWarningCircleLight } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import StarRating from "@/app/(home)/_components/star-rating";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import ImageCarousel from "../_components/image-carousel";
import bg from "@/public/images/product/bg.png";
import paypalLogo from "@/public/images/product/paypal-logo.png";
import wishlist from "@/public/images/product/wishlist.png";
import cart from "@/public/images/product/cart.png";
import video from "@/public/images/product/video.png";
import imgOne from "@/public/images/product/image-one.png";
import imgTwo from "@/public/images/product/image-two.png";
import imgThree from "@/public/images/product/image-three.png";
import availability from "@/public/images/product/worldwide.png";
import digitalKey from "@/public/images/product/digital-key.png";
import lock from "@/public/images/product/lock.png";
import paypal from "@/public/images/product/paypal.png";
import visa from "@/public/images/product/visa.png";
import mastercard from "@/public/images/product/mastercard.png";
import skrill from "@/public/images/product/skrill.png";

const gameData = {
  title: "Star wars: outlaws",
  fullTitle: "STAR WARS: OUTLAWS (PC) Steam Key Global",
  originalPrice: 39.99,
  discountPrice: 20.99,
  //   discountPrice: null,
  rating: 4,
  languages: ["English", "Japanese", "Russian", "French", "Chinese"],
  os: "windows",
  brand: "ubisoft",
  platform: "steam",
  tags: ["Difficult", "RPG", "Dark Fantasy", "Souls-like"],
  video: video,
  images: [imgOne, imgTwo, imgThree, imgOne, imgTwo, imgThree],
  requirements: {
    minimum: {
      os: "WINDOWS 10 / 11 WITH DIRECTX 12",
      cpu: "INTEL® CORE™ i7-8700K, AMD RYZEN™ 5 3600",
      graphics:
        "GEFORCE® GTX 1660 · 6GB, AMD RX 5600 XT · 6GB, INTEL® ARC A750 · 8GB (REBAR ON)",
      ram: "16 GB (dual-channel mode)",
      storage: "65 GB SSD",
      resolution: "1080p / 30 Fps / Low Preset with Upscaler Set to Quality",
    },
    recommended: {
      os: "WINDOWS 10 / 11 WITH DIRECTX 12",
      cpu: "INTEL® CORE™ i7-8700K, AMD RYZEN™ 5 3600",
      graphics:
        "GEFORCE® GTX 1660 · 6GB, AMD RX 5600 XT · 6GB, INTEL® ARC A750 · 8GB (REBAR ON)",
      ram: "16 GB (dual-channel mode)",
      storage: "65 GB SSD",
      resolution: "1080p / 30 Fps / Low Preset with Upscaler Set to Quality",
    },
    high: {
      os: "WINDOWS 10 / 11 WITH DIRECTX 12",
      cpu: "INTEL® CORE™ i7-8700K, AMD RYZEN™ 5 3600",
      graphics:
        "GEFORCE® GTX 1660 · 6GB, AMD RX 5600 XT · 6GB, INTEL® ARC A750 · 8GB (REBAR ON)",
      ram: "16 GB (dual-channel mode)",
      storage: "65 GB SSD",
      resolution: "1080p / 30 Fps / Low Preset with Upscaler Set to Quality",
    },
  },
};

export default function page() {
  const calDiscountPercentage = () => {
    const discount = (gameData.discountPrice / gameData.originalPrice) * 100;
    return discount.toFixed(2);
  };

  return (
    <section className="bg-[#051301] font-primaryFont">
      <div className="relative">
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
        <Image src={bg} alt="Image background" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto flex justify-end">
          {/* Price card */}
          <div
            className="bg-black/50 px-[2.7%] py-[4.2%] backdrop-blur-md translate-y-[25%]"
            style={{
              borderImage: "linear-gradient(to bottom, transparent, #999999) 1",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
          >
            <h3 className="uppercase font-bold text-[32px] border-b">
              {gameData.title}
            </h3>
            <div className="flex text-[48px] font-bold mt-[0.3em]">
              <p className="">
                $ {gameData.discountPrice || gameData.originalPrice}
              </p>
              <div className="flex items-center text-base font-medium ps-[0.7em] gap-x-[0.2em]">
                <PiWarningCircleLight className="size-5" />
                <p className="opacity-70">Price is not final</p>
              </div>
            </div>
            {gameData.discountPrice && (
              <p className="font-semibold text-[24px] flex items-center">
                <span className="line-through opacity-70">
                  $ {gameData.originalPrice}
                </span>
                <span className="font-medium text-[20px] text-[#0BDB45] ">
                  &nbsp;Save&nbsp;
                  {calDiscountPercentage()}%
                </span>
              </p>
            )}
            <Button
              variant="secondary"
              className="rounded-none w-full mt-[3%] mb-[6%]"
            >
              <Image src={paypalLogo} alt="Paypal logo" />
            </Button>
            <div className="flex gap-x-[3%]">
              <Button className="rounded-none bg-[#0BDB45] text-[25px] font-semibold text-black hover:text-white flex-grow">
                Buy now
              </Button>
              <button className="flex-shrink-0 hover:opacity-80">
                <Image src={wishlist} alt="Add to wishlist" />
              </button>
              <button className="flex-shrink-0 hover:opacity-80">
                <Image src={cart} alt="Add to cart" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(to bottom, black, transparent, transparent, black)",
        }}
      >
        <div className=" container mx-auto text-[20px]">
          {/* Title */}
          <h2 className="font-bold text-[32px] max-w-[45ch]">
            {gameData.fullTitle}
          </h2>

          {/* Info */}
          <div className="flex items-center gap-x-[16px] leading-none mt-[0.2em] mb-[0.6em]">
            {/* Rating */}
            <div className="text-[#f29d38] -translate-y-[10%]">
              <StarRating rating={gameData.rating} />
            </div>
            <p>{gameData.rating}/5</p>
            <div className="w-[1px] self-stretch bg-white"></div>
            {/* Languages */}
            <div className="flex">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p className="cursor-pointer">
                      {gameData.languages[0]}
                      {gameData.languages.length > 1 && (
                        <span> & {gameData.languages.length - 1} more</span>
                      )}
                    </p>
                  </TooltipTrigger>
                  <TooltipContent
                    className="rounded-none bg-black/50 text-white backdrop-blur-md"
                    style={{
                      borderImage:
                        "linear-gradient(to bottom, transparent, #999999) 1",
                      borderWidth: "1px",
                      borderStyle: "solid",
                    }}
                  >
                    <p className="text-[13px] py-[0.4em] font-bold border-b">
                      Available Languages
                    </p>
                    {gameData.languages.map((language) => (
                      <p key={language} className="text-[13px] py-[0.4em]">
                        {language}
                      </p>
                    ))}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="w-[1px] self-stretch bg-white"></div>
            {/* OS */}
            <div>
              <Image
                src={`/images/product/os/${gameData.os}.png`}
                alt={gameData.os}
                width={23}
                height={23}
              />
            </div>
            <div className="w-[1px] self-stretch bg-white"></div>
            {/* Brand */}
            <div>
              <Image
                src={`/images/product/brand/${gameData.brand}.png`}
                alt={gameData.brand}
                width={23}
                height={23}
              />
            </div>
            <div className="w-[1px] self-stretch bg-white"></div>
          </div>

          {/* Tags */}
          <div className="flex gap-x-3 text-[14px] font-semibold text-center text-white">
            {gameData.tags.map((tag) => (
              <div
                key={tag}
                className="bg-[#3B3B3B] min-w-[10ch] px-[1em] py-[0.3em]"
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Carousel */}
          <ImageCarousel video={gameData.video} images={gameData.images} />

          {/* Card Area */}
          <div className="border-t flex justify-around uppercase font-bold text-[28px] py-[2.5em] mt-[2.5em]">
            <div className="flex gap-4 items-center">
              <Image
                src={availability}
                alt="Availability"
                width={68}
                height={68}
              />
              <div>
                <p>Global</p>
                <p className="capitalize font-medium text-[20px]">
                  All country
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <Image
                src={`/images/product/platform/${gameData.platform}.png`}
                alt="Platform"
                width={68}
                height={68}
              />
              <div>
                <p>{gameData.platform}</p>
                <p className="capitalize font-medium text-[20px]">
                  Activate/redeem on Steam
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Image src={digitalKey} alt="Digital" width={68} height={68} />
              <div>
                <p>Digital keys</p>
                <p className="capitalize font-medium text-[20px]">
                  Instant delivery
                </p>
              </div>
            </div>
          </div>

          {/* Checkout Area */}
          <div>
            <h3 className="font-semibold text-[28px] capitalize">
              Checkout guaranteed
            </h3>
            <div className="bg-white/5 p-[2em] my-[2em] text-[20px] ">
              <div className="flex justify-between items-center text-[24px] font-medium">
                <p>Payment method</p>
                <Image src={lock} alt="Payment secured" />
              </div>
              <div className="flex gap-x-[1%] my-[2em]">
                <Image src={paypal} alt="Paypal" />
                <Image src={visa} alt="Visa" />
                <Image src={mastercard} alt="Mastercard" />
                <Image src={skrill} alt="Skrill" />
              </div>
              <p>
                Your payment information is processed securely. We do not store
                credit card details nor have access to your credit card
                information.
              </p>
            </div>
          </div>

          {/* Recommended */}
          <div className="h-[500px]"></div>
        </div>
      </div>
    </section>
  );
}