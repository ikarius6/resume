export interface CompanyType {
  name: string
	position: string
  projects?: string[]
  technologies?: string[]
  extras?: string[]
  startDate?: Date
  endDate?: Date
	link?: string
}
  
export const companies: CompanyType[] = [
  {
    name: 'Freelance',
    position: 'Ingeniero de Software',
    startDate: undefined,
    endDate: undefined,
    projects: ['Desarrollo', 'Colaboración', 'Seguridad'],
    technologies: ['TypeScript', 'NodeJS', 'MongoDB', 'APIs', 'AWS', 'GCP', 'Git'],
    extras: undefined,
    link: 'https://alexomar.com/'
  },
  {
    name: 'Wizeline',
    position: 'Ingeniero de Software',
    startDate: new Date('03/22/2022'),
    endDate: undefined,
    projects: ['Wizeline Academy', 'Univision'],
    technologies: ['TypeScript', 'NodeJS', 'MongoDB', 'Redis', 'APIs', 'Fastify', 'GCP'],
    extras: undefined,
    link: 'https://www.wizeline.com/'
  },
  {
    name: 'Globant',
    position: 'Programador Senior',
    startDate: new Date('01/01/2017'),
    endDate: new Date('03/22/2022'),
    projects: ['OpenBank', 'Johnson & Johnson', 'Realogy', 'Marvel'],
    technologies: ['React', 'Laravel', 'PHP', 'MySQL', 'APIs', 'NodeJS', 'AWS', 'Git'],
    extras: ['Líder de equipo'],
    link: 'https://www.globant.com/'
  },
  {
    name: 'Mitec',
    position: 'Programador Senior',
    startDate: new Date('07/01/2016'),
    endDate: new Date('01/01/2017'),
    projects: ['Chatbot'],
    technologies: ['NodeJS', 'MongoDB', 'APIs', 'CodeIgniter', 'PHP', 'Git'],
    extras: ['Líder de equipo', 'Desarrollador de productos'],
    link: 'https://www.mitec.com.mx/'
  },
  {
    name: 'Gigigo',
    position: 'Programador Senior',
    startDate: new Date('05/01/2015'),
    endDate: new Date('07/01/2016'),
    projects: ['Danone', 'Punto Trader Game', 'Coca-cola Pay With Love', 'Bancomer Beacons', 'Marke', 'Abastece Aí', 'Cocacola En Tu Hogar', 'Bluetogo'],
    technologies: ['NodeJS', 'Angular', 'Laravel', 'CodeIgniter', 'PHP', 'VueJS', 'MySQL', 'Git'],
    extras: ['Líder de equipo'],
    link: 'https://econocompsdigital.com/'
  },
  {
    name: 'Nurun México / Lead2Action',
    position: 'Programador Senior',
    startDate: new Date('08/01/2013'),
    endDate: new Date('05/01/2015'),
    projects: ['Audi', 'Porsche', 'Playskool', 'BestBuy', 'Seat', 'Gamesa', 'Sabritas', 'Pepsi', 'Sonrix'],
    technologies: ['Laravel', 'CodeIgniter', 'PHP', 'NodeJS', 'MySQL', 'APIs', 'AWS', 'Unity', 'HTML', 'JS', 'CSS', 'Git'],
    extras: undefined,
    link: 'https://www.nurun.com'
  },
  {
    name: 'Mexanet',
    position: 'Desarrollador Web',
    startDate: new Date('12/01/2011'),
    endDate: new Date('02/01/2013'),
    projects: ['Oportunica', 'Casas y Terrenos Morelia', 'Red Contacto Médico', 'Muebles Diana', 'Marketer', 'Hotel Jorges', 'Autran Dental Studio', 'Moreliato', 'Poemas Nuevos', 'La Cocina es Arte'],
    technologies: ['CodeIgniter', 'PHP', 'MySQL', 'HTML', 'JS', 'CSS'],
    extras: undefined,
    link: undefined
  },
  {
    name: 'Netbit Soluciones',
    position: 'Desarrollador Web',
    startDate: new Date('02/01/2011'),
    endDate: new Date('12/01/2011'),
    projects: ['Varios'],
    technologies: ['PHP', 'MySQL', 'HTML', 'JS', 'CSS'],
    extras: undefined,
    link: undefined
  },
  {
    name: 'BtcIncs',
    position: 'Programador y Diseñador Web',
    startDate: new Date('09/01/2010'),
    endDate: new Date('02/01/2011'),
    projects: ['Varios'],
    technologies: ['Python', 'Django', 'MySQL', 'HTML', 'JS', 'CSS'],
    extras: undefined,
    link: undefined
  }
]

export interface TechnologyType {
  name: string
	experience: string
  icon: string
}
  
export const technologies: TechnologyType[] = [
  {
    name: 'TypeScript',
    experience: '1 año',
    icon: 'vscode-icons:file-type-typescript'
  },
  {
    name: 'NodeJS',
    experience: '5 años',
    icon: 'vscode-icons:file-type-node'
  },
  {
    name: 'PHP',
    experience: '12 años',
    icon: 'logos:php'
  },
  {
    name: 'Laravel',
    experience: '5 años',
    icon: 'logos:laravel'
  },
  {
    name: 'React',
    experience: '2 años',
    icon: 'logos:react'
  },
  {
    name: 'JavaScript',
    experience: '14 años',
    icon: 'logos:javascript'
  },
  {
    name: 'HTML',
    experience: '14 años',
    icon: 'vscode-icons:file-type-html'
  },
  {
    name: 'CSS',
    experience: '14 años',
    icon: 'vscode-icons:file-type-css'
  },
  {
    name: 'MongoDB',
    experience: '5 años',
    icon: 'vscode-icons:file-type-mongo'
  },
  {
    name: 'MySQL',
    experience: '10 años',
    icon: 'vscode-icons:file-type-mysql'
  },
  {
    name: 'AWS',
    experience: '5 años',
    icon: 'logos:aws'
  },
  {
    name: 'git',
    experience: '8 años',
    icon: 'vscode-icons:file-type-git'
  }
]