import raceHub from "../../assets/img/projects/Race-Hub.png";
import lasEncinasBoutique from "../../assets/img/projects/Las-Encinas-Boutique.png";
import nextCrud from "../../assets/img/projects/NextCrud.png";

const projects = [
  {
    id: "1",
    name: "RaceHub",
    date: "Octubre, 2023",
    image: raceHub,
    repo: "https://github.com/MateoLeon505/PI-Drivers",
    deploy: "https://deploy-eight-xi.vercel.app/",
    video: "",
    description:
      "SPA desarrollada con una API con pilotos de F1. Fue un proyecto para el bootcamp de SoyHenry.",
    title: "Desarrollo del proyecto:",
    challenges:
      "Integrar la API, optimizar el rendimiento y gestionar el estado de la aplicación.",
    skills:
      "Desarrollo Fullstack, UI/UX, React, Redux, Node, Express, Sequelize, CSS.",
    impact:
      "El proyecto me permitió mejorar mis habilidades como desarrollador y crear una aplicación completa y funcional.",
    title2: "Funcionalidades:",
    details:
      "Visualizar la información, buscar, filtrar, ordenar y crear pilotos.",
    time: "3 Semanas",
  },
  {
    id: "2",
    name: "Las Encinas Boutique",
    date: "Noviembre, 2023",
    image: lasEncinasBoutique,
    repo: "https://github.com/thomasrey99/Las-Encinas-Boutique-",
    deploy: "https://las-encinas-boutique-omega.vercel.app/home",
    video: "https://www.youtube.com/watch?v=ld3ZKo4DfjE&t=58s",
    description:
      "E-Commerce de chocolatería artesanal. Fue el proyecto grupal final del bootcamp de SoyHenry.",
    title: "Participación en el proyecto:",
    challenges:
      "Implementar una interfaz de usuario atractiva y fácil de usar, integrar diferentes tecnologías y optimizar el rendimiento de la aplicación",
    skills:
      "Desarrollo Front-End/Fullstack, React, Redux Toolkit, Node, Express, Sequelize, Cloudinary, Firebase, Ant Design, UI/UX, Trabajo en equipo.",
    impact:
      "El proyecto me permitió aprender nuevas tecnologías, desarrollar habilidades blandas y trabajar en equipo de forma eficaz.",
    title2: "Funcionalidades:",
    details:
      "Usuarios: Registro, inicio de sesión, búsqueda, favoritos, compra de productos, perfil, historial, chat y 4 idiomas.",
    details2:
      "Administradores: Gestión de productos, usuarios, pedidos y pagos.",
    time: "4 semanas",
  },
  {
    id: "3",
    name: "CRUD con Next.js",
    date: "Febrero, 2024",
    image: nextCrud,
    repo: "https://github.com/MateoLeon505/NextJS-Prisma-Crud",
    deploy:
      "https://nextjs-prisma-crud-hzawjohnf-mateo-leons-projects.vercel.app/",
    video: "",
    description:
      "CRUD (Crear, Leer, Actualizar, Eliminar) desarrollado para gestionar tareas usando Nextjs.",
    title: "Desarrollo del proyecto:",
    challenges:
      "Implementar una interfaz de usuario responsive e intuitiva, integrar nuevas tecnologías y crear ApiRest",
    skills:
      "Desarrollo Fullstack, Next, Tailwind CSS, Rest API, Prisma, PostgreSQL, React Icons.",
    impact:
      "El proyecto me permitió trabajar y fortalecer mis conocimientos sobre Nextjs, teniendo en cuenta el diseño responsive y el funcionamiento óptimo.",
    title2: "Funcionalidades:",
    details:
      "Crear, leer, actualizar y eliminar tareas.",
    details2:
      "",
    time: "1 semanas",
  },
];

const projectsList = () => {
  return projects;
};

export default projectsList;
