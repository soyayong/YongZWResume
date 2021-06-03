import React from "react";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import KitchenIcon from "@material-ui/icons/Kitchen";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import BookIcon from "@material-ui/icons/Book";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";

const interest = [
  {
    src: "https://filedn.com/lzQz4YwK2qQSa8Al3y8Jwsk/Resume%20Image/cook.jpg",
    alt: "First slide",
    icon: <KitchenIcon fontSize="large" />,
    title: "Cooking",
    detail:
      "My daily dish <Yummy>, trying new dish when free -- 美食无法抗拒就从烹饪开始"
  },
  {
    src:
      "https://filedn.com/lzQz4YwK2qQSa8Al3y8Jwsk/Resume%20Image/cycling.jpg",
    alt: "Second slide",
    icon: <DirectionsBikeIcon fontSize="large" />,
    title: "Cycling",
    detail:
      "Start from 2018 and enjoy cycling with my road bike -- 享受骑公路自行车的快感"
  },
  {
    src:
      "https://filedn.com/lzQz4YwK2qQSa8Al3y8Jwsk/Resume%20Image/hiking.jpeg",
    alt: "Third slide",
    icon: <FilterHdrIcon fontSize="large" />,
    title: "Hiking",
    detail: "Enjoy nature life -- 享受大自然"
  },
  {
    src:
      "https://filedn.com/lzQz4YwK2qQSa8Al3y8Jwsk/Resume%20Image/reading.jpg",
    alt: "Fourth slide",
    icon: <BookIcon fontSize="large" />,
    title: "Reading",
    detail: "Reading has improved my quality of life -- 读书破万卷，下笔如有神"
  },
  {
    src: "https://filedn.com/lzQz4YwK2qQSa8Al3y8Jwsk/Resume%20Image/travel.jpg",
    alt: "Fiveth slide",
    icon: <FlightTakeoffIcon fontSize="large" />,
    title: "Traveling",
    detail: "Travel somewhere that haven't explored yet -- 只想留下一句到此一游"
  }
];

export default interest;
