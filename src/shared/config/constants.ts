import classNames from "classnames";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// brand image
export const logo = ["/img/logo/logo-light.png", "/img/logo/logo-dark.png"];

// price item
export const priceItem = [
  {
    category: "Monthly Plan",
    price: "$10",
    services: [
      "100K+ design templates",
      "1M+ images, videos, and vectors",
      "Free fonts, music, animations, backgrounds, and objects",
      "1 Brand Kit for your logo, colors, and fonts",
      "Styles feature",
      "Social media scheduler for Facebook, Instagram, and Pinterest",
      "Logomaker to create custom logo designs",
      "10 GB of storage",
    ],
    styles: "",
    btnType: true,
    btnStyles: "smooth mx-auto w-full py-[20px] ",
  },
  {
    category: "Yearly Plan",
    price: "$100",
    services: [
      "100K+ design templates",
      "1M+ images, videos, and vectors",
      "Free fonts, music, animations, backgrounds, and objects",
      "1 Brand Kit for your logo, colors, and fonts",
      "Styles feature",
      "Social media scheduler for Facebook, Instagram, and Pinterest",
      "Logomaker to create custom logo designs",
      "10 GB of storage",
    ],
    styles: "bg-dark text-light",
    btnType: false,
    btnStyles: "smooth !bg-light !text-dark mx-auto w-full py-[20px]",
  },
];

// conunter items
export const counterItemsData = [
  {
    text: "",
    limit: "1346",
    subText: "Images Edited Today",
  },
  {
    text: "of 10",
    limit: "8.3",
    subText: "Satisfied Customers",
  },
  {
    text: " hrs.",
    limit: "32",
    subText: "Avg. Time Saved per Month",
  },
  {
    text: "%",
    limit: "92",
    subText: "Retention Rate",
  },
];

// feature items
export const featureItemsData = [
  {
    header: "Image editing tools",
    paragraph:
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    img: "/img/features/feature-img-1.svg",
    bgColor: "bg-lightgray",
  },
  {
    header: "Adding Graphics and Shapes",
    paragraph:
      "We offer all the image editing tools so that you can find them all in one place.",
    img: "/img/features/feature-img-2.svg",
    bgColor: "!bg-light",
  },
  {
    header: "Layer Management",
    paragraph:
      "We offer all the image editing tools so that you can find them all in one place.",
    img: "/img/features/feature-img-3.svg",
    bgColor: "bg-lightgray",
  },
];
