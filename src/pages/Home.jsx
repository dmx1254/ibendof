import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useSelector, useDispatch } from "react-redux";

import dofuskamas from "../assets/product-imageandlogo/dofus-kamas.png";

import useStyles from "./homeStyle";

import { Helmet } from "react-helmet";

import CookieConsent from "react-cookie-consent";

import { addNewCookState } from "../features/cookieSlices";

import secure from "../assets/service/secure.png";
import express from "../assets/service/express.png";
import best_price from "../assets/service/best_price.png";
import support from "../assets/service/support.png";
import retour from "../assets/service/return.png";
import SingleProduct from "../components/SingleProduct";
import { FaqsSection } from "../components";
import axios from "axios";
import { addServers } from "../features/serverList";
import { addProducts } from "../features/productSlices";
import { addCurrencyVal } from "../features/currencyExchange";
import { Link } from "react-router-dom";

import { addNewIp } from "../features/ipSlice";
import { addNewCurrencyExchange } from "../features/currencyExchange";
import { addToggleState } from "../features/toggleIpSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { currency } = useSelector((state) => state.currency);

  const { products } = useSelector((state) => state.products);

  const { loading } = useSelector((state) => state.products);

  const { cook } = useSelector((state) => state.cook);

  const { ipAddr } = useSelector((state) => state.ipAddr);

  const { toggleIp } = useSelector((state) => state.toggleIp);

  let [screenSize, setScreenSize] = useState(window.innerWidth);

  const [location, setLocation] = useState(null);

  const [ipAdress, setIpAdress] = useState("");

  // console.log(toggleIp);

  // console.log(ipAddr);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setLocation(position.coords);
  //   });
  // }, []);

  useEffect(() => {
    const getGeoLocate = async () => {
      await axios
        .get("https://api.ipify.org?format=json")
        .then((res) => setIpAdress(res?.data?.ip))
        .catch((error) => console.log(error));
      // fetch('https://api.ipify.org?format=json')
      // .then(response => response.json())
      // .then(data => console.log(data.ip))
      // .catch(error => console.error(error));
    };
    getGeoLocate();
  }, []);

  useEffect(() => {
    if (!toggleIp) {
      if (ipAdress) {
        const getCountry = async () => {
          await axios
            .get(`https://ipapi.co/${ipAdress}/json/`)
            .then((res) => {
              dispatch(addNewIp(res?.data?.country_name));
              dispatch(addToggleState(true));
            })
            .catch((error) => console.log(error));
        };
        getCountry();
      }
    }
  }, [toggleIp, ipAdress, dispatch]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      await axios
        .get(`${process.env.REACT_APP_CLIENT_URL}/products`)
        .then((res) => {
          dispatch(addProducts(res.data));
        });
    };
    fetchAllProducts();
  }, [dispatch]);

  useEffect(() => {
    const fetchEuro = async () => {
      await axios
        .get(`${process.env.REACT_APP_CLIENT_URL}/euro`)
        .then((res) => dispatch(addCurrencyVal(res?.data[0]?.euro)))
        .catch((error) => console.log(error));
    };
    fetchEuro();
  }, [dispatch]);

  useEffect(() => {
    const getServers = async () => {
      await axios
        .get(`${process.env.REACT_APP_CLIENT_URL}/server`)
        .then((res) => dispatch(addServers(res.data)));
    };
    getServers();
  }, [dispatch]);

  const { language } = useSelector((state) => state.language);

  const classes = useStyles();

  useEffect(() => {
    if (ipAddr === "Morocco") {
      dispatch(addNewCurrencyExchange("mad"));
    } else {
      dispatch(addNewCurrencyExchange("euro"));
    }
  }, [ipAddr, dispatch]);

  const handleAcceptCookie = () => {
    dispatch(addNewCookState(false));
  };
  const handleDeclineCookie = () => {
    dispatch(addNewCookState(false));
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    try {
      axios({
        method: "get",
        url: `${process.env.REACT_APP_CLIENT_URL}/${currency}`,
      }).then((res) => {
        if (currency === "euro") {
          dispatch(addCurrencyVal(res?.data[0]?.euro));
        } else if (currency === "gbp") {
          dispatch(addCurrencyVal(res?.data[0]?.gbp));
        } else if (currency === "usdt") {
          dispatch(addCurrencyVal(res?.data[0]?.usdt));
        } else if (currency === "dollar") {
          dispatch(addCurrencyVal(res?.data[0]?.dollar));
        } else if (currency === "cad") {
          dispatch(addCurrencyVal(res?.data[0]?.cad));
        } else if (currency === "chf") {
          dispatch(addCurrencyVal(res?.data[0]?.chf));
        } else if (currency === "rub") {
          dispatch(addCurrencyVal(res?.data[0]?.rub));
        } else if (currency === "mad") {
          dispatch(addCurrencyVal(res?.data[0]?.mad));
        } else {
          dispatch(addCurrencyVal(res?.data[0]?.euro));
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, [currency, dispatch]);

  return (
    <div>
      <Helmet>
        <title>
          Acheter Dofus, Dofus Touch, et Dofus Retro ?? des prix imbattables sur
          ibytrade
        </title>
      </Helmet>
      <Helmet>
        <title>
          Acheter Dofus, Dofus Touch, et Dofus Retro ?? des prix imbattables sur
          ibytrade
        </title>
        <meta
          property="og:title"
          content=" Acheter Dofus, Dofus Touch, et Dofus retro"
        />
        <meta
          property="og:description"
          content=" Acheter Dofus, Dofus Touch, et Dofus Retro ?? des prix imbattables sur
          ibytrade"
        />
        <meta property="og:image" content={dofuskamas} />
        <meta
          property="og:url"
          content="https://ibytrade.com/dofus/dofus-kamas"
        />
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="https://ibytrade.com" />
      </Helmet>
      <Container
        maxWidth="xl"
        sx={{
          padding: "20px 0px",
        }}
        className={classes.container}
      >
        {loading ? (
          <div className="home-skeleton">
            <div>
              <Skeleton
                height="250px"
                width={screenSize < 416 ? "320px" : "400px"}
              />
              <Skeleton
                count={1}
                width={screenSize < 416 ? "320px" : "400px"}
                height="52px"
              />
            </div>
            <div>
              <Skeleton
                height="250px"
                width={screenSize < 416 ? "320px" : "400px"}
              />
              <Skeleton
                count={1}
                width={screenSize < 416 ? "320px" : "400px"}
                height="52px"
              />
            </div>
            <div>
              <Skeleton
                height="250px"
                width={screenSize < 416 ? "320px" : "400px"}
              />
              <Skeleton
                count={1}
                width={screenSize < 416 ? "320px" : "400px"}
                height="52px"
              />
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
              margin: "0px 10px",
            }}
          >
            {products?.map((data) => (
              <SingleProduct data={data} key={data._id} />
            ))}
          </div>
        )}
      </Container>

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
          margin: "60px 0px",
        }}
        className="homepage-service"
      >
        <div className="card-content">
          <img src={secure} alt="paiement securise" />
          <h4>
            {language === "anglais" && "Secure payment"}
            {language === "espagnol" && "Pago seguro"}
            {language === "francais" && "Paiement s??curis??"}
          </h4>
          <span>
            {language === "anglais" &&
              "System of online payment secure and recommended by our users."}
            {language === "espagnol" &&
              "Sistema seguro de pago en l??nea probado por todos nuestros usuarios."}
            {language === "francais" &&
              " Syst??me de paiement en ligne s??curis?? ??prouv?? par tous nos utilisateurs."}
          </span>
        </div>
        <div className="card-content">
          <img src={express} alt="livraison express" />
          <h4>
            {language === "anglais" && "Fast delivery"}
            {language === "espagnol" && "Entrega de rayos"}
            {language === "francais" && "Livraison ??claire"}
          </h4>
          <span>
            {language === "anglais" &&
              "More than 98% of orders are delivered in last than 15 minutes."}
            {language === "espagnol" &&
              "M??s del 98% de los pedidos entregados en menos de 15 minutos."}
            {language === "francais" &&
              "Plus de 98% des commandes livr??es en moins de 15 minutes."}
          </span>
        </div>
        <div className="card-content">
          <img src={best_price} alt="meilleur prix" />
          <h4>
            {language === "anglais" && "Best price"}
            {language === "espagnol" && "Mejor precio"}
            {language === "francais" && "Meilleur prix"}
          </h4>
          <span>
            {language === "anglais" &&
              "ibytrade make sure that it's prices are the best in the market."}
            {language === "espagnol" &&
              "ibytrade asegura que sus precios son los mejores del mercado."}
            {language === "francais" &&
              "ibytrade s'assure que ses prix soient les meilleurs sur le march??."}
          </span>
        </div>
        <div className="card-content">
          <img src={support} alt="support" />
          <h4>
            {language === "anglais" && "24 ?? 7 Online support"}
            {language === "espagnol" && "Soporte en l??nea 24 ?? 7"}
            {language === "francais" && "24 ?? 7 Support en ligne"}
          </h4>
          <span>
            {language === "anglais" &&
              "Our customer service is available 24/7. Contact us at any time of the day."}
            {language === "espagnol" &&
              "Servicio disponible 24/7. Cont??ctenos en cualquier hora."}
            {language === "francais" &&
              "Service disponible 24/7. Contactez-nous ?? n'importe quelle heure."}
          </span>
        </div>
        <div className="card-content">
          <img src={retour} alt="retour" />
          <h4>
            {language === "anglais" && "Satistied or refunded"}
            {language === "espagnol" && "Satisfecho o rembolsado"}
            {language === "francais" && "Satisfait ou rembours??"}
          </h4>
          <span>
            {language === "anglais" &&
              "ibytrade make sure that their customers receive the ordered product."}
            {language === "espagnol" &&
              "ibytrade se asegura de que los compradores reciban el producto solicitado."}
            {language === "francais" &&
              "ibytrade s'assure que les acheteurs re??oivent le produit command??."}
          </span>
        </div>
      </div>
      <div>
        <div>
          <FaqsSection />
        </div>
      </div>

      <CookieConsent
        onAccept={handleAcceptCookie}
        enableDeclineButton="Refus??"
        onDecline={handleDeclineCookie}
        location="bottom"
        buttonText="J'accepte"
        declineButtonText="Je refuse"
        cookieName="ibytradeconfidentialitycookie"
        style={{ background: "#000000" }}
        buttonStyle={{
          color: "#4e503b",
          fontSize: "13px",
        }}
        flipButtons
        expires={5000}
        visible={cook ? "show" : "hidden"}
        debug={true}
      >
        {language === "anglais" && (
          <div className="cookie-container">
            <p
              style={{
                letterSpacing: "1.5px",
              }}
            >
              By continuing to navigate on the site{" "}
              <Link
                to="/"
                style={{
                  color: "#76bef2",
                  fontSize: "14px",
                }}
              >
                ibytrade.com
              </Link>{" "}
              it implies for the user, the full and unreserved acceptance of
              <Link
                to="/privacy-policy/#cookie-privacy"
                style={{
                  color: "#76bef2",
                  fontSize: "14px",
                }}
              >
                {" "}
                cookies
              </Link>
              .<br></br>
            </p>
          </div>
        )}
        {language === "espagnol" && (
          <div className="cookie-container">
            <p>
              La conexi??n y la navegaci??n en el sitio{" "}
              <Link
                to="/"
                style={{
                  color: "#004a99",
                  fontSize: "14px",
                }}
              >
                ibytrade.com
              </Link>{" "}
              por parte del usuario implica la aceptaci??n plena y sin reservas
              de los cookies.<br></br>
            </p>
          </div>
        )}

        {language === "francais" && (
          <div className="cookie-container">
            <p>
              La connexion et la navigation sur le site{" "}
              <Link
                to="/"
                style={{
                  color: "#004a99",
                  fontSize: "14px",
                }}
              >
                ibytrade.com
              </Link>{" "}
              par l???utilisateur implique l'acceptation int??grale et sans r??serve
              des cookies.<br></br>
            </p>
          </div>
        )}
      </CookieConsent>
    </div>
  );
};

export default Home;
