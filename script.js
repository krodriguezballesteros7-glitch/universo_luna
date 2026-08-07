/* =====================================================
   ELEMENTOS
===================================================== */

const intro =
    document.getElementById("intro");

const titulo =
    document.getElementById("titulo");

const estrellaNacimiento =
    document.getElementById("estrellaNacimiento");

const explosion =
    document.getElementById("explosion");

const universo =
    document.getElementById("universo");

const luna =
    document.getElementById("luna");

const tituloUniverso =
    document.getElementById("tituloUniverso");

const mensaje =
    document.getElementById("mensaje");

const textoMensaje =
    document.getElementById("textoMensaje");

const cerrarMensaje =
    document.getElementById("cerrarMensaje");

const final =
    document.getElementById("final");


/* =====================================================
   CONFIGURACIÓN
===================================================== */

const TOTAL_ESTRELLAS = 18;

let estrellasDescubiertas = 0;

let estrellaActual = null;


/* =====================================================
   ESTRELLA DE NACIMIENTO
===================================================== */

setTimeout(() => {

    estrellaNacimiento.style.opacity = "1";

    estrellaNacimiento.animate(

        [

            {
                transform: "scale(1)"
            },

            {
                transform: "scale(2)"
            },

            {
                transform: "scale(5)"
            }

        ],

        {

            duration: 3000,

            fill: "forwards",

            easing: "ease-out"

        }

    );

}, 3000);


/* =====================================================
   DESAPARECER TITULO
===================================================== */

setTimeout(() => {

    titulo.animate(

        [

            {
                opacity: 1
            },

            {
                opacity: 0
            }

        ],

        {

            duration: 1500,

            fill: "forwards",

            easing: "ease-in-out"

        }

    );

}, 5000);


/* =====================================================
   EXPLOSION
===================================================== */

setTimeout(() => {

    explosion.style.opacity = "1";

    explosion.animate(

        [

            {
                transform: "scale(1)",
                opacity: 1
            },

            {
                transform: "scale(35)",
                opacity: 1
            },

            {
                transform: "scale(75)",
                opacity: .7
            },

            {
                transform: "scale(160)",
                opacity: 0
            }

        ],

        {

            duration: 5000,

            fill: "forwards",

            easing: "ease-out"

        }

    );


    crearParticulas();


}, 6500);


/* =====================================================
   PARTICULAS
===================================================== */

function crearParticulas() {

    for (let i = 0; i < 180; i++) {

        const particula =
            document.createElement("div");

        particula.className =
            "particula";


        particula.style.left = "50%";
        particula.style.top = "50%";


        const angulo =
            Math.random() * Math.PI * 2;


        const distancia =
            200 +
            Math.random() *
            Math.max(
                window.innerWidth,
                window.innerHeight
            );


        const x =
            Math.cos(angulo) *
            distancia;


        const y =
            Math.sin(angulo) *
            distancia;


        const duracion =
            3500 +
            Math.random() * 2500;


        particula.animate(

            [

                {

                    transform:
                        "translate(-50%, -50%) scale(2)",

                    opacity: 1

                },

                {

                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(.5)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    duracion,

                fill:
                    "forwards",

                easing:
                    "cubic-bezier(.1,.7,.2,1)"

            }

        );


        intro.appendChild(particula);


        setTimeout(() => {

            particula.remove();

        }, duracion + 100);

    }

}


/* =====================================================
   APARECER UNIVERSO
===================================================== */

setTimeout(() => {

    universo.style.opacity = "1";

    crearCielo();

}, 9000);


/* =====================================================
   APARECER LUNA Y ESTRELLAS
===================================================== */

setTimeout(() => {

    luna.style.opacity = "1";

    tituloUniverso.style.opacity = "1";

    crearEstrellasEspeciales();

}, 11000);


/* =====================================================
   QUITAR INTRO
===================================================== */

setTimeout(() => {

    intro.style.opacity = "0";

}, 11500);


setTimeout(() => {

    intro.style.display = "none";

}, 14500);


/* =====================================================
   CIELO
===================================================== */

function crearCielo() {

    for (let i = 0; i < 300; i++) {

        const estrella =
            document.createElement("div");

        estrella.className =
            "estrellita";


        estrella.style.left =
            Math.random() * 100 + "%";


        estrella.style.top =
            Math.random() * 100 + "%";


        const tamaño =
            Math.random() * 2.5 + 1;


        estrella.style.width =
            tamaño + "px";


        estrella.style.height =
            tamaño + "px";


        estrella.style.animationDelay =
            Math.random() * 3 + "s";


        universo.appendChild(
            estrella
        );

    }

}


/* =====================================================
   ESTRELLAS PRINCIPALES + SECRETAS
===================================================== */

function crearEstrellasEspeciales() {


    /* ============================
       10 ESTRELLAS VISIBLES
    ============================ */

    const principales = [

        {
            x: 12,
            y: 25,

            texto:
                "Gracias por cada sonrisa que me has regalado. Hay momentos que parecen pequeños, pero contigo terminan brillando muchísimo. 🌙"
        },


        {
            x: 29,
            y: 38,

            texto:
                "Me encanta poder compartir contigo hasta las cosas más simples del día. De alguna manera, contigo nunca se sienten tan simples. ✨"
        },


        {
            x: 82,
            y: 25,

            texto:
                "Si pudiera guardar nuestros momentos en algún lugar, probablemente los pondría aquí, entre las estrellas. ❤️"
        },


        {
            x: 72,
            y: 42,

            texto:
                "Entre millones de estrellas, hay una que siempre terminaría buscando. Y creo que ya sabes cuál es. 🌌"
        },


        {
            x: 50,
            y: 18,

            texto:
                "Este pequeño universo existe por una razón: quería crear un lugar donde pudiera dejar un poquito de todo lo que siento por ti. 🌙"
        },


        {
            x: 20,
            y: 63,

            texto:
                "Me gusta pensar que cada recuerdo bonito que tenemos podría convertirse en una pequeña luz que nunca se apaga. ✨"
        },


        {
            x: 38,
            y: 76,

            texto:
                "No necesito un universo enorme. Me basta con tener un pequeño espacio donde siempre haya un lugar para ti. ❤️"
        },


        {
            x: 65,
            y: 68,

            texto:
                "Gracias por quedarte, por escucharme y por hacer que incluso los días normales tengan algo especial. 🌙"
        },


        {
            x: 90,
            y: 58,

            texto:
                "Quizá nunca pueda explicarte completamente todo lo que siento, pero al menos puedo intentar dejar pequeñas partes de ello aquí. 🌌"
        },


        {
            x: 8,
            y: 82,

            texto:
                "Y si algún día miramos las estrellas juntos, quiero acordarme de este pequeño universo que hice pensando en ti. ❤️"
        }

    ];


    /* ============================
       8 ESTRELLAS SECRETAS
    ============================ */

const secretas = [

    {
        x: 7,
        y: 44,

        texto:
            "Encontraste una estrella que escondí especialmente para ti... porque hay cosas que quizá no siempre digo, pero que siento muchísimo. Te quiero más de lo que a veces sé explicar. ❤️"
    },


    {
        x: 43,
        y: 29,

        texto:
            "Esta estrella estaba escondida, igual que algunos de mis pensamientos cuando pienso en ti. A veces simplemente apareces en mi cabeza y haces que todo se sienta un poquito más bonito. 🌙"
    },


    {
        x: 58,
        y: 34,

        texto:
            "Si alguna vez te preguntas qué lugar ocupas en mi corazón, mira todas estas estrellas... y piensa que, aun con todo este universo, siempre habría una que elegiría primero: tú. ✨❤️"
    },


    {
        x: 93,
        y: 40,

        texto:
            "Te encontré escondida entre las estrellas... aunque siendo sincero, creo que yo podría buscarte entre millones de personas y aun así terminar encontrándote a ti. 🌌"
    },


    {
        x: 31,
        y: 88,

        texto:
            "Hay estrellas que brillan muchísimo y otras que apenas puedes ver... pero para mí tú siempre has sido de esas luces que uno reconoce incluso desde lejos. ❤️"
    },


    {
        x: 55,
        y: 82,

        texto:
            "Esta es otra pequeña parte de lo que quería dejarte aquí: me gusta tenerte en mi vida, me gusta escucharte, hacerte reír y compartir contigo hasta los momentos más sencillos. 🫶🏻"
    },


    {
        x: 76,
        y: 87,

        texto:
            "Encontraste otra... y mientras tú exploras este pequeño universo, yo solo puedo pensar en lo bonito que sería algún día mirar uno de verdad contigo, sentados juntos y sin necesidad de decir nada. 🌙✨"
    },


    {
        x: 95,
        y: 78,

        texto:
            "Esta era la última escondida... pero no quiero que pienses que aquí termina todo. Si algo quiero seguir descubriendo, son todos esos pequeños momentos que todavía nos quedan por vivir juntos. Te quiero muchísimo. ❤️"
    }

];  

    /* ============================
       CREAR PRINCIPALES
    ============================ */

    principales.forEach(
        (dato) => {

            crearEstrella(
                dato,
                false
            );

        }
    );


    /* ============================
       CREAR SECRETAS
    ============================ */

    secretas.forEach(
        (dato) => {

            crearEstrella(
                dato,
                true
            );

        }
    );

}


/* =====================================================
   CREAR ESTRELLA
===================================================== */

function crearEstrella(
    dato,
    secreta
) {

    const estrella =
        document.createElement("div");


    estrella.className =
        secreta
            ? "estrellaSecreta"
            : "estrella";


    estrella.style.left =
        dato.x + "%";


    estrella.style.top =
        dato.y + "%";


    estrella.dataset.descubierta =
        "false";


    estrella.addEventListener(
        "click",
        () => {

            descubrirEstrella(
                estrella,
                dato.texto
            );

        }
    );


    universo.appendChild(
        estrella
    );

}


/* =====================================================
   DESCUBRIR ESTRELLA
===================================================== */

function descubrirEstrella(
    estrella,
    texto
) {

    if (
        estrella.dataset.descubierta ===
        "true"
    ) {

        return;

    }


    estrella.dataset.descubierta =
        "true";


    estrellaActual =
        estrella;


    estrellasDescubiertas++;


    /*
       La estrella todavía se queda visible
       mientras Luna lee el mensaje.
    */


    mostrarMensaje(
        texto
    );

}


/* =====================================================
   MOSTRAR MENSAJE
===================================================== */

function mostrarMensaje(
    texto
) {

    textoMensaje.innerHTML =
        texto;


    mensaje.classList.add(
        "mostrar"
    );

}


/* =====================================================
   CERRAR MENSAJE
===================================================== */

cerrarMensaje.addEventListener(
    "click",
    () => {


        mensaje.classList.remove(
            "mostrar"
        );


        /*
           Ahora sí desaparece la estrella.
        */

        if (estrellaActual) {

            estrellaActual.classList.add(
                "desvanecer"
            );


            estrellaActual =
                null;

        }


        /*
           Si encontró las 18,
           mostramos el mensaje especial.
        */

        if (
            estrellasDescubiertas >=
            TOTAL_ESTRELLAS
        ) {

            setTimeout(() => {

                mostrarMensaje(
                    "Has encontrado todas las estrellas de este pequeño universo. 🌌❤️"
                );


                mensaje.dataset.completo =
                    "true";


            }, 1800);

        }

    }
);


/* =====================================================
   MOSTRAR FINAL
===================================================== */

cerrarMensaje.addEventListener(
    "click",
    () => {


        if (
            mensaje.dataset.completo ===
            "true"
        ) {

            mensaje.dataset.completo =
                "false";


            setTimeout(() => {

                mostrarFinal();

            }, 1000);

        }

    }
);


/* =====================================================
   FINAL
===================================================== */

function mostrarFinal() {


    universo.style.opacity =
        "0";


    tituloUniverso.style.opacity =
        "0";


    setTimeout(() => {

        final.classList.add(
            "mostrar"
        );

    }, 2500);

}