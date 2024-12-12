import React, { useState } from "react";
import { Card, Button } from "@chakra-ui/react";
import classes from "./CardItem.module.scss";
import { CSSTransition } from "react-transition-group";

import figureOne from "../../assets/figure/notActive/1.png";
import figureOneHover from "../../assets/figure/active/1.png";
import figureSecond from "../../assets/figure/notActive/2.png";
import figureSecondHover from "../../assets/figure/active/2.png";
import figureThree from "../../assets/figure/notActive/3.png";
import figureThreeHover from "../../assets/figure/active/3.png";
import figureFor from "../../assets/figure/notActive/4.png";
import figureForHover from "../../assets/figure/active/4.png";
import figureFive from "../../assets/figure/notActive/5.png";
import figureFiveHover from "../../assets/figure/active/5.png";
import figureSix from "../../assets/figure/notActive/6.png";
import figureSixHover from "../../assets/figure/active/6.png";
import figureSeven from "../../assets/figure/notActive/7.png";
import figureSevenHover from "../../assets/figure/active/7.png";
import figureEight from "../../assets/figure/notActive/8.png";
import figureEightHover from "../../assets/figure/active/8.png";
import figureNine from "../../assets/figure/notActive/9.png";
import figureNineHover from "../../assets/figure/active/9.png";
import figureTen from "../../assets/figure/notActive/10.png";
import figureTenHover from "../../assets/figure/active/10.png";
import figureEleven from "../../assets/figure/notActive/11.png";
import figureElevenHover from "../../assets/figure/active/11.png";
import figureTwelve from "../../assets/figure/notActive/12.png";
import figureTwelveHover from "../../assets/figure/active/12.png";
import figureThirteen from "../../assets/figure/notActive/13.png";
import figureThirteenHover from "../../assets/figure/active/13.png";
import figureFourteen from "../../assets/figure/notActive/14.png";
import figureFourteenHover from "../../assets/figure/active/14.png";
import figureFifteen from "../../assets/figure/notActive/15.png";
import figureFifteenHover from "../../assets/figure/active/15.png";
import figureSixteen from "../../assets/figure/notActive/16.png";
import figureSixteenHover from "../../assets/figure/active/16.png";
import figureSeventeen from "../../assets/figure/notActive/17.png";
import figureSeventeenHover from "../../assets/figure/active/17.png";
import figureEighteen from "../../assets/figure/notActive/18.png";
import figureEighteenHover from "../../assets/figure/active/18.png";
import figureNineteen from "../../assets/figure/notActive/19.png";
import figureNineteenHover from "../../assets/figure/active/19.png";
import figureTwenty from "../../assets/figure/notActive/20.png";
import figureTwentyHover from "../../assets/figure/active/20.png";

import { useTranslation } from "react-i18next";

const imagesMap = {
  "figure-1": {
    default: figureOne,
    hover: figureOneHover,
  },
  "figure-2": {
    default: figureSecond,
    hover: figureSecondHover,
  },
  "figure-3": {
    default: figureThree,
    hover: figureThreeHover,
  },
  "figure-4": {
    default: figureFor,
    hover: figureForHover,
  },
  "figure-5": {
    default: figureFive,
    hover: figureFiveHover,
  },
  "figure-6": {
    default: figureSix,
    hover: figureSixHover,
  },
  "figure-7": {
    default: figureSeven,
    hover: figureSevenHover,
  },
  "figure-8": {
    default: figureEight,
    hover: figureEightHover,
  },
  "figure-9": {
    default: figureNine,
    hover: figureNineHover,
  },
  "figure-10": {
    default: figureTen,
    hover: figureTenHover,
  },
  "figure-11": {
    default: figureEleven,
    hover: figureElevenHover,
  },
  "figure-12": {
    default: figureTwelve,
    hover: figureTwelveHover,
  },
  "figure-13": {
    default: figureThirteen,
    hover: figureThirteenHover,
  },
  "figure-14": {
    default: figureFourteen,
    hover: figureFourteenHover,
  },
  "figure-15": {
    default: figureFifteen,
    hover: figureFifteenHover,
  },
  "figure-16": {
    default: figureSixteen,
    hover: figureSixteenHover,
  },
  "figure-17": {
    default: figureSeventeen,
    hover: figureSeventeenHover,
  },
  "figure-18": {
    default: figureEighteen,
    hover: figureEighteenHover,
  },
  "figure-19": {
    default: figureNineteen,
    hover: figureNineteenHover,
  },
  "figure-20": {
    default: figureTwenty,
    hover: figureTwentyHover,
  },
};

export const CardItem = ({
  title,
  handleClick,
  cardId,
  tags,
  activeCard,
  blockIndex,
  descriprionText,
  figureType,
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isFullTextVisible, setIsFullTextVisible] = useState(false);

  const currentFigure = imagesMap[figureType];

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseClick = () => {
    setIsFullTextVisible((prev) => {
      return !prev;
    });
  };

  return (
    <div>
      <Card.Root
        onClick={() => {
          setIsOpen((prev) => !prev);
          handleClick(blockIndex, cardId);
          handleMouseClick();
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={` ${classes.fon}  card__item animated-box  ${
          isOpen ? classes.open : ""
        } ${classes.item}  ${
          activeCard.blockIndex === blockIndex && cardId > activeCard.id
            ? `${classes.animate}`
            : ""
        } `}
        width="320px"
      >
        <div className={classes.card__wrapper}></div>

        <Card.Body className={classes.card__body} gap="2">
          <div>
            <div
              className={`${classes.card__header} ${
                isOpen ? classes.visible : ""
              }`}
            >
              {tags.map((value, idx) => {
                return (
                  <a key={idx + value} href="#">
                    {value}
                  </a>
                );
              })}
            </div>

            <Card.Title className={classes.title} mt="2">
              {title}
            </Card.Title>
          </div>

          <Card.Description
            className={` ${classes.wrapper__desc} ${
              isFullTextVisible ? classes.expanded : ""
            }`}
          >
            <p className={classes.desc}>
              {isFullTextVisible
                ? descriprionText
                : `${descriprionText.slice(0, 70)}...`}
            </p>
          </Card.Description>
        </Card.Body>
        <Card.Footer className={classes.footer__card} justifyContent="flex-end">
          <div className={classes.card__img}>
            <img
              src={currentFigure.default}
              alt="Default"
              className={`image ${
                isHovered ? `${classes.fade}` : `${classes.fadeIn}`
              }
              ${isOpen ? `${classes.fadeIn}` : `${classes.fade}`}
              `}
            />
            <img
              src={currentFigure.hover}
              alt="Hovered"
              className={`${classes.image2} ${
                isHovered ? `${classes.fadeIn}` : `${classes.fade}`
              } 
              ${isOpen ? `${classes.fadeIn}` : `${classes.fade}`}
               `}
            />
          </div>
          <div className={classes.btn__wrapper}>
            <svg
              className={classes.tl}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.998078 1H15.999V0H0.49855V0.499985L-0.00192261 0.499985V16.0005H0.998077L0.998078 1Z"
                fill="#F5F5F5"
              />
            </svg>
            <svg
              className={classes.tr}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.998078 1H15.999V0H0.49855V0.499985L-0.00192261 0.499985V16.0005H0.998077L0.998078 1Z"
                fill="#F5F5F5"
              />
            </svg>
            <svg
              className={classes.bl}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.998078 1H15.999V0H0.49855V0.499985L-0.00192261 0.499985V16.0005H0.998077L0.998078 1Z"
                fill="#F5F5F5"
              />
            </svg>
            <svg
              className={classes.br}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.998078 1H15.999V0H0.49855V0.499985L-0.00192261 0.499985V16.0005H0.998077L0.998078 1Z"
                fill="#F5F5F5"
              />
            </svg>
            <button className={classes.btn}>
              {t("btn.DiscussProject")}
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.49978 11.25H20.6885L17.471 8.02874C17.3482 7.88526 17.284 7.7007 17.2912 7.51195C17.2985 7.32319 17.3768 7.14414 17.5104 7.01056C17.6439 6.87699 17.823 6.79874 18.0117 6.79145C18.2005 6.78416 18.3851 6.84837 18.5285 6.97124L23.0285 11.4712C23.1167 11.5578 23.1828 11.6643 23.2213 11.7818C23.2598 11.8993 23.2696 12.0242 23.2498 12.1462C23.2159 12.2875 23.1447 12.417 23.0435 12.5212L18.5435 17.0212C18.4763 17.0997 18.3936 17.1635 18.3005 17.2085C18.2075 17.2535 18.1061 17.2788 18.0028 17.2828C17.8995 17.2868 17.7965 17.2694 17.7003 17.2317C17.604 17.194 17.5166 17.1368 17.4435 17.0637C17.3704 16.9906 17.3133 16.9032 17.2755 16.807C17.2378 16.7107 17.2204 16.6077 17.2244 16.5044C17.2284 16.4012 17.2537 16.2998 17.2987 16.2068C17.3438 16.1137 17.4075 16.031 17.486 15.9637L20.6885 12.75H1.49978C1.30086 12.75 1.1101 12.671 0.969446 12.5303C0.828793 12.3897 0.749777 12.1989 0.749777 12C0.749777 11.8011 0.828793 11.6103 0.969446 11.4697C1.1101 11.329 1.30086 11.25 1.49978 11.25Z"
                    fill="#F5F5F5"
                  />
                </svg>
              </span>
            </button>
          </div>
        </Card.Footer>
      </Card.Root>
    </div>
  );
};
