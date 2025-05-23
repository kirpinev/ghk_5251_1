import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import backDefault from "./assets/back-default.png";
import iconDefault from "./assets/icon-default.png";
import back1 from "./assets/back1.png";
import back2 from "./assets/back2.png";
import back3 from "./assets/back3.png";
import back4 from "./assets/back4.png";
import back5 from "./assets/back5.png";
import back7 from "./assets/back7.png";
import back8 from "./assets/back8.png";
import back9 from "./assets/back9.png";
import back10 from "./assets/back10.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import icon5 from "./assets/icon5.png";
import icon7 from "./assets/icon7.png";
import icon8 from "./assets/icon8.png";
import icon9 from "./assets/icon9.png";
import icon10 from "./assets/icon10.png";
import fon1 from "./assets/fon1.png";
import fon2 from "./assets/fon2.png";
import fon3 from "./assets/fon3.png";
import fon4 from "./assets/fon4.png";
import fon5 from "./assets/fon5.png";
import fon7 from "./assets/fon7.png";
import fon8 from "./assets/fon8.png";
import fon9 from "./assets/fon9.png";
import fon10 from "./assets/fon10.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { sendDataToGA } from "./utils/events.ts";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [backgroundType, setBackgroundType] = useState("0");
  const [iconType, setIconType] = useState("0");
  const [fonType, setFonType] = useState("0");
  const [thx, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const submit = () => {
    setLoading(true);
    sendDataToGA({
      background: fonType,
      icon: iconType,
      screensaver: backgroundType,
      bundle: "0",
    }).then(() => {
      setLoading(false);
      setThx(true);
      LS.setItem(LSKeys.ShowThx, true);
    });
  };

  if (thx) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive
          font="system"
          tag="h3"
          view="medium"
          className={appSt.productsTitle}
        >
          Приложение в вашем стиле
        </Typography.TitleResponsive>
        <Gap size={8} />
        <Typography.Text
          tag="p"
          view="primary-large"
          style={{ marginBottom: 0, padding: "0 1rem" }}
        >
          Оформите приложение под свой характер, вкус и настроение
        </Typography.Text>

        <Gap size={28} />

        <Typography.Text
          tag="p"
          view="primary-large"
          weight="bold"
          style={{ padding: "0 1rem" }}
        >
          Заставки
        </Typography.Text>

        <Swiper
          style={{ marginLeft: "1px", marginRight: "1px" }}
          spaceBetween={8}
          slidesPerView="auto"
        >
          <SwiperSlide
            onClick={() => setBackgroundType("0")}
            style={{ width: "80px", marginLeft: "16px" }}
          >
            <img
              src={backDefault}
              width={80}
              height={136}
              className={appSt.imageSlide({
                selected: backgroundType === "0",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setBackgroundType("1")}
            style={{ width: "80px" }}
          >
            <img
              src={back1}
              width={80}
              height={136}
              className={appSt.imageSlide({
                selected: backgroundType === "1",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setBackgroundType("2")}
            style={{
              width: "80px",
            }}
          >
            <img
              src={back2}
              width={80}
              height={136}
              className={appSt.imageSlide({
                selected: backgroundType === "2",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setBackgroundType("3")}
            style={{ width: "80px" }}
          >
            <img
              src={back3}
              width={80}
              height={136}
              className={appSt.imageSlide({
                selected: backgroundType === "3",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setBackgroundType("4")}
            style={{ width: "80px" }}
          >
            <img
              src={back4}
              width={80}
              height={136}
              className={appSt.imageSlide({
                selected: backgroundType === "4",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setBackgroundType("5")}
            style={{ width: "80px" }}
          >
            <img
              src={back5}
              width={80}
              height={136}
              className={appSt.imageSlide({
                selected: backgroundType === "5",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setBackgroundType("6")}
            style={{ width: "80px" }}
          >
            <img
              src={back7}
              width={80}
              height={136}
              className={appSt.imageSlide({
                selected: backgroundType === "6",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setBackgroundType("7")}
            style={{ width: "80px" }}
          >
            <img
              src={back8}
              width={80}
              height={136}
              className={appSt.imageSlide({
                selected: backgroundType === "7",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setBackgroundType("8")}
            style={{ width: "80px" }}
          >
            <img
              src={back9}
              width={80}
              height={136}
              className={appSt.imageSlide({
                selected: backgroundType === "8",
              })}
              alt=""
            />
            <Typography.Text
              tag="p"
              view="primary-medium"
              weight="bold"
              style={{ textAlign: "center", marginBottom: 0 }}
            >
              49₽
            </Typography.Text>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setBackgroundType("9")}
            style={{ width: "80px" }}
          >
            <img
              src={back10}
              width={80}
              height={136}
              className={appSt.imageSlide({
                selected: backgroundType === "9",
              })}
              alt=""
            />
            <Typography.Text
              tag="p"
              view="primary-medium"
              weight="bold"
              style={{ textAlign: "center", marginBottom: 0 }}
            >
              49₽
            </Typography.Text>
          </SwiperSlide>
        </Swiper>

        <Gap size={8} />

        <Typography.Text
          tag="p"
          view="primary-large"
          weight="bold"
          style={{ padding: "0 1rem" }}
        >
          Иконки
        </Typography.Text>

        <Swiper
          style={{ marginLeft: "1px", marginRight: "1px" }}
          spaceBetween={8}
          slidesPerView="auto"
        >
          <SwiperSlide
            onClick={() => setIconType("0")}
            style={{ width: "88px", marginLeft: "16px" }}
          >
            <img
              src={iconDefault}
              width={88}
              height={88}
              className={appSt.iconSlide({
                selected: iconType === "0",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setIconType("1")}
            style={{ width: "88px" }}
          >
            <img
              src={icon1}
              width={88}
              height={88}
              className={appSt.iconSlide({
                selected: iconType === "1",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setIconType("2")}
            style={{ width: "88px" }}
          >
            <img
              src={icon2}
              width={88}
              height={88}
              className={appSt.iconSlide({
                selected: iconType === "2",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setIconType("3")}
            style={{ width: "88px" }}
          >
            <img
              src={icon3}
              width={88}
              height={88}
              className={appSt.iconSlide({
                selected: iconType === "3",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setIconType("4")}
            style={{ width: "88px" }}
          >
            <img
              src={icon4}
              width={88}
              height={88}
              className={appSt.iconSlide({
                selected: iconType === "4",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setIconType("5")}
            style={{ width: "88px" }}
          >
            <img
              src={icon5}
              width={88}
              height={88}
              className={appSt.iconSlide({
                selected: iconType === "5",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setIconType("6")}
            style={{ width: "88px" }}
          >
            <img
              src={icon7}
              width={88}
              height={88}
              className={appSt.iconSlide({
                selected: iconType === "6",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setIconType("7")}
            style={{ width: "88px" }}
          >
            <img
              src={icon8}
              width={88}
              height={88}
              className={appSt.iconSlide({
                selected: iconType === "7",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setIconType("8")}
            style={{ width: "88px" }}
          >
            <img
              src={icon9}
              width={88}
              height={88}
              className={appSt.iconSlide({
                selected: iconType === "8",
              })}
              alt=""
            />
            <Typography.Text
              tag="p"
              view="primary-medium"
              weight="bold"
              style={{ textAlign: "center", marginBottom: 0 }}
            >
              49₽
            </Typography.Text>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setIconType("9")}
            style={{ width: "88px" }}
          >
            <img
              src={icon10}
              width={88}
              height={88}
              className={appSt.iconSlide({
                selected: iconType === "9",
              })}
              alt=""
            />
            <Typography.Text
              tag="p"
              view="primary-medium"
              weight="bold"
              style={{ textAlign: "center", marginBottom: 0 }}
            >
              49₽
            </Typography.Text>
          </SwiperSlide>
        </Swiper>

        <Gap size={8} />

        <Typography.Text
          tag="p"
          view="primary-large"
          weight="bold"
          style={{ padding: "0 1rem" }}
        >
          Фоны
        </Typography.Text>

        <Swiper
          style={{ marginLeft: "1px", marginRight: "1px" }}
          spaceBetween={8}
          slidesPerView="auto"
        >
          <SwiperSlide
            onClick={() => setFonType("0")}
            style={{ width: "80px", marginLeft: "16px" }}
          >
            <img
              src={backDefault}
              width={80}
              height={136}
              className={appSt.imageSlide({
                selected: fonType === "0",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setFonType("1")}
            style={{ width: "80px" }}
          >
            <img
              src={fon1}
              width={80}
              height={136}
              className={appSt.imageSlide({
                selected: fonType === "1",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setFonType("2")}
            style={{
              width: "80px",
            }}
          >
            <img
              src={fon2}
              width={80}
              height={136}
              className={appSt.imageSlide({
                selected: fonType === "2",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setFonType("3")}
            style={{ width: "80px" }}
          >
            <img
              src={fon3}
              width={80}
              height={136}
              className={appSt.imageSlide({
                selected: fonType === "3",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setFonType("4")}
            style={{ width: "80px" }}
          >
            <img
              src={fon4}
              width={80}
              height={136}
              className={appSt.imageSlide({
                selected: fonType === "4",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setFonType("5")}
            style={{ width: "80px" }}
          >
            <img
              src={fon5}
              width={80}
              height={136}
              className={appSt.imageSlide({
                selected: fonType === "5",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setFonType("6")}
            style={{ width: "80px" }}
          >
            <img
              src={fon7}
              width={80}
              height={136}
              className={appSt.imageSlide({
                selected: fonType === "6",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setFonType("7")}
            style={{ width: "80px" }}
          >
            <img
              src={fon8}
              width={80}
              height={136}
              className={appSt.imageSlide({
                selected: fonType === "7",
              })}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setFonType("8")}
            style={{ width: "80px" }}
          >
            <img
              src={fon9}
              width={80}
              height={136}
              className={appSt.imageSlide({
                selected: fonType === "8",
              })}
              alt=""
            />
            <Typography.Text
              tag="p"
              view="primary-medium"
              weight="bold"
              style={{ textAlign: "center", marginBottom: 0 }}
            >
              49₽
            </Typography.Text>
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setFonType("9")}
            style={{ width: "80px" }}
          >
            <img
              src={fon10}
              width={80}
              height={136}
              className={appSt.imageSlide({
                selected: fonType === "9",
              })}
              alt=""
            />
            <Typography.Text
              tag="p"
              view="primary-medium"
              weight="bold"
              style={{ textAlign: "center", marginBottom: 0 }}
            >
              49₽
            </Typography.Text>
          </SwiperSlide>
        </Swiper>
      </div>

      <Gap size={96} />

      <div className={appSt.bottomBtnThx}>
        <ButtonMobile loading={loading} onClick={submit} block view="primary">
          Сделать красиво
        </ButtonMobile>
      </div>
    </>
  );
};
