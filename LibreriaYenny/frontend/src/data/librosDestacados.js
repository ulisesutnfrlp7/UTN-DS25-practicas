// src/components/librosDestacados.js

import hermanosImg from "../assets/images/hermanos.jpg";
import neuromanteImg from "../assets/images/neuromante.jpg";
import lovecraftImg from "../assets/images/lovecraft.jpg";
import perdidaImg from "../assets/images/perdida.jpg";

export const librosDestacados = [
  {
    id: 1,
    titulo: "¡NOVELA DESTACADA!",
    descripcion: '"Los hermanos Karamazov" - Fiódor Dostoyevski',
    imagen: hermanosImg,
    ruta: "/novelas",
  },
  {
    id: 2,
    titulo: "¡SCI-FI DESTACADO!",
    descripcion: '"Neuromante" - William Gibson',
    imagen: neuromanteImg,
    ruta: "/ciencia-ficcion",
  },
  {
    id: 3,
    titulo: "¡TERROR DESTACADO!",
    descripcion: '"La llamada de Cthulhu" - H. P. Lovecraft',
    imagen: lovecraftImg,
    ruta: "/terror",
  },
  {
    id: 4,
    titulo: "¡POLICIAL DESTACADO!",
    descripcion: '"Perdida" (Gone Girl) - Gillian Flynn',
    imagen: perdidaImg,
    ruta: "/policiales",
  },
];