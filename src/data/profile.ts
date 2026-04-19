export interface Profile {
  firstName: string;
  lastName: string;
  handle: string;
  email: string;
  linkedin: string;
  avatar: string;
  tagline: string;
  about: string[];
}

export const profile: Profile = {
  firstName: 'Marcin',
  lastName: 'Winogrodzki',
  handle: 'code.mw',
  email: 'hire@code-mw.pl',
  linkedin: 'https://www.linkedin.com/in/winogrodzkimarcin/',
  avatar: '/avatar.jpg',
  tagline: 'Senior DevOps / SRE Engineer',
  about: [
    'Software and DevOps Engineer with 5+ years of commercial experience at large-scale tech companies. Specialises in building and operating reliable, high-performance infrastructure - from application development through to production, with a strong focus on security and operational excellence.',
    'Proficient in PHP, Python, and Go for backend development, with hands-on experience across the full infrastructure stack: Terraform, Terragrunt, Puppet, Jenkins, Zabbix, Docker, and Kubernetes. Deep working knowledge of AWS and Linux (Debian, Fedora). Embraces AI-assisted development with Claude and GitHub Copilot to drive engineering efficiency.',
    'Proven track record of leading infrastructure improvements, reducing operational toil, and delivering continuous improvement in complex, multi-team environments.',
  ],
};
