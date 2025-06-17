import AlarmaAntirrobo from "../assets/projects/AlarmaAntirrobo.webp";
import TxRxMorse from "../assets/projects/Tx&RxMorse.webp";
import BreakOut from "../assets/projects/break_out.webp";
import DataCRIPT from "../assets/projects/datacript.webp";

export const projects = [
  {
    title: "Alarma Antirrobo",
    description: "Proyecto elaborado con Arduino y ESP32 con sensor HC-SR04 y API de Telegram.",
    link: "https://github.com/alejo-lives/anti-theft-proximity-alarm",
    image: AlarmaAntirrobo,
  },
  {
    title: "Sistema de Comunicación con Códigos Morse",
    description:
      "Proyecto elaborado con Arduino y ESP32 para enviar mensajes en código Morse.",
    link: "https://github.com/alejo-lives/code-morse-transmissor-and-receiver",
    image: TxRxMorse,
  },
  {
    title: "Break Out",
    description:
      "Juego clásico Break Out desarrollado con HTML5, CSS3 y JavaScript puro sin librerías externas.",
    link: "https://github.com/alejo-lives/BREAK-OUT.git",
    image: BreakOut,
  },
  {
    title: "DATA.CRIPT",
    description:
      "Aplicación web para encriptar y desencriptar mensajes usando AES-128 con una clave personalizada.",
    link: "https://github.com/alejo-lives/datacript.git",
    image: DataCRIPT,
  },
];
