import React, { useState, useEffect } from "react";
import ImageBg from "../../assets/bgBig.png";
import classes from "./MainPage.module.scss";
import CircularProgress from "@mui/material/CircularProgress";
import "./MainPage.module.scss";
import { CardItem } from "../../components/CardItem/CardItem";
import { Header } from "../../components/Header/Header";
import { ModalForm } from "../../components/ModalForm/ModalForm";
import { ButtonTs } from "../../ui/MainUi/ButtonTs";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "../../i18n/i18n";

function MainPage() {
  const { t } = useTranslation();

  const [actualList, setActualList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://nodeserver-production-f98a.up.railway.app/"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        setActualList(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    if (!actualList.length) return; // Ждем загрузки actualList

    updateCardData();

    window.addEventListener("resize", updateCardData);
    return () => {
      window.removeEventListener("resize", updateCardData);
    };
  }, [actualList]);

  const updateCardData = () => {
    if (window.innerWidth > 0 && window.innerWidth < 551) {
      showCards(1);
    } else if (window.innerWidth > 927 && window.innerWidth < 1408) {
      showCards(2);
    } else {
      showCards(3);
    }
  };

  function showCards(num) {
    const cardDataPc = actualList.reduce((acc, item, index) => {
      const groupIndex = index % num;
      if (!acc[groupIndex]) {
        acc[groupIndex] = [];
      }
      acc[groupIndex].push(item);
      return acc;
    }, []);

    setCardData(cardDataPc);
  }

  const [activeCard, setActiveCard] = useState({ blockIndex: null, id: null });
  const handleClick = (blockIndex, id) => {
    setActiveCard({ blockIndex, id });
    setTimeout(() => setActiveCard({ blockIndex: null, id: null }), 500);
  };

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClickOpen = () => {
    setIsOpenModal(true);
  };

  const handleClose = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={classes.main__wrapper}>
      <div className={classes.main__wrapper_bg}>
        <img src={ImageBg} alt="" />
      </div>
      <div className={classes.container}>
        <Header />
        <div className={classes.main__wrapper_title}>
          <div className={classes.title__block}>
            <h1>
              DIGITAL TO TRUST <br />
              MEETS TECH
            </h1>
            <div className={classes.btn_main}>
              <ButtonTs
                text={t("btn.bigBtnText")}
                handleClickOpen={handleClickOpen}
                iconTG={
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="56" height="56" rx="28" fill="#EBEBEB" />
                    <path
                      d="M37.4663 18.7402C34.4584 19.9858 21.5615 25.3279 17.998 26.784C15.6081 27.7166 17.007 28.591 17.007 28.591C17.007 28.591 19.047 29.2903 20.7957 29.815C22.5443 30.3396 23.4769 29.7566 23.4769 29.7566L31.6955 24.2191C34.6098 22.2374 33.9105 23.8694 33.2111 24.5688C31.6955 26.0844 29.1892 28.4741 27.0909 30.3977C26.1582 31.2137 26.6245 31.9133 27.0325 32.263C28.5481 33.5453 32.6865 36.1682 32.9197 36.3432C34.1512 37.2149 36.5733 38.4698 36.9417 35.8186L38.3989 26.6674C38.8653 23.5781 39.3316 20.7218 39.3899 19.9058C39.5646 17.9242 37.4663 18.7402 37.4663 18.7402Z"
                      fill="#333333"
                    />
                  </svg>
                }
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.999932 7.49995H13.7924L11.6474 5.35245C11.5655 5.2568 11.5227 5.13376 11.5276 5.00792C11.5324 4.88209 11.5846 4.76272 11.6737 4.67367C11.7627 4.58462 11.8821 4.53246 12.0079 4.52759C12.1337 4.52273 12.2568 4.56554 12.3524 4.64745L15.3524 7.64745C15.4112 7.70519 15.4553 7.77619 15.481 7.85449C15.5066 7.93279 15.5131 8.01611 15.4999 8.09745C15.4773 8.1916 15.4299 8.27795 15.3624 8.34745L12.3624 11.3475C12.3176 11.3998 12.2624 11.4423 12.2004 11.4723C12.1384 11.5023 12.0708 11.5192 12.002 11.5218C11.9331 11.5245 11.8644 11.5129 11.8003 11.4878C11.7361 11.4626 11.6778 11.4245 11.6291 11.3758C11.5804 11.327 11.5423 11.2688 11.5171 11.2046C11.492 11.1404 11.4804 11.0718 11.483 11.0029C11.4857 10.9341 11.5026 10.8665 11.5326 10.8045C11.5626 10.7424 11.6051 10.6873 11.6574 10.6425L13.7924 8.49995H0.999932C0.867324 8.49995 0.740147 8.44727 0.646379 8.3535C0.55261 8.25974 0.499932 8.13256 0.499932 7.99995C0.499932 7.86734 0.55261 7.74017 0.646379 7.6464C0.740147 7.55263 0.867324 7.49995 0.999932 7.49995Z"
                      fill="#F5F5F5"
                    />
                  </svg>
                }
              />
            </div>
          </div>

          <div className={classes.maint__title_desc}>
            <p>{t("High quality product and service")}</p>
          </div>
        </div>
        <div className={classes.wrapper}>
          {cardData.map((block, blockIndex) => (
            <div className={classes.flex__position} key={blockIndex}>
              {loading ? (
                <div className={classes.main__content_progress}>
                  <CircularProgress />
                </div>
              ) : (
                block.map((card, idx) => {
                  return (
                    <CardItem
                      key={card.id}
                      cardId={card.id}
                      title={card.title[i18next.language]}
                      descriprionText={card.description[i18next.language]}
                      tags={card.tags[i18next.language]}
                      activeCard={activeCard}
                      blockIndex={blockIndex}
                      handleClick={handleClick}
                      figureType={card.figure}
                    />
                  );
                })
              )}
            </div>
          ))}
        </div>
      </div>

      <ModalForm isOpenModal={isOpenModal} handleClose={handleClose} />
    </div>
  );
}

export default MainPage;
