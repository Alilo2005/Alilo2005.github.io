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
      header: 'Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['Alilo2005/portfolio'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Alilo2005/ali-shop', 'Alilo2005/CineAi', 'Alilo2005/TRACEROUTE-GLOBE-VIZ'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
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
    imageURL: 'https://drive.google.com/file/d/1kauegW4s8MMrJOL7H-qeJp0GUnmCs1ap/view?usp=drive_link',
  },
  social: {
    linkedin: 'mahdi-ali-59b08829b',
    instagram: 'mahdiali9893',
    phone: '+213667622648',
    email: 'ma_mahdi@esi.dz',
  },
  bio: 'Full-Stack Web Developer | IST engineer @ ESI | Passionate About AI & Emerging Tech',
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'Next.js',
    'MySQL',
    'MongoDB',
    'Git',
    'Tailwind CSS',
    'Python',
    'Angular',
    'Java',
    'C',
    'Assembly',
    'DjangoRestFramework'
  ],
  hobbies: [
    'Writing',
    'Gaming',
    'Reading'
  ],
  experiences: [
     {
      company: 'Astrotech',
      position: 'Projects Manager',
      from: 'September 2025',
      to: 'Present',
      companyLink: 'https://www.instagram.com/astrotech_esi/',
    },
    {
      company: 'GDG Algiers',
      position: 'Web Developer',
      from: 'September 2024',
      to: 'Present',
      companyLink: 'https://gdg.community.dev/gdg-algiers/',
    },
    {
      company: 'Shellmates',
      position: 'Web Developer',
      from: 'September 2024',
      to: 'Present',
      companyLink: 'https://www.shellmates.club/',
    },
    {
      company: 'School of AI',
      position: 'Technical',
      from: 'September 2024',
      to: 'Present',
      companyLink: 'https://www.instagram.com/soai_algiers/',
    },
      {
      company: 'Partners Algeria',
      position: 'Web Developer Intern',
      from: 'July 2025',
      to: 'August 2025',
      companyLink: 'https://www.facebook.com/AlgeriaPartnersOfficiel/',
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
      name: 'Cloud Computing 101 by Amazon',
      body: 'Amazon Web Services Training and Certification',
      year: 'Octobre 2025',
      link: 'https://www.credly.com/badges/da53037e-9632-4727-9a72-dce4972f8f68/public_url',
    },
    {
      name: 'Data structures and Algorithms in JavaScript',
      body: 'reprsent 300 hours of training in JavaScript DSA',
      year: 'August 2023',
      link: 'https://www.freecodecamp.org/certification/Ali_Mahdi/javascript-algorithms-and-data-structures',
    },
    {
      name: 'Database Mangaement with MySQL',
      body: 'Navigate and extract insights from the data using SQL',
      year: 'August 2025',
      link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/ca423e67a2cbb87d5e8dabaad0e41785b72d7f90',
    }
  ],
  educations: [
    {
      institution: 'Esi Algiers',
      degree: 'Computer Science Engineer',
      from: '2022',
      to: '2027',
    },
    {
      institution: 'Belckacemi-Ahmed High School',
      degree: 'Baccalaureat in mathematics',
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
    id: 'G-TR5XQ4SPFG', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'coffee', // Default theme, check https://daisyui.com/docs/theming/

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
  footer: `Made by <a 
      class="text-primary" href="https://github.com/Alilo2005"
      target="_blank"
      rel="noreferrer"
    >Mahdi Ali</a> with ❤️`,

  enablePWA: true,
};

export default CONFIG;
