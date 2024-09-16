import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
        en: {
            translation: {
                mainDesc: "Captivating taste buds with every serving. Our gelatins and desserts are crafted from the finest ingredients, offering a delicious burst of flavor in every bite. With a variety of designs, images, colors, and flavors, they are the perfect dessert for parties, celebrations, or simply as a sweet snack.",
                subtitle: "Based in Greensboro, NC",
                headerOption1: "Home",
                headerOption2: "Gallery",
                headerOption3: "About",
                headerOption4: "Contact",
                productsTitle: "Featured Products",

                servicesTitle: "Our Services",
                servicesContactButton: "CONTACT US",
                servicesGelatinas: "Two versions are available. 3D version consists of a hand-drawn flower within. Image version consists of an image overlay such as that of a character, video game, etc. Personalized messages are available as an add-on for the image gelatins. Both versions include flavor options of chocolate, pineapple, peach, vanilla ice cream, strawberry, and dulce de leche. All gelatins 6\" or greater come with surrounding 2oz gelatins.",
                servicesFresas: "Two versions are available. Original version comes with strawberries, a sweet cream, and strawberry jam. Oreo version comes with strawberries, a light cream, and crushed oreos.",
                gelatinasPrice1: "2oz individual cups: $15 a dozen",
                gelatinasPrice2: "4oz individual cups: $42 a dozen",
                gelatinasPrice3: "6\" gelatin: $25",
                gelatinasPrice4: "8\" gelatin: $32",
                gelatinasPrice5: "11\" gelatin: $45",
                gelatinasPrice6: "12\" gelatin: $55",
                gelatinasPrice7: "13\"x9\" rectangular gelatin: $65",
                gelatinasPrice8: "2 Tier gelatin: $65",
                gelatinasPrice9: "3 Tier gelatin: $75",
                fresasPrice: "5oz individual cups: $48 a dozen",
                servicesChocoflan: "Chocolate cake with a caramel custard. Available with strawberries and pecans, or other additions upon request. Mini versions also available topped with whipped cream and strawberries. Caramel custard available without chocolate cake.",
                flanPrice1: "Chocoflan 8\"x8\"x3.5\": $45",
                flanPrice2: "Mini chocoflans (cupcake size): $32 a dozen",
                flanPrice3: "Caramel custard 8\": $35",
                servicesPlaceholder: "Coming Soon",
                servicesPlaceholderDesc: "Space reserved for an upcoming product.",

                galleryTitle: "Gallery",
                galleryDesc: "Like what you see? Order today!",
                galleryDesc2: "Please inquire for specific pricing.",
                galleryOrderButton: "ORDER NOW",

                aboutTitle: "A Sweet Journey",
                aboutDesc: "Paty's story began in the heart of Guanajuato, Mexico, where she first studied the delicate art of gelatin-making. Since 2010, she has been perfecting her craft and expanding her offerings to include different versions of her well-loved gelatins, as well as other delicious desserts. Over the years, her recipes have evolved, each one refined to deliver the highest quality and taste. Now based in Greensboro, NC, Paty is dedicated to providing her customers with desserts that not only meet but exceed expectations. Whether you're looking for traditional gelatins or something new, Paty is here to bring sweetness to your celebrations. Contact us to learn more about our offerings!",
                aboutContactButton: "CONTACT US",

                contactTitle: "Contact Us",
                contactDesc1: "We'd love to hear from you! Whether you have questions, need assistance, or want to place an order, simply fill out the form below, and we'll get back to you within 3 business days.",
                contactDesc2: "Prefer a more direct, faster approach? Reach out to us and send us a message on Facebook:",
                contactDesc3: "We look forward to assisting you!",
                contactFN: "First Name:",
                contactLN: "Last Name:",
                contactNum: "Phone Number:",
                contactEmail: "Email:",
                contactMess: "Message:",
                contactSubmitButton: "SUBMIT",
                contactSetStatus: "SENDING...",
                contactToastSuccess: "Your message was sent successfully!",
                contactToastError: "Failed to send message. Please try again.",

            },

        },
        es: {
            translation: {
                mainDesc: "Cautivando paladares con cada bocado. Nuestras gelatinas y postres están hechas de los mejores ingredientes, ofreciendo una deliciosa explosión de sabor en cada mordida. Con una variedad de diseños, imágenes, colores y sabores, son el postre perfecto para fiestas, celebraciones, o simplemente como un bocadillo dulce.",
                subtitle: "Ubicado en Greensboro, NC",
                headerOption1: "Inicio",
                headerOption2: "Galería",
                headerOption3: "Acerca De",
                headerOption4: "Contacto",
                productsTitle: "Productos Destacados",
                servicesTitle: "Servicios",
                servicesContactButton: "CONTACTÁNOS",
                servicesGelatinas: "Hay dos versiones disponibles. La versión 3D consiste en una flor dibujada a mano dentro de la gelatina. La versión de imagen consiste en una sobreposición de imagen como la de un personaje, videojuego, etc. Los mensajes personalizados están disponibles como complemento para las gelatinas de imagen. Ambas versiones incluyen opciones de sabor de chocolate, piña, durazno, helado de vainilla, fresa y dulce de leche. Las gelatinas de 6 pulgadas o más vienen con gelatinas de 2oz alrededor.",
                servicesFresas: "Hay dos versiones disponibles. La versión original viene con fresas, crema dulce y mermelada de fresa. La versión Oreo viene con fresas, una crema ligera y piezas de oréo.",
                gelatinasPrice1: "Tazas individuales de 2oz: $15 la docena",
                gelatinasPrice2: "Tazas individuales de 4oz: $42 la docena",
                gelatinasPrice3: "Gelatina de 6 pulgadas: $25",
                gelatinasPrice4: "Gelatina de 8 pulgadas: $32",
                gelatinasPrice5: "Gelatina de 11 pulgadas: $45",
                gelatinasPrice6: "Gelatina de 12 pulgadas: $55",
                gelatinasPrice7: "Gelatina rectangular de 13x9 pulgadas: $65",
                gelatinasPrice8: "Gelatina de 2 niveles: $65",
                gelatinasPrice9: "Gelatina de 3 niveles: $75",
                fresasPrice: "Tazas individuales de 5oz: $48 la docena",
                servicesChocoflan: "Pastel de chocolate con flan. Disponible con fresas y nuez, u otras adiciones a petición. Disponible también en versiones mini con crema batida y fresas. Flan también disponible sin pastel.",
                flanPrice1: "Chocoflan de 8x8x3.5 pulgadas: $50",
                flanPrice2: "Mini chocoflanes: $32 la docena",
                flanPrice3: "Flan de 8 pulgadas: $35",
                servicesPlaceholder: "Algo Nuevo Viene",
                servicesPlaceholderDesc: "Espacio reservado para un producto nuevo.",

                galleryTitle: "Galería",
                galleryDesc: "¿Le gusta lo que ve? ¡Ordena hoy!",
                galleryDesc2: "Favor de preguntar por precios específicos.",
                galleryOrderButton: "ORDENAR",

                aboutTitle: "Un Viaje Dulce",
                aboutDesc: "La historia de Paty comenzó en el corazón de Guanajuato, México, donde estudió por primera vez el delicado arte de la gelatina. Desde el 2010, ha estado perfeccionando su arte y expandiendo sus ofertas para incluir diferentes versiones de sus amadas gelatinas, así como otros deliciosos postres. A lo largo de los años, sus recetas han evolucionado, cada una refinada para ofrecer la más alta calidad y sabor. Ahora ubicada en Greensboro, NC, Paty se dedica a proporcionar a sus clientes postres que no sólo cumplen, sino que superan las expectativas. Ya sea que estés buscando gelatinas tradicionales o algo nuevo, Paty está aquí para traer dulzura a tus celebraciones. ¡Póngase en contacto con nosotros para saber más sobre lo que ofrecemos!",
                aboutContactButton: "CONTACTÁNOS",

                contactTitle: "Contactános",
                contactDesc1: "¡Nos encantaría oír de usted! Si tiene preguntas, necesita asistencia, o desea hacer un pedido, simplemente rellene el formulario que figura a continuación, y le contactaremos dentro de 3 días hábiles.",
                contactDesc2: "¿Prefiere algo más directo y rápido? Envíanos un mensaje en Facebook:",
                contactDesc3: "¡Esperamos poder ayudarlo!",
                contactFN: "Nombre:",
                contactLN: "Apellido:",
                contactNum: "Número de Teléfono:",
                contactEmail: "Correo Electrónico:",
                contactMess: "Mensaje:",
                contactSubmitButton: "ENVIAR",
                contactSetStatus: "ENVIANDO...",
                contactToastSuccess: "¡Su mensaje fue enviado con éxito!",
                contactToastError: "Fallado. Favor de intentar de nuevo.",

            },

        }
    }

})
