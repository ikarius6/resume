import { useLangStore } from "@/store/langStore"

export function Text ({
  text = '', 
  date = new Date()
}) {
  const { isEnglish } = useLangStore(state => state)

  const dictionary = {
    profession: {
      es: "Ingeniero en Sistemas Computacionales",
      en: "Computer Systems Engineer"
    },
    about_me: {
      es: "Sobre mí",
      en: "About me"
    },
    home: {
      es: "Inicio",
      en: "Home"
    },
    contact_me: {
      es: "Contáctame",
      en: "Contact Me"
    },
    library: {
      es: "Biblioteca",
      en: "Library"
    },
    download: {
      es: "Descargar",
      en: "Download"
    },
    about_me_1: {
      es: "Soy un programador apasionado, me gusta mantenerme en movimiento y seguir aprendiendo todos los dias, me interesa ayudar a encontrar soluciones eficientes o crearlas.\nSoy extremadamente curioso, me interesa la seguridad informática y la involucro en todo lo que hago.",
      en: "I am a passionate programmer, I like to keep moving and continue learning every day, I am interested in helping and find efficient solutions or creating them.\nI am extremely curious, I am interested in computer security and I involve it in everything I do."
    },
    about_me_2: {
      es: "Actualmente vivo en: México",
      en: "Currently living in: Mexico"
    },
    technologies: {
      es: "Tecnologías",
      en: "Technologies"
    },
    year: {
      es: "año",
      en: "year"
    },
    years: {
      es: "años",
      en: "years"
    },
    experience: {
      es: "Experiencia",
      en: "Experience"
    },
    projects: {
      es: "Proyectos",
      en: "Projects"
    },
    others: {
      es: "Otros",
      en: "Others"
    },
    software_engineer: {
      es: "Ingeniero de Software",
      en: "Software Engineer"
    },
    senior_developer: {
      es: "Programador Senior",
      en: "Senior Developer"
    },
    web_developer: {
      es: "Desarrollador Web",
      en: "Web Developer"
    },
    current: {
      es: "actualidad",
      en: "current"
    },
    footer_1: {
      es: "Página creada con",
      en: "Website created with"
    },
    footer_2: {
      es: "código fuente",
      en: "source code"
    },
    footer_3: {
      es: "por",
      en: "by"
    }
  }

  if (text)
    return (
      dictionary[text] ? (isEnglish ? dictionary[text].en : dictionary[text].es) : text
    )

  if (date)
    return new Intl.DateTimeFormat(isEnglish?"en-US":"es-MX", {month:'long', year: 'numeric'}).format(date)
}