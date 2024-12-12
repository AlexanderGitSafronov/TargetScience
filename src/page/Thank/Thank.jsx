import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import classes from "./Thank.module.scss";
import ImageBg from "../../assets/bgBig.png";
import { ButtonTs } from "../../ui/MainUi/ButtonTs";
import { BtnTransparent } from "../../ui/BtnTransparent/BtnTransparent";
import { InfoBlock } from "../../components/Thank/InfoBlock";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
export const Thank = () => {
  const { t } = useTranslation();

  const textInfo = [
    t("thank.textInfo1"),
    t("thank.textInfo2"),
    t("thank.textInfo3"),
    t("thank.textInfo4"),
  ];

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 479);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={classes.main__wrapper}>
      <img className={classes.main__wrapper_bg} src={ImageBg} alt="" />

      <div className={classes.container}>
        <div className={classes.container_top}>
          <Header />

          <Link to="/">
            <ButtonTs
              className={classes.btn_main}
              thank="open"
              text={t("btn.bigBtnTextThank")}
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1575_1639)">
                    <path
                      d="M7.65067 10C7.47386 10 7.30429 10.0702 7.17926 10.1953C7.05424 10.3203 6.984 10.4899 6.984 10.6667V12.6667C6.984 13.1971 6.77329 13.7058 6.39821 14.0809C6.02314 14.456 5.51443 14.6667 4.984 14.6667H3.33333C2.8029 14.6667 2.29419 14.456 1.91912 14.0809C1.54405 13.7058 1.33333 13.1971 1.33333 12.6667V3.33333C1.33333 2.8029 1.54405 2.29419 1.91912 1.91912C2.29419 1.54405 2.8029 1.33333 3.33333 1.33333H4.984C5.51443 1.33333 6.02314 1.54405 6.39821 1.91912C6.77329 2.29419 6.984 2.8029 6.984 3.33333V5.33333C6.984 5.51014 7.05424 5.67971 7.17926 5.80474C7.30429 5.92976 7.47386 6 7.65067 6C7.82748 6 7.99705 5.92976 8.12207 5.80474C8.2471 5.67971 8.31733 5.51014 8.31733 5.33333V3.33333C8.31627 2.4496 7.96475 1.60237 7.33985 0.97748C6.71496 0.352588 5.86773 0.00105857 4.984 0H3.33333C2.4496 0.00105857 1.60237 0.352588 0.97748 0.97748C0.352588 1.60237 0.00105857 2.4496 0 3.33333L0 12.6667C0.00105857 13.5504 0.352588 14.3976 0.97748 15.0225C1.60237 15.6474 2.4496 15.9989 3.33333 16H4.984C5.86773 15.9989 6.71496 15.6474 7.33985 15.0225C7.96475 14.3976 8.31627 13.5504 8.31733 12.6667V10.6667C8.31733 10.4899 8.2471 10.3203 8.12207 10.1953C7.99705 10.0702 7.82748 10 7.65067 10Z"
                      fill="white"
                    />
                    <path
                      d="M15.2448 6.58618L12.1875 3.52884C12.126 3.46517 12.0524 3.41438 11.9711 3.37944C11.8898 3.3445 11.8023 3.32611 11.7138 3.32534C11.6252 3.32457 11.5375 3.34144 11.4555 3.37496C11.3736 3.40848 11.2992 3.45798 11.2366 3.52058C11.174 3.58317 11.1245 3.65761 11.0909 3.73954C11.0574 3.82147 11.0406 3.90926 11.0413 3.99778C11.0421 4.0863 11.0605 4.17378 11.0954 4.25511C11.1304 4.33645 11.1812 4.41001 11.2448 4.47151L14.0868 7.31351L4.00016 7.33351C3.82335 7.33351 3.65378 7.40375 3.52876 7.52877C3.40373 7.6538 3.3335 7.82337 3.3335 8.00018C3.3335 8.17699 3.40373 8.34656 3.52876 8.47158C3.65378 8.5966 3.82335 8.66684 4.00016 8.66684L14.1255 8.64684L11.2435 11.5288C11.1798 11.5903 11.129 11.6639 11.0941 11.7452C11.0592 11.8266 11.0408 11.9141 11.04 12.0026C11.0392 12.0911 11.0561 12.1789 11.0896 12.2608C11.1231 12.3427 11.1726 12.4172 11.2352 12.4798C11.2978 12.5424 11.3723 12.5919 11.4542 12.6254C11.5361 12.6589 11.6239 12.6758 11.7124 12.675C11.801 12.6742 11.8884 12.6558 11.9698 12.6209C12.0511 12.586 12.1247 12.5352 12.1862 12.4715L15.2435 9.41418C15.6186 9.0393 15.8295 8.53078 15.8297 8.00045C15.83 7.47012 15.6196 6.96141 15.2448 6.58618Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1575_1639">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
            />
          </Link>
        </div>

        <div className={classes.container_bottom}>
          <div className={classes.wrapper}>
            <div className={classes.title__block}>
              <h1>
                <Trans i18nKey="thank.thankTaxt"></Trans>
              </h1>
              {isMobile ? (
                <p>
                  <Trans i18nKey="thank.descPc"></Trans>
                </p>
              ) : (
                <p>
                  <Trans i18nKey="thank.descMb"></Trans>
                </p>
              )}

              <div className={classes.btn__wrapper}>
                <BtnTransparent color="#E3331F" />
              </div>
            </div>
          </div>

          <div className={classes.footer}>
            <div className={classes.footer_top}>
              <p>{t("thank.service")}</p>
            </div>
            <div className={classes.footer_content}>
              {textInfo.map((value) => {
                return <InfoBlock text={value} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
