import React from "react";

import { useSelector } from "react-redux";

import { BsChevronCompactDown } from "react-icons/bs";

const Faqs = () => {
  const { language } = useSelector((state) => state.language);

  return (
    <div className="faqs">
      <div
        style={{
          width: "100%",
          background: "rgba(0, 0, 0, 0.9)",
          textAlign: "center",
          height: "100px",
          color: "white",
          marginBottom: "60px",
        }}
      >
        {language === "anglais" ? (
          <h1
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: "Roboto, sans-serif",
              paddingTop: "10px",
              letterSpacing: "4px",
            }}
          >
            Need help ?
            <p className="bs-cheron">
              <BsChevronCompactDown />
            </p>
          </h1>
        ) : language === "espagnol" ? (
          <h1
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: "Roboto, sans-serif",
              paddingTop: "10px",
              letterSpacing: "4px",
            }}
          >
            Necesitas ayuda ?
            <p className="bs-cheron">
              <BsChevronCompactDown />
            </p>
          </h1>
        ) : (
          <h1
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: "Roboto, sans-serif",
              paddingTop: "10px",
              letterSpacing: "4px",
            }}
          >
            Besoin d'aide ?
            <p className="bs-cheron">
              <BsChevronCompactDown />
            </p>
          </h1>
        )}
      </div>
      <div>
        {language === "anglais" ? (
          <h1 className="desc-faqs">
            Here are the frequently asked questions on our website. You will
            surely find the answer you are looking for and if you do not, you
            can contact our online service which is available 24/7.
          </h1>
        ) : language === "espagnol" ? (
          <h1 className="desc-faqs">
            Estas son las preguntas m??s frecuentes en nuestro sitio web.
            Seguramente encontrar?? la respuesta que est?? buscando y si no la
            encuentra, puede ponerse en contacto con nuestro servicio en l??nea
            que est?? disponible las 24 horas/24.
          </h1>
        ) : (
          <h1 className="desc-faqs">
            Voici les questions fr??quemment pos??es sur notre site web. Vous
            trouverez surement la r??ponse que vous cherchez et si vous ne
            trouvez pas, vous pouvez contacter notre service en ligne qui est
            disponible 24h/24.
          </h1>
        )}
        <div className="card-content">
          {language === "anglais" && (
            <h1>Dofus-Kamas, the most frequently asked questions</h1>
          )}
          {language === "espagnol" && (
            <h1>Dofus-Kamas, las preguntas m??s frecuentes</h1>
          )}
          {language === "francais" && (
            <h1>Dofus-Kamas, les questions les plus pos??es</h1>
          )}
          <details className="warning">
            <summary>
              {language === "anglais" && "Are we reliable ?"}
              {language === "espagnol" && "Somos confiables ?"}
              {language === "francais" && "Sommes nous fiables?"}
            </summary>
            {language === "anglais" && (
              <p>
                {" "}
                Any order on this site will be delivered on time or refunded if
                necessary. However, human error happens. Do not hesitate to
                contact us if you think there has been a mistake. We keep all
                necessary records in the event of an error or false dispute.
              </p>
            )}
            {language === "espagnol" && (
              <p>
                {" "}
                Cualquier pedido en este sitio ser?? entregado a tiempo o
                reembolsado si necesario. Sin embargo, ocurre un error humano.
                No dude en contactar nosotros si cree que ha habido un error.
                Mantenemos todo lo necesario registros en caso de error o
                disputa falsa.
              </p>
            )}
            {language === "francais" && (
              <p>
                {" "}
                Toute commande pass??e sur le site sera livr??e dans les temps ou
                rembours??e pour le cas ??ch??ant. Cependant l???erreur ??tant
                humaine, n???h??sitez pas ?? nous contacter si vous pensez qu???il y a
                eu erreur. Nous gardons tous les enregistrements n??cessaires
                dans le cas d???une erreur ou d???une fausse contestation.
              </p>
            )}
          </details>

          <details className="info" open>
            <summary>
              {language === "anglais" &&
                "How will we deliver your Kamas to you ?"}
              {language === "espagnol" && "C??mo le entregaremos sus Kamas ?"}
              {language === "francais" &&
                "Comment allons nous vous livrer vos Kamas?"}
            </summary>

            {language === "anglais" && (
              <p>
                {" "}
                Once the order has been paid, our agent will give you the
                meeting point (in-game map) where he will deliver the kamas. Go
                to the coordinates indicated where our delivery person will
                trade you to give you your kamas. NB: Please stay online in the
                livechat to be notified of the coordinates of the map.
              </p>
            )}
            {language === "espagnol" && (
              <p>
                {" "}
                Una vez pagado el pedido, nuestro agente le dar?? la cita punto
                (mapa del juego) donde entregar?? los kamas. Ve a la coordenadas
                indicadas donde nuestro repartidor lo cambiar?? darte tus kamas.
                NB: Permanezca en l??nea en el chat en vivo para estar notificado
                de las coordenadas del mapa.
              </p>
            )}
            {language === "francais" && (
              <p>
                {" "}
                Une fois la commande pass??e, notre agent vous communiquera le
                point de rencontre (coordonn??s de la map en jeu) ou il vous
                livrera les kamas. Allez aux coordonn??es indiqu??es o?? notre
                livreur vous lancera l'??change. NB : Veuillez restez en ligne
                dans le livechat pour ??tre pr??venu des coordonn??es de la map.
              </p>
            )}
          </details>

          <details className="alert">
            <summary>
              {language === "anglais" &&
                "Do we ask to return the kamas once they have been delivered ?"}
              {language === "espagnol" &&
                "Pedimos devolver los kamas una vez entregados ?"}
              {language === "francais" &&
                "Demandons-nous de rendre les kamas une fois la livraison effectu??e?"}
            </summary>

            {language === "anglais" && (
              <p>
                {" "}
                Anyone talking to you in-game asking you to return kamas for any
                kind of reason are scammers. An ibytrade agent will never make
                this type of request, as all communication will be done in the
                online chat. Do not hesitate to block the person when you
                receive this kind of message.
              </p>
            )}
            {language === "espagnol" && (
              <p>
                {" "}
                Cualquiera que hable contigo en el juego y te pida que devuelvas
                kamas por cualquier tipo de raz??n son los estafadores. Un agente
                de ibytrade nunca har?? esto tipo de solicitud, ya que toda la
                comunicaci??n se realizar?? en l??nea charlar. No dude en bloquear
                a la persona cuando reciba este tipo de mensaje.
              </p>
            )}
            {language === "francais" && (
              <p>
                {" "}
                Toute personne vous parlant dans le jeu en vous demandant le
                retour des kamas pour une raison X ou Y sont des arnaqueurs. Un
                agent de ibytrade ne fera jamais ce type de demande, car toute
                communication se fera dans le chat en ligne. N???h??sitez pas ??
                bloquer la personne quand vous recevez ce genre de messages.
              </p>
            )}
          </details>

          <details className="alert">
            <summary>
              {language === "anglais" &&
                "Do we ask to return the kamas once they have been delivered ?"}
              {language === "espagnol" &&
                "Qu?? pasa si cometiste un error al escribir el nombre del personaje ?"}
              {language === "francais" &&
                "Que faire si vous vous trompez en ??crivant le personnage?"}
            </summary>

            {language === "anglais" && (
              <p>
                {" "}
                If your kamas were delivered during a rollback, please contact
                the support for a new delivery.
              </p>
            )}
            {language === "espagnol" && (
              <p>
                {" "}
                Informe el error a un miembro de soporte lo antes posible. Para
                evitar cualquier abuso, los kamas entregados no ser??n
                reembolsados ??????si el error no viene de nosotros.
              </p>
            )}
            {language === "francais" && (
              <p>
                {" "}
                Veuillez signaler l???erreur au plus vite ?? un membre du support.
                Pour ??viter tout abus, les kamas livr??s ne seront rembours??s si
                l???erreur ne vient pas de nous.
              </p>
            )}
          </details>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
