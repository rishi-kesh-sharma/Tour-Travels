import Link from "next/link";
import Image from "next/image";

// top header data
import {
  BsCalendar3,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsBagCheck,
  BsGoogle,
} from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineUser, AiOutlineFolder } from "react-icons/ai";
import {
  HeroIcon1,
  HeroIcon2,
  HeroIcon3,
  HeroIcon4,
  HeroIcon5,
  HeroIcon6,
  HeroIcon7,
  HeroIcon8,
} from "../public/assets/images/heroCard";
import { FaMapSigns } from "react-icons/fa";

import { MdOutlineZoomOutMap } from "react-icons/md";
import { CiFlag1 } from "react-icons/ci";

// logo
import Logo from "/public/assets/images/logo.png";

import PlaceImage1 from "../public/assets/images/places/place1.jpg";
import PlaceImage2 from "../public/assets/images/places/place2.jpg";

// person
import Person1 from "../public/assets/images/peoples/person1.jpg";
import Person2 from "../public/assets/images/peoples/person2.jpg";

// plane
import PlaneImage from "../public/assets/images/planes/plane.jpg";
import PlaneImage1 from "../public/assets/images/planes/plane1.jpg";
import CarImage1 from "../public/assets/images/cars/car1.png";
import HotelRoom1 from "../public/assets/images/hotel/hotelroom.jpg";

// site 4 meta images

import site4Meta1 from "/public/assets/images/site4Meta/icon-earth.png";
import site4Meta2 from "/public/assets/images/site4Meta/logo-02.png";
import site4Meta3 from "/public/assets/images/site4Meta/logo-03.png";

// TOP HEADER
export const topHeaderItems = {
  left: [
    { icon: <BsCalendar3 />, content: new Date(Date.now()).getFullYear() },
    { icon: <IoLocationOutline />, content: "Kathmandu,Nepal" },
    { icon: <BiTimeFive />, content: "Mon-Fri: 10AM- 5PM" },
  ],
  socials: [
    { icon: <BsFacebook />, url: "https://facebook.com" },
    { icon: <AiOutlineTwitter />, url: "https://twitter.com" },
    { icon: <BsInstagram />, url: "https://instagram.com" },
    { icon: <BsLinkedin />, url: "https://linkedin.com" },
  ],
};

import flight1 from "/public/assets/images/flights/flight1.png";
import flight2 from "/public/assets/images/flights/flight2.png";
import SubscribeNewsLetterInput from "./components/sections/commons/SubscribeNewsLetterInput";

// HEADER

export const logoUrl =
  "https://htmldesigntemplates.com/html/travelin/images/logo.png";

export const nav = [
  [
    {
      name: "Home",
      path: "/buy",
      dropItems: [
        { name: "Default Home", path: "/" },
        { name: "Home1", path: "/home/1" },
        { name: "Home2", path: "/home/2" },
        { name: "Home3", path: "/home/3" },
        { name: "Home4", path: "/home/flight" },
        { name: "Home5", path: "/home/car" },
        { name: "Home6", path: "/home/" },
      ],
    },
    {
      name: "AboutUs",
      path: "/buy",
      dropItems: [
        { name: "Default about", path: "/" },
        { name: "about1", path: "/about1" },
        { name: "about2", path: "/about2" },
        { name: "about3", path: "/about3" },
      ],
    },
    {
      name: "Destination",
      path: "/buy",
      dropItems: [
        { name: "Default Destinations", path: "/" },
        { name: "Destinations1", path: "/destinations1" },
        { name: "Destinations2", path: "/destinations2" },
        { name: "Destinations3", path: "/destinations3" },
      ],
    },
    {
      name: "Tours",
      path: "/buy",
      dropItems: [
        { name: "Default Tours", path: "/" },
        { name: "Tours1", path: "/tours1" },
        { name: "Tours2", path: "/tours2" },
        { name: "Tours3", path: "/tours3" },
      ],
    },
    {
      name: "Pages",
      path: "/buy",
      dropItems: [
        { name: "Pages1", path: "/pages1" },
        { name: "Pages2", path: "/pages2" },
        { name: "Pages3", path: "/pages3" },
      ],
    },
  ],
];

// sidebar
export const sideBarLinks = [
  {
    icon: <AiOutlineUser />,
    name: "About",
    path: "/about",
  },
  {
    icon: <AiOutlineUser />,
    name: "Blogs",
    path: "/blogs",
  },
  {
    icon: <AiOutlineUser />,
    name: "Agencies",
    path: "/agencies",
  },
  {
    icon: <AiOutlineUser />,
    name: "Buy",
    path: "/buy",
    dropItems: [
      { name: "Homes for Sale", path: "/properties" },
      { name: "Open Houses", path: "/properties" },
      { name: "New Houses", path: "/properties" },
      { name: "Recently Sold", path: "/properties" },
    ],
  },
  {
    icon: <AiOutlineUser />,
    name: "Rent",
    path: "/rent",
    dropItems: [
      { name: "All Rentals", path: "/properties" },
      { name: "Apartments For Rent", path: "/properties" },
      { name: "Houses For Rent", path: "/properties" },
      { name: "Post A Rental Listing", path: "/properties" },
    ],
  },
  {
    icon: <AiOutlineUser />,
    name: "Mortgage",
    path: "mortgage",
    dropItems: [
      { name: "Mortgage overview", path: "/mortgage/overview" },
      { name: "Get Pre-Qualified", path: "/mortgage/prequalified" },
      { name: "Mortgage Rates", path: "/mortgage/rates" },
      { name: "Refinance Rates", path: "/mortgage/refinance/rates" },
      { name: "Mortgage Calculator", path: "/mortgage/calculator" },
      {
        name: "Affordibility Calculator",
        path: "/mortgage/affordibility/calculator",
      },
      {
        name: "Refinance Calculator",
        path: "/mortgage/refinance/calculator",
      },
    ],
  },
  {
    icon: <AiOutlineUser />,
    name: "Local Info",
    path: "/local-info",
    dropItems: [
      {
        name: "All Neighbourhood Guides",
        path: "/neighbourhood/guides",
      },
    ],
  },
  {
    icon: <AiOutlineUser />,
    name: "Additional Resources",
    path: "/additional-resources",
    dropItems: [
      {
        name: "Our Blogs",
        path: "/blogs",
      },
      {
        name: "Help Center",
        path: "/help",
      },
    ],
  },
  {
    icon: <AiOutlineUser />,
    name: "Contact",
    path: "/contact",
  },
];

// hero

export const heroOptionsList = [
  [
    {
      value: "1",
      label: "Not Identified",
    },
    {
      value: "2",
      label: "Closed",
    },
    {
      value: "3",
      label: "Communicated",
    },
    {
      value: "4",
      label: "Identified",
    },
    {
      value: "5",
      label: "Resolved",
    },
    {
      value: "6",
      label: "Cancelled",
    },
  ],

  [
    {
      value: "1",
      label: "Not Identified",
    },
    {
      value: "2",
      label: "Closed",
    },
    {
      value: "3",
      label: "Communicated",
    },
    {
      value: "4",
      label: "Identified",
    },
    {
      value: "5",
      label: "Resolved",
    },
    {
      value: "6",
      label: "Cancelled",
    },
  ],
  [
    {
      value: "1",
      label: "Not Identified",
    },
    {
      value: "2",
      label: "Closed",
    },
    {
      value: "3",
      label: "Communicated",
    },
    {
      value: "4",
      label: "Identified",
    },
    {
      value: "5",
      label: "Resolved",
    },
    {
      value: "6",
      label: "Cancelled",
    },
  ],
];
export const heroOptionsListEnhanced = [
  {
    title: "Where",
    options: [
      {
        value: "1",
        label: "Not Identified",
      },
      {
        value: "2",
        label: "Closed",
      },
      {
        value: "3",
        label: "Communicated",
      },
      {
        value: "4",
        label: "Identified",
      },
      {
        value: "5",
        label: "Resolved",
      },
      {
        value: "6",
        label: "Cancelled",
      },
    ],
  },
  {
    title: "Date",
    options: [
      {
        value: "1",
        label: "Not Identified",
      },
      {
        value: "2",
        label: "Closed",
      },
      {
        value: "3",
        label: "Communicated",
      },
      {
        value: "4",
        label: "Identified",
      },
      {
        value: "5",
        label: "Resolved",
      },
      {
        value: "6",
        label: "Cancelled",
      },
    ],
  },
];
export const flightHeroOptions = [
  {
    title: "Flying From",
    options: [
      {
        value: "1",
        label: "Not Identified",
      },
      {
        value: "2",
        label: "Closed",
      },
      {
        value: "3",
        label: "Communicated",
      },
      {
        value: "4",
        label: "Identified",
      },
      {
        value: "5",
        label: "Resolved",
      },
      {
        value: "6",
        label: "Cancelled",
      },
    ],
  },
  {
    title: "Flying To",
    options: [
      {
        value: "1",
        label: "Not Identified",
      },
      {
        value: "2",
        label: "Closed",
      },
      {
        value: "3",
        label: "Communicated",
      },
      {
        value: "4",
        label: "Identified",
      },
      {
        value: "5",
        label: "Resolved",
      },
      {
        value: "6",
        label: "Cancelled",
      },
    ],
  },
  {
    title: "Travelers",
    options: [
      {
        value: "1",
        label: "Not Identified",
      },
      {
        value: "2",
        label: "Closed",
      },
      {
        value: "3",
        label: "Communicated",
      },
      {
        value: "4",
        label: "Identified",
      },
      {
        value: "5",
        label: "Resolved",
      },
      {
        value: "6",
        label: "Cancelled",
      },
    ],
  },
];

// car hero options

export const carHeroOptions = [
  {
    title: "Pick Up Location",
    options: [
      {
        value: "1",
        label: "Not Identified",
      },
      {
        value: "2",
        label: "Closed",
      },
      {
        value: "3",
        label: "Communicated",
      },
      {
        value: "4",
        label: "Identified",
      },
      {
        value: "5",
        label: "Resolved",
      },
      {
        value: "6",
        label: "Cancelled",
      },
    ],
  },
  {
    title: "Drop Off Location",
    options: [
      {
        value: "1",
        label: "Not Identified",
      },
      {
        value: "2",
        label: "Closed",
      },
      {
        value: "3",
        label: "Communicated",
      },
      {
        value: "4",
        label: "Identified",
      },
      {
        value: "5",
        label: "Resolved",
      },
      {
        value: "6",
        label: "Cancelled",
      },
    ],
  },
  {
    title: "Passengers",
    options: [
      {
        value: "1",
        label: "Not Identified",
      },
      {
        value: "2",
        label: "Closed",
      },
      {
        value: "3",
        label: "Communicated",
      },
      {
        value: "4",
        label: "Identified",
      },
      {
        value: "5",
        label: "Resolved",
      },
      {
        value: "6",
        label: "Cancelled",
      },
    ],
  },
];

// hero cards
export const heroCardsData = [
  {
    image: HeroIcon1,
    title: "Beach Tours",
  },
  {
    image: HeroIcon2,
    title: "Safari",
  },
  {
    image: HeroIcon3,
    title: "Surfing",
  },
  {
    image: HeroIcon4,
    title: "Camping",
  },
  {
    image: HeroIcon5,
    title: "Cycling",
  },
  {
    image: HeroIcon6,
    title: "Trekking",
  },
  {
    image: HeroIcon7,
    title: "SunBed",
  },
  {
    image: HeroIcon8,
    title: "Hiking",
  },
];

// find travel

export const findTravelData = [
  {
    icon: <CiFlag1 />,

    title: "Tell Us What You Want To Do",
    subtitle:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nobis! ",
  },
  {
    icon: <IoLocationOutline />,

    title: "Share Your Travel Locations",
    subtitle:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nobis! ",
  },
  {
    icon: <FaMapSigns />,

    title: "Share Your Travel Locations",
    subtitle:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nobis! ",
  },
  {
    icon: <MdOutlineZoomOutMap />,

    title: "We Are 100% Trusted  Agency",
    subtitle:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nobis! ",
  },
];
export const topDestinationData = [
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nobis! ",
    image: PlaceImage1,
    place: "London",

    ratings: 4,
    previousPrice: 3000,
    price: 2500,
    noOfReviews: 4,
    duration: "2 days 1 night",
    country: "England",
    totalTours: "15 Tours",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nobis! ",
    image: PlaceImage1,
    place: "Caspian Valley",
    ratings: 4,
    previousPrice: 3000,
    price: 2500,
    noOfReviews: 4,
    duration: "2 days 1 night",

    country: "Italy",
    totalTours: "18 Tours",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nobis! ",
    image: PlaceImage1,
    place: "Moscow",
    country: "Russia",
    ratings: 4,
    previousPrice: 3000,
    price: 2500,
    noOfReviews: 4,
    duration: "2 days 1 night",
    totalTours: "15 Tours",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nobis! ",
    image: PlaceImage1,
    place: "Tokyo",

    ratings: 4,
    previousPrice: 3000,
    price: 2500,
    noOfReviews: 4,
    duration: "2 days 1 night",
    country: "Japan",
    totalTours: "15 Tours",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nobis! ",
    image: PlaceImage1,
    place: "Florida",

    ratings: 4,
    previousPrice: 3000,
    price: 2500,
    noOfReviews: 4,
    duration: "2 days 1 night",
    country: "America",
    totalTours: "32 Tours",
  },
];

// hotel rooms data

export const hotelRoomsData = [
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nobis! ",
    image: HotelRoom1,
    type: "Standard Penthouse",
    bedType: "King Beds",
    discount: "18",

    ratings: 4,
    previousPrice: 3000,
    price: 2500,
    noOfReviews: 4,
    duration: "2 days 1 night",
    country: "England",
    totalTours: "15 Tours",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nobis! ",
    image: HotelRoom1,
    type: "Standard Penthouse Valley",
    bedType: "King Beds",
    discount: "18",
    ratings: 4,
    previousPrice: 3000,
    price: 2500,
    noOfReviews: 4,
    duration: "2 days 1 night",
    country: "Italy",
    totalTours: "18 Tours",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nobis! ",
    image: HotelRoom1,
    type: "Standard Penthouse",
    bedType: "King Beds",
    discount: "18",
    country: "Russia",
    ratings: 4,
    previousPrice: 3000,
    price: 2500,
    noOfReviews: 4,
    duration: "2 days 1 night",
    totalTours: "15 Tours",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nobis! ",
    image: HotelRoom1,
    type: "Standard Penthouse",
    bedType: "King Beds",
    discount: "18",

    ratings: 4,
    previousPrice: 3000,
    price: 2500,
    noOfReviews: 4,
    duration: "2 days 1 night",
    country: "Japan",
    totalTours: "15 Tours",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nobis! ",
    image: HotelRoom1,
    type: "Standard Penthouse",
    bedType: "King Beds",
    discount: "18",

    ratings: 4,
    previousPrice: 3000,
    price: 2500,
    noOfReviews: 4,
    duration: "2 days 1 night",
    country: "America",
    totalTours: "32 Tours",
  },
];

export const GetToKnowData = [
  {
    title: "Years Experiences",
    count: 6,
  },
  {
    title: "Tour Packages",
    count: 159,
  },
  {
    title: "Happy Customers",
    count: 255,
  },
  {
    title: "Award Winning",
    count: 255,
  },
];

// best tour packages

export const bestTourPackagesData = [
  {
    image: [PlaceImage1, PlaceImage2],
    days: 9,
    country: "Greece",
    rating: 5,
    place: "Santorini,Oia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    cost: 1800,
    totalTours: 15,
  },
  {
    image: [PlaceImage1, PlaceImage2],
    days: 9,
    country: "Greece",
    rating: 5,
    place: "Santorini,Oia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    cost: 1800,
    totalTours: 15,
  },
  {
    image: [PlaceImage1, PlaceImage2],
    days: 9,
    country: "Greece",
    rating: 5,
    place: "Santorini,Oia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    cost: 1800,
    totalTours: 15,
  },
  {
    image: [PlaceImage1, PlaceImage2],
    days: 9,
    country: "Greece",
    rating: 5,
    place: "Santorini,Oia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    cost: 1800,
    totalTours: 15,
  },
  {
    image: [PlaceImage1, PlaceImage2],
    days: 9,
    country: "Greece",
    rating: 5,
    place: "Santorini,Oia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    cost: 1800,
    totalTours: 15,
  },
  {
    image: [PlaceImage1, PlaceImage2],
    days: 9,
    country: "Greece",
    rating: 5,
    place: "Santorini,Oia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    cost: 1800,
    totalTours: 15,
  },
  {
    image: [PlaceImage1, PlaceImage2],
    days: 9,
    country: "Greece",
    rating: 5,
    place: "Santorini,Oia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    cost: 1800,
    totalTours: 15,
  },
  {
    image: [PlaceImage1, PlaceImage2],
    days: 9,
    country: "Greece",
    rating: 5,
    place: "Santorini,Oia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    cost: 1800,
    totalTours: 15,
  },
];

// best Tour Routes data
export const bestTourRoutesData = [
  {
    image: PlaneImage1,
    days: 9,
    country: "Greece",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    cost: 1800,
    totalTours: 15,
    type: "roundtrip",
    from: "New York ",
    to: "London",
    departure: "09 jun 2022",
    return: "16 jun 2022",
  },
  {
    image: PlaneImage1,
    days: 9,
    country: "Greece",
    rating: 5,
    place: "Santorini,Oia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    cost: 1800,
    totalTours: 15,
    type: "roundtrip",
    from: "New York ",
    to: "London",
    departure: "09 jun 2022",
    return: "16 jun 2022",
  },
  {
    image: PlaneImage1,
    days: 9,
    country: "Greece",
    rating: 5,
    place: "Santorini,Oia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    cost: 1800,
    totalTours: 15,
    type: "roundtrip",
    from: "New York ",
    to: "London",
    departure: "09 jun 2022",
    return: "16 jun 2022",
  },
  {
    image: PlaneImage1,
    days: 9,
    country: "Greece",
    rating: 5,
    place: "Santorini,Oia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    cost: 1800,
    totalTours: 15,
    type: "roundtrip",
    from: "New York ",
    to: "London",
    departure: "09 jun 2022",
    return: "16 jun 2022",
  },
  {
    image: PlaneImage1,
    days: 9,
    country: "Greece",
    rating: 5,
    place: "Santorini,Oia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    cost: 1800,
    totalTours: 15,
    type: "roundtrip",
    from: "New York ",
    to: "London",
    departure: "09 jun 2022",
    return: "16 jun 2022",
  },
  {
    image: PlaneImage1,
    days: 9,
    country: "Greece",
    rating: 5,
    place: "Santorini,Oia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    cost: 1800,
    totalTours: 15,
    type: "roundtrip",
    from: "New York ",
    to: "London",
    departure: "09 jun 2022",
    return: "16 jun 2022",
  },
  {
    image: PlaneImage1,
    days: 9,
    country: "Greece",
    rating: 5,
    place: "Santorini,Oia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    cost: 1800,
    totalTours: 15,
    type: "roundtrip",
    from: "New York ",
    to: "London",
    departure: "09 jun 2022",
    return: "16 jun 2022",
  },
  {
    image: PlaneImage1,
    days: 9,
    country: "Greece",
    rating: 5,
    place: "Santorini,Oia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    cost: 1800,
    totalTours: 15,
    type: "roundtrip",
    from: "New York ",
    to: "London",
    departure: "09 jun 2022",
    return: "16 jun 2022",
  },
];

// our excellent guides
export const guidesData = [
  {
    image: Person1,
    name: "Cacics Coold",
    designation: "Asst. Manager",
  },
  {
    image: Person1,
    name: "Cacics Coold",
    designation: "Asst. Manager",
  },
  {
    image: Person1,
    name: "Cacics Coold",
    designation: "Asst. Manager",
  },
  {
    image: Person1,
    name: "Cacics Coold",
    designation: "Asst. Manager",
  },
  {
    image: Person1,
    name: "Cacics Coold",
    designation: "Asst. Manager",
  },
  {
    image: Person1,
    name: "Cacics Coold",
    designation: "Asst. Manager",
  },
  {
    image: Person1,
    name: "Cacics Coold",
    designation: "Asst. Manager",
  },
  {
    image: Person1,
    name: "Cacics Coold",
    designation: "Asst. Manager",
  },
  {
    image: Person1,
    name: "Cacics Coold",
    designation: "Asst. Manager",
  },
];

export const reviewsData = [
  {
    image: Person1,
    name: "Jared Erondu",
    designation: "Supervisor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    image: Person1,
    name: "Jared Erondu",
    designation: "Supervisor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    image: Person1,
    name: "Jared Erondu",
    designation: "Supervisor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    image: Person1,
    name: "Jared Erondu",
    designation: "Supervisor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    image: Person1,
    name: "Jared Erondu",
    designation: "Supervisor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    image: Person1,
    name: "Jared Erondu",
    designation: "Supervisor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
];

export const blogsData = [
  {
    image: PlaceImage1,
    tag: "Technology",
    title: "How A Developer Duo At Deutsche Bank Keep Remote Alive.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    author: {
      name: " Sollmond Nell",
      image: Person2,
    },
  },
  {
    image: PlaceImage1,
    tag: "Technology",
    title: "How A Developer Duo At Deutsche Bank Keep Remote Alive.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    author: {
      name: " Sollmond Nell",
      image: Person2,
    },
  },
  {
    image: PlaceImage1,
    tag: "Technology",
    title: "How A Developer Duo At Deutsche Bank Keep Remote Alive.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    author: {
      name: " Sollmond Nell",
      image: Person2,
    },
  },
  {
    image: PlaceImage1,
    tag: "Technology",
    title: "How A Developer Duo At Deutsche Bank Keep Remote Alive.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    author: {
      name: " Sollmond Nell",
      image: Person2,
    },
  },
  {
    image: PlaceImage1,
    tag: "Technology",
    title: "How A Developer Duo At Deutsche Bank Keep Remote Alive.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    author: {
      name: " Sollmond Nell",
      image: Person2,
    },
  },
  {
    image: PlaceImage1,
    tag: "Technology",
    title: "How A Developer Duo At Deutsche Bank Keep Remote Alive.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    author: {
      name: " Sollmond Nell",
      image: Person2,
    },
  },
  {
    image: PlaceImage1,
    tag: "Technology",
    title: "How A Developer Duo At Deutsche Bank Keep Remote Alive.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    author: {
      name: " Sollmond Nell",
      image: Person2,
    },
  },
  {
    image: PlaceImage1,
    tag: "Technology",
    title: "How A Developer Duo At Deutsche Bank Keep Remote Alive.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    author: {
      name: " Sollmond Nell",
      image: Person2,
    },
  },
];

export const aboutData = [
  { icon: <FaMapSigns />, title: "Tour Guide" },
  {
    icon: <BsBagCheck />,
    title: "Friendly Place",
  },
  {
    icon: <AiOutlineFolder />,
    title: " Reliable Tour Package",
  },
];

// footer

export const footer = {
  logo: Logo,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio suspendisse leo neque iaculis molestie sagittis maecenas aenean eget molestie sagittis.",
  contacts: [
    { title: "PO Box", name: "+47-252-254-2542" },
    { title: "Location", name: "Lagankhel ,Lalitpur" },
    { title: "Phone Number", name: "9813179590" },
    { title: "Email", name: "test@gmail.com" },
    { title: "Website", name: "test.com" },
  ],

  socials: [
    {
      icon: <BsFacebook className="text-xl text-blue-500" />,
      url: "facebook.com",
    },
    {
      icon: <BsTwitter className="text-xl text-blue-500" />,
      url: "twitter.com",
    },
    {
      icon: <BsGoogle className="text-xl text-blue-500" />,
      url: "twitter.com",
    },
    {
      icon: <BsInstagram className="text-xl text-blue-500" />,
      url: "instagram.com",
    },
    {
      icon: <BsLinkedin className="text-xl text-blue-500" />,
      url: "linkedin.com",
    },
  ],
  columns: [
    {
      heading: "Quick Links",
      links: [
        { name: "About", url: "/about" },
        { name: "Delivery Information", url: "/" },
        { name: "Privacy Policy", url: "/" },
        { name: "Terms & Conditions", url: "/" },
        { name: "Costumer Service", url: "/" },
        { name: "Return Policy", url: "/" },
      ],
    },
    {
      heading: "Categories ",
      links: [
        { name: "Travel", url: "/" },
        { name: "Technology", url: "/" },
        { name: "Lifestyle", url: "/" },
        { name: "Destination ", url: "/" },
        { name: "Entertainment", url: "/" },
        { name: "Business", url: "/" },
      ],
    },
    {
      heading: "NewsLetter ",
      items: [
        "Join our community of over 200,000 global readers who receives emails filled with news, promotions, and other good stuff.",
        <SubscribeNewsLetterInput />,
      ],
    },
  ],
};

export const flightsCardData = [
  { image: flight1, title: "Air Asia" },
  { image: flight2, title: "Turkish Airlines" },
  { image: flight1, title: "Air Asia" },
  { image: flight2, title: "Turkish Airlines" },
  { image: flight1, title: "Air Asia" },
  { image: flight2, title: "Turkish Airlines" },
  { image: flight1, title: "Air Asia" },
  { image: flight2, title: "Turkish Airlines" },
  { image: flight1, title: "Air Asia" },
  { image: flight2, title: "Turkish Airlines" },
];

// car cards data
export const carsCardData = [
  { image: CarImage1, title: "Volkswagon" },
  { image: CarImage1, title: "Scoda" },
  { image: CarImage1, title: "Volkswagon" },
  { image: CarImage1, title: "Scoda" },
  { image: CarImage1, title: "Volkswagon" },
  { image: CarImage1, title: "Scoda" },
  { image: CarImage1, title: "Volkswagon" },
  { image: CarImage1, title: "Scoda" },
  { image: CarImage1, title: "Volkswagon" },
  { image: CarImage1, title: "Scoda" },
];

// flight schedule data

export const flightScheduleData = [
  {
    date: "FEB 15,2022",
    day: "Saturday",
    flights: [
      {
        date: "FEB 15,2022",
        day: "Saturday",
        image: flight1,
        name: "Air Asia",
        operator: "Emirates",
        flightDeparture: "7:30 DAC",
        flightTime: "02H 45 M",
        noOfStops: 2,
        price: 2345,
      },
      {
        date: "FEB 15,2022",
        day: "Saturday",
        image: flight1,
        name: "Air Asia",
        operator: "Emirates",
        flightDeparture: "7:30 DAC",
        flightTime: "02H 45 M",
        noOfStops: 2,
        price: 2345,
      },
      {
        date: "FEB 15,2022",
        day: "Saturday",
        image: flight1,
        name: "Air Asia",
        operator: "Emirates",
        flightDeparture: "7:30 DAC",
        flightTime: "02H 45 M",
        noOfStops: 2,
        price: 2345,
      },
      {
        date: "FEB 15,2022",
        day: "Saturday",
        image: flight1,
        name: "Air Asia",
        operator: "Emirates",
        flightDeparture: "7:30 DAC",
        flightTime: "02H 45 M",
        noOfStops: 2,
        price: 2345,
      },
      {
        date: "FEB 15,2022",
        day: "Saturday",
        image: flight1,
        name: "Air Asia",
        operator: "Emirates",
        flightDeparture: "7:30 DAC",
        flightTime: "02H 45 M",
        noOfStops: 2,
        price: 2345,
      },
    ],
  },
  {
    date: "FEB 16,2022",
    day: "Sunday",
    flights: [
      {
        date: "FEB 16,2022",
        day: "Sunday",
        image: flight2,
        name: "Turkish Airlines",
        operator: "Turkey",
        flightDeparture: "9:30 DAC",
        flightTime: "22H 45M",
        noOfStops: 3,
      },
      {
        date: "FEB 16,2022",
        day: "Sunday",
        image: flight2,
        name: "Turkish Airlines",
        operator: "Turkey",
        flightDeparture: "9:30 DAC",
        flightTime: "22H 45M",
        noOfStops: 3,
      },
      {
        date: "FEB 16,2022",
        day: "Sunday",
        image: flight2,
        name: "Turkish Airlines",
        operator: "Turkey",
        flightDeparture: "9:30 DAC",
        flightTime: "22H 45M",
        noOfStops: 3,
      },
      {
        date: "FEB 16,2022",
        day: "Sunday",
        image: flight2,
        name: "Turkish Airlines",
        operator: "Turkey",
        flightDeparture: "9:30 DAC",
        flightTime: "22H 45M",
        noOfStops: 3,
      },
      {
        date: "FEB 16,2022",
        day: "Sunday",
        image: flight2,
        name: "Turkish Airlines",
        operator: "Turkey",
        flightDeparture: "9:30 DAC",
        flightTime: "22H 45M",
        noOfStops: 3,
      },
    ],
  },
  {
    date: "FEB 17,2022",
    day: "Monday",
    flights: [
      {
        date: "FEB 17,2022",
        day: "Monday",
        image: flight1,
        name: "Air Asia",
        operator: "Emirates",
        flightDeparture: "7:30 DAC",
        flightTime: "02H 45 M",
        noOfStops: 2,
        price: 2345,
      },
      {
        date: "FEB 17,2022",
        day: "Monday",
        image: flight1,
        name: "Air Asia",
        operator: "Emirates",
        flightDeparture: "7:30 DAC",
        flightTime: "02H 45 M",
        noOfStops: 2,
        price: 2345,
      },
      {
        date: "FEB 17,2022",
        day: "Monday",
        image: flight1,
        name: "Air Asia",
        operator: "Emirates",
        flightDeparture: "7:30 DAC",
        flightTime: "02H 45 M",
        noOfStops: 2,
        price: 2345,
      },
      {
        date: "FEB 17,2022",
        day: "Monday",
        image: flight1,
        name: "Air Asia",
        operator: "Emirates",
        flightDeparture: "7:30 DAC",
        flightTime: "02H 45 M",
        noOfStops: 2,
        price: 2345,
      },
      {
        date: "FEB 17,2022",
        day: "Monday",
        image: flight1,
        name: "Air Asia",
        operator: "Emirates",
        flightDeparture: "7:30 DAC",
        flightTime: "02H 45 M",
        noOfStops: 2,
        price: 2345,
      },
    ],
  },
  {
    date: "FEB 18,2022",
    day: "Tuesday",
    flights: [
      {
        date: "FEB 18,2022",
        day: "Tuesday",
        image: flight2,
        name: "Turkish Airlines",
        operator: "Turkey",
        flightDeparture: "9:30 DAC",
        flightTime: "22H 45M",
        noOfStops: 3,
      },
      {
        date: "FEB 18,2022",
        day: "Tuesday",
        image: flight2,
        name: "Turkish Airlines",
        operator: "Turkey",
        flightDeparture: "9:30 DAC",
        flightTime: "22H 45M",
        noOfStops: 3,
      },
      {
        date: "FEB 18,2022",
        day: "Tuesday",
        image: flight2,
        name: "Turkish Airlines",
        operator: "Turkey",
        flightDeparture: "9:30 DAC",
        flightTime: "22H 45M",
        noOfStops: 3,
      },
      {
        date: "FEB 18,2022",
        day: "Tuesday",
        image: flight2,
        name: "Turkish Airlines",
        operator: "Turkey",
        flightDeparture: "9:30 DAC",
        flightTime: "22H 45M",
        noOfStops: 3,
      },
      {
        date: "FEB 18,2022",
        day: "Tuesday",
        image: flight2,
        name: "Turkish Airlines",
        operator: "Turkey",
        flightDeparture: "9:30 DAC",
        flightTime: "22H 45M",
        noOfStops: 3,
      },
    ],
  },
  {
    date: "FEB 19,2022",
    day: "Wednesday",
    flights: [
      {
        date: "FEB 19,2022",
        day: "Wednesday",
        image: flight1,
        name: "Air Asia",
        operator: "Emirates",
        flightDeparture: "7:30 DAC",
        flightTime: "02H 45 M",
        noOfStops: 2,
        price: 2345,
      },

      {
        date: "FEB 19,2022",
        day: "Wednesday",
        image: flight1,
        name: "Air Asia",
        operator: "Emirates",
        flightDeparture: "7:30 DAC",
        flightTime: "02H 45 M",
        noOfStops: 2,
        price: 2345,
      },

      {
        date: "FEB 19,2022",
        day: "Wednesday",
        image: flight1,
        name: "Air Asia",
        operator: "Emirates",
        flightDeparture: "7:30 DAC",
        flightTime: "02H 45 M",
        noOfStops: 2,
        price: 2345,
      },

      {
        date: "FEB 19,2022",
        day: "Wednesday",
        image: flight1,
        name: "Air Asia",
        operator: "Emirates",
        flightDeparture: "7:30 DAC",
        flightTime: "02H 45 M",
        noOfStops: 2,
        price: 2345,
      },

      {
        date: "FEB 19,2022",
        day: "Wednesday",
        image: flight1,
        name: "Air Asia",
        operator: "Emirates",
        flightDeparture: "7:30 DAC",
        flightTime: "02H 45 M",
        noOfStops: 2,
        price: 2345,
      },
    ],
  },
  {
    date: "FEB 20,2022",
    day: "Thursday",
    flights: [
      {
        date: "FEB 20,2022",
        day: "Thursday",
        image: flight2,
        name: "Turkish Airlines",
        operator: "Turkey",
        flightDeparture: "9:30 DAC",
        flightTime: "22H 45M",
        noOfStops: 3,
      },
      {
        date: "FEB 20,2022",
        day: "Thursday",
        image: flight2,
        name: "Turkish Airlines",
        operator: "Turkey",
        flightDeparture: "9:30 DAC",
        flightTime: "22H 45M",
        noOfStops: 3,
      },
      {
        date: "FEB 20,2022",
        day: "Thursday",
        image: flight2,
        name: "Turkish Airlines",
        operator: "Turkey",
        flightDeparture: "9:30 DAC",
        flightTime: "22H 45M",
        noOfStops: 3,
      },
      {
        date: "FEB 20,2022",
        day: "Thursday",
        image: flight2,
        name: "Turkish Airlines",
        operator: "Turkey",
        flightDeparture: "9:30 DAC",
        flightTime: "22H 45M",
        noOfStops: 3,
      },
      {
        date: "FEB 20,2022",
        day: "Thursday",
        image: flight2,
        name: "Turkish Airlines",
        operator: "Turkey",
        flightDeparture: "9:30 DAC",
        flightTime: "22H 45M",
        noOfStops: 3,
      },
    ],
  },
  {
    date: "FEB 21,2022",
    day: "Friday",
    flights: [
      {
        date: "FEB 21,2022",
        day: "Friday",
        image: flight1,
        name: "Air Asia",
        operator: "Emirates",
        flightDeparture: "7:30 DAC",
        flightTime: "02H 45 M",
        noOfStops: 2,
        price: 2345,
      },
      {
        date: "FEB 21,2022",
        day: "Friday",
        image: flight1,
        name: "Air Asia",
        operator: "Emirates",
        flightDeparture: "7:30 DAC",
        flightTime: "02H 45 M",
        noOfStops: 2,
        price: 2345,
      },
      {
        date: "FEB 21,2022",
        day: "Friday",
        image: flight1,
        name: "Air Asia",
        operator: "Emirates",
        flightDeparture: "7:30 DAC",
        flightTime: "02H 45 M",
        noOfStops: 2,
        price: 2345,
      },
      {
        date: "FEB 21,2022",
        day: "Friday",
        image: flight1,
        name: "Air Asia",
        operator: "Emirates",
        flightDeparture: "7:30 DAC",
        flightTime: "02H 45 M",
        noOfStops: 2,
        price: 2345,
      },
      {
        date: "FEB 21,2022",
        day: "Friday",
        image: flight1,
        name: "Air Asia",
        operator: "Emirates",
        flightDeparture: "7:30 DAC",
        flightTime: "02H 45 M",
        noOfStops: 2,
        price: 2345,
      },
    ],
  },
];

// car data

export const carData = [
  {
    image: CarImage1,

    location: "Brisbane Airport",
    name: "Mercedes-Benz E-Class",
    users: 4,
    riders: 2,
    type: "Premium",
    key: "automatic",
    rideTime: "unlimited",
    price: 280,
  },
  {
    image: CarImage1,

    location: "Brisbane Airport",
    name: "Mercedes-Benz E-Class",
    users: 4,
    riders: 2,
    type: "Premium",
    key: "automatic",
    rideTime: "unlimited",
    price: 280,
  },
  {
    image: CarImage1,

    location: "Brisbane Airport",
    name: "Mercedes-Benz E-Class",
    users: 4,
    riders: 2,
    type: "Premium",
    key: "automatic",
    rideTime: "unlimited",
    price: 280,
  },
  {
    image: CarImage1,

    location: "Brisbane Airport",
    name: "Mercedes-Benz E-Class",
    users: 4,
    riders: 2,
    type: "Premium",
    key: "automatic",
    rideTime: "unlimited",
    price: 280,
  },
  {
    image: CarImage1,

    location: "Brisbane Airport",
    name: "Mercedes-Benz E-Class",
    users: 4,
    riders: 2,
    type: "Premium",
    key: "automatic",
    rideTime: "unlimited",
    price: 280,
  },
  {
    image: CarImage1,

    location: "Brisbane Airport",
    name: "Mercedes-Benz E-Class",
    users: 4,
    riders: 2,
    type: "Premium",
    key: "automatic",
    rideTime: "unlimited",
    price: 280,
  },
  {
    image: CarImage1,
    location: "Brisbane Airport",
    name: "Mercedes-Benz E-Class",
    users: 4,
    riders: 2,
    type: "Premium",
    key: "automatic",
    rideTime: "unlimited",
    price: 280,
  },
];

// car meta data
export const carMetaData = [
  {
    title: "Active users",
    count: 330,
  },
  {
    title: "TVehicles Listed",
    count: 20,
  },
  {
    title: "Planned Trips",
    count: 1041,
  },
  {
    title: "Cars",
    count: 255,
  },
];

// site 4 metadata

export const site4MetaData = [
  {
    image: site4Meta1,
    title: "700 Destinations",
    description: "Our expert team handpicked all destinations in this site",
  },
  {
    image: site4Meta2,
    title: "Best Price Gurantee",
    description: "Price match within 48 hours of order confirmation",
  },
  {
    image: site4Meta3,
    title: "Top Notch Support",
    description:
      "We are here to help, before, during, and even after your trip.",
  },
];