export const images = {
  logo: {
    white:
      "https://res.cloudinary.com/dnrdf85ss/image/upload/v1759941004/samples/Mono/whiteLogo_aywkmf.png",
  },

  hero: {
    graphic:
      "https://res.cloudinary.com/dnrdf85ss/image/upload/v1760045940/samples/Mono/Hero_1000x1000_jhsirz.png",
  },

  aboutUs: {
    main: "https://res.cloudinary.com/dnrdf85ss/image/upload/v1760034679/samples/Mono/aboutUsMONO_b9sfnf.png",
  },

  contactUs: {
    main: "https://res.cloudinary.com/dnrdf85ss/image/upload/v1759940997/samples/Mono/contactUs_almewb.webp",
  },

  services: {
    logistics:
      "https://res.cloudinary.com/dnrdf85ss/image/upload/v1759941004/samples/Mono/mulaSeca_nyuygd.webp",
    commercial:
      "https://res.cloudinary.com/dnrdf85ss/image/upload/v1759940999/samples/Mono/flete_ifryhl.webp",
    rental:
      "https://res.cloudinary.com/dnrdf85ss/image/upload/v1759940997/samples/Mono/cajaSeca_bwutx9.webp",
  },

  social: {
    facebook:
      "https://res.cloudinary.com/dnrdf85ss/image/upload/v1759940998/samples/Mono/fbLogo_tqrcyi.svg",
    instagram:
      "https://res.cloudinary.com/dnrdf85ss/image/upload/v1759941001/samples/Mono/instaLogo_nlme2a.svg",
    linkedin:
      "https://res.cloudinary.com/dnrdf85ss/image/upload/v1759941002/samples/Mono/linkLogo_nnxu6m.svg",
  },

  flags: {
    us: "/flag-us.svg",
    mx: "/flag-mx.svg",
  },
} as const;

export type ImageKey = keyof typeof images;
export type ServiceImageKey = keyof typeof images.services;
export type SocialImageKey = keyof typeof images.social;
