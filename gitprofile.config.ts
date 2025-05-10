// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Alilo2005', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['Alilo2005/portfolio'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: '',
      // To hide the `External Projects` section, keep it empty.
      projects: [

      ],
    },
  },
  seo: {
    title: 'Portfolio of Mahdi Ali',
    description: 'Web Developer | Open Source Contributor | Tech Enthusiast | AI Enthusiast',
    imageURL: '',
  },
  social: {
    instagram: 'mahdiali9893',
    phone: '+213667622648',
    email: 'ma_mahdi@esi.dz',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'MySQL',
    'Git',
    'Tailwind CSS',
    'Python',
    'Django rest framework',
    'Angular',
    'Java',
    'C',
  ],
  experiences: [
    {
      company: 'GDG Algiers',
      position: 'Web Developer',
      from: 'September 2024',
      to: 'Present',
      companyLink: 'https://gdg.community.dev/gdg-algiers/',
    },
    {
      company: 'CSE Algiers',
      position: 'Web Developer',
      from: 'September 2024',
      to: 'Present',
      companyLink: 'https://cse-esi.dz/',
    }
  ],
  certifications: [
    {
      name: 'Backend Development and APIs',
      body: 'reprsent 300 hours of training in backend development and APIs',
      year: 'Septembre 2024',
      link: 'https://www.freecodecamp.org/certification/Ali_Mahdi/back-end-development-and-apis',
    },
        {
      name: 'Data structures and Algorithms in JavaScript',
      body: 'reprsent 300 hours of training in backend development and APIs',
      year: 'August 2023',
      link: 'https://www.freecodecamp.org/certification/Ali_Mahdi/javascript-algorithms-and-data-structures',
    }
  ],
  educations: [
    {
      institution: 'Esi Algiers',
      degree: 'Ingénieur d\'État en Informatique',
      from: '2022',
      to: '2027',
    },
    {
      institution: 'Lycée Belckacemi-Ahmed',
      degree: 'Baccalauréat en mathématiques',
      from: '2019',
      to: '2022',
    },
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'Luxury', // Default theme, check https://daisyui.com/docs/theming/

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >Mahdi Ali</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
