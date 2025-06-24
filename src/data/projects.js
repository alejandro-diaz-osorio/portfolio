import AlarmaAntirrobo from "../assets/projects/AlarmaAntirrobo.webp";
import TxRxMorse from "../assets/projects/Tx&RxMorse.webp"
import BreakOut from "../assets/projects/break_out.webp";
import DataCRIPT from "../assets/projects/datacript.webp";
import Hora_Hispana from "../assets/projects/hora_hispana.webp";

export const projects = [
  {
    title: "Alarma Antirrobo",
    description: "Proyecto elaborado con Arduino y ESP32 con sensor HC-SR04 y API de Telegram.",
    link: "https://github.com/alejandro-diaz-osorio/anti-theft-proximity-alarm",
    image: AlarmaAntirrobo,
  },
  {
    title: "Sistema de Comunicación con Códigos Morse",
    description:
      "Proyecto elaborado con Arduino y ESP32 para enviar mensajes en código Morse.",
    link: "https://github.com/alejandro-diaz-osorio/code-morse-transmissor-and-receiver",
    image: TxRxMorse,
  },
  {
    title: "DATA.CRIPT",
    description:
    "Aplicación web para encriptar y desencriptar mensajes usando AES-128 con una clave personalizada.",
    link: "https://github.com/alejandro-diaz-osorio/datacript",
    image: DataCRIPT,
  },
  {
    title: "HORA HISPANA",
    description:
    "Aplicación web simple para visualizar la hora en diferentes países de habla hispana a partir de una fecha y hora seleccionada.",
    link: "https://github.com/alejandro-diaz-osorio/Hora-Hispana",
    image: Hora_Hispana,
  },
  {
    title: "Break Out",
    description:
      "Juego clásico Break Out desarrollado con HTML5, CSS3 y JavaScript puro sin librerías externas.",
    link: "https://github.com/alejandro-diaz-osorio/BREAK-OUT",
    image: BreakOut,
  },
];
