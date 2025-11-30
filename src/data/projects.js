import AlarmaAntirrobo from "../assets/projects/AlarmaAntirrobo.webp";
import TxRxMorse from "../assets/projects/Tx&RxMorse.webp";
import BreakOut from "../assets/projects/break_out.webp";
import DataCRIPT from "../assets/projects/datacript.webp";
import Hora_Hispana from "../assets/projects/hora_hispana.webp";
import MorseSignales from "../assets/projects/morse_signalis.webp"

export const projects = [
  {
    title: "Alarma Antirrobo",
    description: "Proyecto elaborado con Arduino y ESP32 con sensor HC-SR04 y API de Telegram.",
    github: "https://github.com/alejandro-diaz-osorio/anti-theft-proximity-alarm",
    image: AlarmaAntirrobo,
  },
  {
    title: "Sistema de Comunicación con Códigos Morse",
    description:
      "Proyecto elaborado con Arduino y ESP32 para enviar mensajes en código Morse.",
    github: "https://github.com/alejandro-diaz-osorio/code-morse-transmissor-and-receiver",
    image: TxRxMorse,
  },
  {
    title: "DATA.CRIPT",
    description:
      "Aplicación web para encriptar y desencriptar mensajes usando una clave personalizada.",
    github: "https://github.com/alejandro-diaz-osorio/datacript",
    demo: "https://datacript.netlify.app/",
    image: DataCRIPT,
  },
  {
    title: "HORA HISPANA",
    description:
      "Aplicación web simple para visualizar la hora en diferentes países de habla hispana a partir de una fecha y hora seleccionada.",
    github: "https://github.com/alejandro-diaz-osorio/Hora-Hispana",
    demo: "https://horahispana.netlify.app/",
    image: Hora_Hispana,
  },
  {
    title: "MORSE SIGNALIS",
    description:
      "Aplicación web para traducir texto a código Morse y viceversa con un diseño inspirado en telégrafos retro.",
    github: "https://github.com/alejandro-diaz-osorio/morse-signalis",
    demo: "https://morsesignalis.netlify.app/",
    image: MorseSignales,
  },
  {
    title: "BREAK-OUT",
    description:
      "Juego clásico Break-Out desarrollado con HTML5, CSS3 y JavaScript puro sin librerías externas.",
    github: "https://github.com/alejandro-diaz-osorio/BREAK-OUT",
    demo: "https://break-out.onrender.com/",
    image: BreakOut,
  },
];
