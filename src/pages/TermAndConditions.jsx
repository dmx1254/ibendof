import React from "react";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const TermAndConditions = () => {
  const { language } = useSelector((state) => state.language);
  const { ipAddr } = useSelector((state) => state.ipAddr);

  return language === "anglais" ? (
    <Container
      sx={{
        textAlign: "center",
        background: "rgba(244, 244, 244, 0.8)",
        marginTop: "20px",
        borderRadius: "5px",
        paddingBottom: "10px",
      }}
      maxWidth="lg"
    >
      <h1
        style={{
          fontFamily: "Montserrat",
          fontWeight: 400,
          paddingTop: "20px",
          color: "#878484",
        }}
      >
        Terms and conditions
      </h1>
      <p
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        This site is owned and operated by{" "}
        {ipAddr === "Morocco" ? "IBYTRADE LIMITED" : "Iby Internet Ltd"}. If you
        visit or buy from the site, you affirmatively accept the following
        conditions. Continuing the use of the site constitutes affirmative
        acceptance of these terms and conditions. The Company reserves the right
        to change the terms, conditions, and notices under which its websites
        and services are offered. You are responsible for regularly reviewing
        these terms and conditions and any additional terms and conditions. Your
        continued use of the Company's websites and services constitutes your
        agreement to all such terms, conditions and{" "}
        <Link to="/privacy-policy">Privacy Policy</Link>. Please read them
        carefully.
      </p>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          1- CONFIDENTIALITY :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Please review our Privacy Policy, which also directs your visit to the
          Company's websites.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          2- ELECTRONIC COMMUNICATIONS :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          When you visit the Company's websites or send emails to us, you are
          communicating with us electronically. You consent to receive our
          communications electronically. We will communicate with you by e-mail
          or by posting alerts on this site. You agree that all agreements,
          notices, disclosures and other communications that we provide to you
          electronically comply with any legal requirement that such
          communications be in writing.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          3- LICENSE AND SITE ACCESS :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The Company grants you a limited license to personally access and use
          the site and not to download or modify it, or any part of it, except
          with the express written consent of the Company. This license does not
          include any resale or commercial use of this site or its contents; any
          collection and use of any virtual product listings, descriptions, or
          prices; any derivative use of this site or its contents, nor the
          downloading or copying of account information for the benefit of
          another merchant, nor the use of data, bots, or similar data
          collection and service extraction. This site or any part of this site
          may not be reproduced, copied, sold, resold, visited, or otherwise
          exploited for any commercial purpose, without the express written
          consent of the Company. The use of robots or any other means, whether
          through the use of automated software or through a mechanical or
          physical system, is strictly prohibited.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          4- ACCOUNT :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          When using this site, you are responsible for maintaining the
          confidentiality of your account and password and for restricting
          access to your computer. Otherwise, you agree to accept responsibility
          for all activities that occur on your account.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          5- WEBSITE DESCRIPTION :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Through its Sites, the Company provides you with access to a variety
          of resources, including buying and selling virtual items. Such
          services, including any updates, enhancements, new features, and/or
          the addition of any new Property Websites, are subject to these Terms
          and Conditions.<br></br>
          The Company makes no representations or claims of any title for any
          accounts or virtual items purchased or sold through this site. The
          Company makes no representations as to the transferability, use and
          ownership of any of these accounts or virtual items.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          6- PRICING:
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The prices of the sites evolve according to supply and demand. If you
          find a better price at another online store, we'll do our best to beat
          it.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          7- REFUND POLICY :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          IBYTRADE commits to refund unsatisfied customers to a reasonable
          extent. Please not that support may ask you to provide proof of
          payment. The customer is entitled to request a refund in the following
          cases. Virtual products not received: In the event that the virtual
          products have not been delivered to the customer within the expected
          delivery time, the customer may request a refund. Double payment: In
          the event that the customer has made a repeated payment for an order,
          he is requested to contact the support in order to be refunded as soon
          as possible. For any reason other than those listed above, please
          explain your situation to support. Your refund request will be
          verified after submitting the order number and refund reason. If the
          request is approved, the refund will be returned to the customer's
          account or credit card. In the following cases, we cannot refund
          customers: Delivery complete: the products have been delivered to the
          customer as agreed and as described. Unpaid order: The customer is not
          allowed to request a refund for the unpaid order.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          8- THIRD PARTIES :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The Company may also provide links and pointers to websites operated
          by third parties. Neither the Company, its parent or subsidiary
          companies, nor their affiliates operate or control in any respect the
          information, products or services on such third-party sites. We are
          not responsible for examining or evaluating, and we do not warrant,
          the offerings of such companies or individuals or the content of their
          websites. The Company assumes no responsibility for the actions,
          product and content of all these and any other third parties. You
          should carefully read their privacy statements and other terms of use.
          The material on this site and third-party sites is provided "as is"
          and without warranty of any kind, either express or implied. To the
          fullest extent permitted by applicable law, the Company disclaims all
          warranties, express or implied, including, but not limited to, implied
          warranties of merchantability and fitness for a particular purpose.
          The Company does not claim any title to any accounts or virtual items
          purchased or sold through this site.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          9- DELIVERY POLICY :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The delivery of all products is included in the offer (unless
          otherwise specified). If the delivery time is not respected, the
          customer is entitled to request a refund (referring to refund policy
          7.)
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          10- COPYRIGHT :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          All content on this site is the property of the Company or its content
          providers, and is protected by copyright. All software used on this
          site is the property of the Company or its software suppliers and is
          protected by national and international copyright laws.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          11- POLICIES, MODIFICATION AND SEVERABILITY :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Please review our other policies, such as our Privacy Policy, posted
          on this site. These policies also govern your visit to the Company's
          websites. We reserve the right to make changes to our site, and to the
          Terms and Conditions at any time. If any of these conditions are held
          to be invalid, void or for any reason that condition will be deemed
          severable and will not affect the validity and enforceability of any
          other condition.
        </p>
      </div>
    </Container>
  ) : language === "espagnol" ? (
    <Container
      sx={{
        textAlign: "center",
        background: "rgba(244, 244, 244, 0.8)",
        marginTop: "20px",
        borderRadius: "5px",
        paddingBottom: "10px",
      }}
      maxWidth="lg"
    >
      <h1
        style={{
          fontFamily: "Montserrat",
          fontWeight: 400,
          paddingTop: "20px",
          color: "#878484",
        }}
      >
        T??rminos y condiciones
      </h1>
      <p
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        Este sitio es propiedad y est?? operado por{" "}
        {ipAddr === "Morocco" ? "IBYTRADE LIMITED" : "Iby Internet Ltd"}. Si
        visitas o compra desde el sitio, usted acepta afirmativamente las
        siguientes condiciones. Continuar con el uso del sitio constituye la
        aceptaci??n afirmativa de estos t??rminos y condiciones. La Compa????a se
        reserva el derecho de cambiar el t??rminos, condiciones y avisos bajo los
        cuales se encuentran sus sitios web y servicios Ofrecido. Usted es
        responsable de revisar regularmente estos t??rminos y condiciones y
        cualquier t??rmino y condici??n adicional. Su uso continuado de los sitios
        web y servicios de la Compa????a constituye su aceptaci??n de todos dichos
        t??rminos, condiciones y{" "}
        <Link to="/privacy-policy">Pol??tica de privacidad</Link>. por favor
        l??elos con cuidado.
      </p>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          1- CONFIDENCIALIDAD :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Revise nuestra Pol??tica de privacidad, que tambi??n dirige su visita a
          la Sitios web de la empresa.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          2- COMUNICACIONES ELECTR??NICAS :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Cuando visita los sitios web de la Compa????a o nos env??a correos
          electr??nicos, est?? comunic??ndose con nosotros electr??nicamente. Usted
          acepta recibir nuestro comunicaciones electr??nicamente. Nos
          comunicaremos con usted por correo electr??nico. o publicando alertas
          en este sitio. Usted acepta que todos los acuerdos, avisos,
          divulgaciones y otras comunicaciones que le proporcionamos cumplir
          electr??nicamente con cualquier requisito legal de que tales las
          comunicaciones sean por escrito.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          3- LICENCIA Y ACCESO AL SITIO :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Compa????a le otorga una licencia limitada para acceder y usar
          personalmente el sitio y no descargarlo o modificarlo, o cualquier
          parte del mismo, excepto con el consentimiento expreso por escrito de
          la Compa????a. Esta licencia no incluir cualquier reventa o uso
          comercial de este sitio o su contenido; ning??n recopilaci??n y uso de
          listas de productos virtuales, descripciones o precios; cualquier uso
          derivado de este sitio o su contenido, ni la descargar o copiar la
          informaci??n de la cuenta en beneficio de otro comerciante, ni el uso
          de datos, bots o datos similares recogida y extracci??n de servicios.
          Este sitio o cualquier parte de este sitio no puede ser reproducido,
          copiado, vendido, revendido, visitado o de otra manera explotados para
          cualquier prop??sito comercial, sin la autorizaci??n expresa y por
          escrito consentimiento de la Compa????a. El uso de robots o cualquier
          otro medio, ya sea mediante el uso de software automatizado o a trav??s
          de un mecanismo o sistema f??sico, est?? estrictamente prohibido.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          4- CUENTA :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Al utilizar este sitio, usted es responsable de mantener la
          confidencialidad de su cuenta y contrase??a y para restringir acceso a
          su computadora. De lo contrario, acepta aceptar la responsabilidad.
          para todas las actividades que ocurren en su cuenta.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          5- DESCRIPCION DEL SITIO WEB :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          A trav??s de sus Sitios, la Compa????a le brinda acceso a una variedad de
          recursos, incluida la compra y venta de art??culos virtuales. Tal
          servicios, incluidas las actualizaciones, mejoras, nuevas funciones
          y/o la adici??n de nuevos sitios web de propiedades, est??n sujetos a
          estos T??rminos Y condiciones.<br></br>
          La Compa????a no hace representaciones ni reclamos de ning??n t??tulo por
          ning??n cuentas o art??culos virtuales comprados o vendidos a trav??s de
          este sitio. los La empresa no se responsabiliza en cuanto a la
          transferibilidad, uso y propiedad de cualquiera de estas cuentas o
          elementos virtuales.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          6- PRECIOS:
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Los precios de los sitios evolucionan seg??n la oferta y la demanda. Si
          usted encuentra un mejor precio en otra tienda en l??nea, haremos todo
          lo posible para mejorar eso.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          7- POLITICA DE REEMBOLSO :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          IBYTRADE se compromete a reembolsar a los clientes insatisfechos a un
          precio razonable medida. Tenga en cuenta que el soporte puede pedirle
          que proporcione una prueba de pago. El cliente tiene derecho a
          solicitar un reembolso en los siguientes casos. Productos virtuales no
          recibidos: En el caso de que el virtual los productos no han sido
          entregados al cliente dentro del tiempo esperado plazo de entrega, el
          cliente podr?? solicitar la devoluci??n. Doble pago: En el caso de que
          el cliente haya realizado un pago repetido por un pedido, se le
          solicita que se comunique con el soporte para que se le reembolse lo
          antes posible como sea posible. Por cualquier motivo que no sea el
          mencionado anteriormente, por favor explique su situaci??n para apoyar.
          Su solicitud de reembolso ser?? verificado despu??s de enviar el n??mero
          de pedido y el motivo del reembolso. Si el se aprueba la solicitud, el
          reembolso se devolver?? al cliente cuenta o tarjeta de cr??dito. En los
          siguientes casos, no podemos reembolsar clientes: Entrega completa:
          los productos han sido entregados al cliente seg??n lo acordado y
          descrito. Pedido no pagado: El cliente no est?? permitido solicitar un
          reembolso por el pedido no pagado.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          8- TERCEROS :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Compa????a tambi??n puede proporcionar enlaces y punteros a sitios web
          operados por terceros. Ni la Compa????a, su matriz o subsidiaria
          empresas, ni sus afiliadas operan o controlan en ning??n aspecto la
          informaci??n, productos o servicios en dichos sitios de terceros.
          Estamos no es responsable de examinar o evaluar, y no garantizamos,
          las ofertas de tales empresas o individuos o el contenido de sus
          sitios web La Compa????a no asume ninguna responsabilidad por las
          acciones, producto y contenido de todos estos y de cualquier otro
          tercero. T?? debe leer atentamente sus declaraciones de privacidad y
          otros t??rminos de uso. El material de este sitio y de sitios de
          terceros se proporciona "tal cual" y sin garant??a de ning??n tipo, ya
          sea expresa o impl??cita. Hacia m??xima medida permitida por la ley
          aplicable, la Compa????a renuncia a todos garant??as, expresas o
          impl??citas, incluidas, entre otras, garant??as impl??citas garant??as de
          comerciabilidad e idoneidad para un prop??sito particular. La Compa????a
          no reclama ning??n t??tulo de ninguna cuenta o art??culo virtual.
          comprado o vendido a trav??s de este sitio.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          9- POL??TICA DE ENTREGA :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La entrega de todos los productos est?? incluida en la oferta (a menos
          que especificado de otra manera). Si no se respeta el plazo de
          entrega, el el cliente tiene derecho a solicitar un reembolso
          (refiri??ndose a la pol??tica de reembolso 7.)
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          10- DERECHOS DE AUTOR :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Todo el contenido de este sitio es propiedad de la Compa????a o su
          contenido proveedores, y est?? protegido por derechos de autor. Todo el
          software utilizado en este El sitio es propiedad de la Compa????a o de
          sus proveedores de software y est?? protegido por las leyes nacionales
          e internacionales de derechos de autor.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          11- POL??TICAS, MODIFICACI??N Y DIVISIBILIDAD:
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Revise nuestras otras pol??ticas, como nuestra Pol??tica de privacidad,
          publicada en este sitio. Estas pol??ticas tambi??n rigen su visita a las
          instalaciones de la Compa????a. sitios web Nos reservamos el derecho de
          realizar cambios en nuestro sitio y en el T??rminos y Condiciones en
          cualquier momento. Si alguna de estas condiciones se cumple sea
          ??????inv??lida, nula o por cualquier motivo esa condici??n se considerar??
          divisible y no afectar?? la validez y exigibilidad de cualquier otra
          condici??n.
        </p>
      </div>
    </Container>
  ) : (
    <Container
      sx={{
        textAlign: "center",
        background: "rgba(244, 244, 244, 0.8)",
        marginTop: "20px",
        borderRadius: "5px",
        paddingBottom: "10px",
      }}
      maxWidth="lg"
    >
      <h1
        style={{
          fontFamily: "Montserrat",
          fontWeight: 400,
          paddingTop: "20px",
          color: "#878484",
        }}
      >
        Termes et conditions
      </h1>
      <p
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        Ce site appartient et est exploit?? par{" "}
        {ipAddr === "Morocco" ? "IBYTRADE LIMITED" : "Iby Internet Ltd"}. Si
        vous visitez ou achetez sur le site, vous acceptez affirmativement les
        conditions suivantes. Continuer l'utilisation du site constitue
        l'acceptation affirmative de ces termes et conditions. La Soci??t?? se
        r??serve le droit de modifier les termes, conditions et avis en vertu
        desquels ses sites Web et services sont propos??s. Vous ??tes responsable
        de consulter r??guli??rement ces termes et conditions et tous les termes
        et conditions suppl??mentaires. Continuer l'utilisation des sites web et
        des services de la Soci??t?? constitue votre accord avec tous ces termes,
        conditions et{" "}
        <Link to="/privacy-policy">Politique de confidentialit??</Link>. Veuillez
        les lire attentivement.
      </p>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          1- CONFIDENTIALIT?? :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Veuillez consulter notre politique de confidentialit??, qui dirige
          ??galement votre visite ?? la Soci??t?? des sites web.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          2- COMMUNICATIONS ??LECTRONIQUES :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Lorsque vous visitez les sites Web de la Soci??t?? ou que vous nous
          envoyez des e-mails, vous communiquez avec nous par voie ??lectronique.
          Vous consentez ?? recevoir nos communications par voie ??lectronique.
          Nous communiquerons avec vous par e-mail ou en publiant des alertes
          sur ce site. Vous convenez que tous les accords, avis, divulgations et
          autres communications que nous vous fournissons par voie ??lectronique
          sont en ad??quation avec toute exigence l??gale selon laquelle ces
          communications doivent ??tre ??crites.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          3- LICENCE ET ACC??S AU SITE :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Soci??t?? vous accorde une licence limit??e pour acc??der et utiliser
          personnellement ce site et ?? ne pas t??l??charger ou le modifier, ou
          toute partie de celui-ci, sauf avec le consentement expr??s ??crit de la
          Soci??t??. Cette licence n???inclut aucune revente ou utilisation
          commerciale de ce site ou de son contenu, toute la collecte et
          l???utilisation de toutes listes, descriptions, ou prix de produit
          virtuel; toute utilisation d??riv??e de ce site ou de son contenu, ni le
          t??l??chargement ou la copie d???informations de compte pour la profit
          d???un autre commer??ant, ni l???utilisation de donn??es, des robots, ou des
          donn??es similaires de collecte et d???extraction de services. Ce site ou
          toute partie de ce site ne peut pas ??tre reproduit, copi??, vendu,
          revendu, visit??, ou ??tre autrement exploit?? pour aucun commercial,
          sans le consentement ??crit expr??s de la Soci??t??. L???utilisation de
          robots ou tout autre moyen, que ce soit par l???utilisation d???un
          logiciel automatis?? ou par le biais d???un syst??me m??canique ou
          physique, est strictement interdite.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          4- VOTRE COMPTE :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Si vous utilisez ce site, vous ??tes responsable de maintenir la
          confidentialit?? de votre compte et votre mot de passe et de
          restreindre l???acc??s ?? votre ordinateur. Dans le cas contraire, vous
          vous engagez ?? accepter la responsabilit?? de toutes les activit??s qui
          se produisent sur votre compte.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          5- DESCRIPTION DU SITE :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Gr??ce ?? ses sites, la Soci??t?? vous donne acc??s ?? une vari??t?? de
          ressources, y compris l???achat et la vente d???objets virtuels. Ces
          services, y compris les mises ?? jour, am??liorations, nouvelles
          fonctionnalit??s, l???ajout de tout nouveau site Web des propri??t??s, sont
          soumis ?? ces Termes et Conditions. La Soci??t?? ne fait aucune
          repr??sentation ou de cr??ances ?? un titre pour tous les comptes ou des
          objets virtuels achet??s ou vendus par le biais de ce site. La Soci??t??
          ne fait aucune d??claration quant ?? la transf??rabilit??, l???utilisation
          et la propri??t?? de l???un de ces comptes ou des objets virtuels.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          6- PRIX:
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Les prix des sites ??voluent en fonction de l???offre et de la demande.
          Si vous trouvez un meilleur prix ?? un autre magasin en ligne, nous
          ferons de notre mieux pour le battre.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          7- POLITIQUE DE REMBOURSEMENT ET D???ANNULATION :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          IBYTRADE s???engage ?? rembourser les clients insatisfaits dans la mesure
          du raisonnable. Il se peut que le support puisse vous demander de lui
          fournir une preuve de paiement. Le client est en droit de demander un
          remboursement dans les cas suivants. Produits virtuels non re??us: Dans
          le cas o?? les produits virtuels n???ont pas ??t?? livr??s au client dans le
          d??lai de livraison pr??vu, le client peut demander un remboursement.
          Double paiement: Dans le cas o?? le client a effectu?? un paiement
          r??p??t?? pour une commande, il est pri?? de contacter le support afin
          d?????tre rembours?? au plus vite. Pour toute raison autre que celles
          ??num??r??es ci-dessus, vous ??tes pri??s d???expliquer votre situation au
          support. Votre demande de remboursement sera v??rifi??e apr??s avoir
          soumis le num??ro de commande et le motif du remboursement. Si la
          demande est approuv??e, le remboursement sera retourn?? sur le compte
          client ou sur la carte bancaire. Dans les cas suivants, nous ne
          pouvons pas rembourser les clients : Livraison termin??e : les produits
          ont ??t?? livr??s au client comme convenu et conformes ?? la description.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          8 - PARTENAIRES :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Soci??t?? peut ??galement fournir des liens et des pointeurs vers des
          sites Internet g??r??s par des tiers. Ni la Soci??t??, ses soci??t??s m??res
          ou ses filiales, ni leurs soci??t??s affili??es n'exploitent ou ne
          contr??lent ?? quelque ??gard que ce soit les informations, produits ou
          services sur ces sites tiers. Nous ne sommes pas responsables de
          l'examen ou de l'??valuation, et nous ne garantissons pas les offres de
          ces entreprises ou individus ou le contenu de leurs sites Web. La
          Soci??t?? n'assume aucune responsabilit?? pour les actions, le produit et
          le contenu de tous ceux-ci et de tout autre tiers. Vous devez lire
          attentivement leurs d??clarations de confidentialit?? et autres
          conditions d'utilisation. Le mat??riel de ce site et des sites tiers
          est fourni ?? tel quel ?? et sans garantie d'aucune sorte, expresse ou
          implicite. Dans toute la mesure permise par la loi applicable, la
          Soci??t?? d??cline toute garantie, expresse ou implicite, y compris, mais
          sans s'y limiter, les garanties implicites de qualit?? marchande et
          d'ad??quation ?? un usage particulier. La Soci??t?? ne revendique aucun
          titre pour les comptes ou les articles virtuels achet??s ou vendus via
          ce site.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          9 - POLITIQUE DE LIVRAISON :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La livraison de tous produits est incluse dans l???offre (?? moins que
          l???inverse soit sp??cifi??). Si le d??lai de livraison n???est pas respect??,
          le client est en droit de demander un rembourse (en se r??f??rent ?? la
          politique de remboursement 7.)
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          10- COPYRIGHT :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Tout le contenu de ce site est la propri??t?? de la Soci??t?? ou de ses
          fournisseurs de contenu, et est prot??g?? par les droits d'auteurs. Tous
          les logiciels utilis??s sur ce site sont la propri??t?? de la Soci??t?? ou
          de ses fournisseurs de logiciels et sont prot??g??s par les lois
          nationales et internationales sur le droit d'auteur.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          11- POLITIQUES, MODIFICATION ET DIVISIBILIT?? :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Veuillez consulter nos autres politiques, telles que notre politique
          de confidentialit??, publi??e sur ce site. Ces politiques r??gissent
          ??galement votre visite sur les sites Internet de la Soci??t??. Nous nous
          r??servons le droit d???apporter des modifications ?? notre site, et aux
          Conditions G??n??rales ?? tout moment. Si l???une de ces conditions est
          jug??e invalide, nulle ou, pour une raison quelconque, cette condition
          sera consid??r??e comme divisible et n???affectera pas la validit?? et
          l???applicabilit?? de toute autre condition.
        </p>
      </div>
    </Container>
  );
};

export default TermAndConditions;
