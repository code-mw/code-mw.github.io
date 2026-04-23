export interface Skill {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Profile {
  firstName: string;
  lastName: string;
  handle: string;
  email: string;
  linkedin: string;
  avatar: string;
  tagline: string;
  metaDescription: string;
  about: string[];
  skills: SkillCategory[];
  cvFilename: string;
}

export const levelLabel = (level: number): string =>
  (['', 'Familiar', 'Intermediate', 'Proficient', 'Advanced', 'Expert'] as const)[level] ?? '';

export const profile: Profile = {
  firstName: 'Marcin',
  lastName: 'Winogrodzki',
  handle: 'code.mw',
  email: 'hire@code-mw.pl',
  linkedin: 'https://www.linkedin.com/in/winogrodzkimarcin/',
  avatar: '/avatar.jpg',
  tagline: 'DevOps/Software Engineer',
  metaDescription:
    'Software and DevOps Engineer with 5+ years of commercial experience at large-scale tech companies. Specialises in building and operating reliable, high-performance infrastructure.',
  cvFilename: 'marcin-winogrodzki-cv.pdf',
  about: [
    'Software and DevOps Engineer with 5+ years of commercial experience at large-scale tech companies. Specialises in building and operating reliable, high-performance infrastructure - from application development through to production, with a strong focus on security and operational excellence.',
    'Proficient in PHP, Python, and Go for backend development, with hands-on experience across the full infrastructure stack: Terraform, Terragrunt, Puppet, Jenkins, Zabbix, Docker, and Kubernetes. Deep working knowledge of AWS and Linux (Debian, Fedora). Embraces AI-assisted development with Claude and GitHub Copilot to drive engineering efficiency.',
    'Proven track record of leading infrastructure improvements, reducing operational toil, and delivering continuous improvement in complex, multi-team environments.',
  ],
  skills: [
    {
      name: 'Languages',
      skills: [
        { name: 'PHP', level: 4, icon: 'simple-icons:php' },
        { name: 'Python', level: 3, icon: 'simple-icons:python' },
        { name: 'GoLang', level: 2, icon: 'simple-icons:go' },
        { name: 'Bash', level: 3, icon: 'simple-icons:gnubash' },
        { name: 'SQL', level: 4, icon: 'simple-icons:postgresql' },
      ],
    },
    {
      name: 'Cloud and Infrastructure',
      skills: [
        { name: 'AWS', level: 4, icon: 'simple-icons:amazonaws' },
        { name: 'Cloudflare', level: 1, icon: 'simple-icons:cloudflare' },
        { name: 'Terraform', level: 5, icon: 'simple-icons:terraform' },
        { name: 'Terragrunt', level: 5, icon: 'simple-icons:terraform' },
        { name: 'Docker', level: 4, icon: 'simple-icons:docker' },
        { name: 'Kubernetes', level: 2, icon: 'simple-icons:kubernetes' },
        { name: 'Packer', level: 3, icon: 'simple-icons:packer' },
      ],
    },
    {
      name: 'Operations',
      skills: [
        { name: 'Linux (RHEL)', level: 3, icon: 'simple-icons:linux' },
        { name: 'Linux (Debian)', level: 3, icon: 'simple-icons:linux' },
        { name: 'Puppet', level: 5, icon: 'simple-icons:puppet' },
        { name: 'Jenkins', level: 5, icon: 'simple-icons:jenkins' },
        { name: 'Ansible', level: 2, icon: 'simple-icons:ansible' },
        { name: 'Zabbix', level: 5, icon: 'simple-icons:zazzle' },
        { name: 'Vault', level: 3, icon: 'simple-icons:vault' },
      ],
    },
    {
      name: 'AI Tools',
      skills: [
        { name: 'Claude Code', level: 4, icon: 'simple-icons:anthropic' },
        { name: 'GitHub Copilot', level: 4, icon: 'simple-icons:githubcopilot' },
      ],
    },
  ],
};
