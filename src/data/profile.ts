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
  (
    [
      "",
      "Familiar",
      "Intermediate",
      "Proficient",
      "Advanced",
      "Expert",
    ] as const
  )[level] ?? "";

export const profile: Profile = {
  firstName: "Marcin",
  lastName: "Winogrodzki",
  handle: "code.mw",
  email: "hire@code-mw.pl",
  linkedin: "https://www.linkedin.com/in/winogrodzkimarcin/",
  avatar: "/avatar.jpg",
  tagline: "DevOps/Software Engineer",
  metaDescription:
    "Software and DevOps Engineer with 5+ years of experience designing high-availability systems and reliable delivery pipelines at large-scale organisations. Focused on operational excellence, security, and sustainable infrastructure.",
  cvFilename: "marcin-winogrodzki-cv.pdf",
  about: [
    "Software and DevOps Engineer with 5+ years of commercial experience at large-scale organisations. Works across both sides of the stack: building backend web applications from the ground up, and designing the high-availability infrastructure that runs them in production.",
    "Deeply familiar with the full delivery lifecycle - from application architecture and API design through to CI/CD pipelines, secrets management, and monitoring strategies that surface meaningful signal over noise.",
    "Proven track record of reducing operational toil, improving system reliability, and bridging the gap between development and operations in complex, multi-team environments.",
  ],
  skills: [
    {
      name: "Languages",
      skills: [
        { name: "PHP (Symfony)", level: 4, icon: "simple-icons:php" },
        { name: "Python (Flask)", level: 3, icon: "simple-icons:python" },
        { name: "GoLang", level: 2, icon: "simple-icons:go" },
        { name: "Bash", level: 3, icon: "simple-icons:gnubash" },
        { name: "SQL", level: 3, icon: "simple-icons:postgresql" },
      ],
    },
    {
      name: "Cloud and Infrastructure",
      skills: [
        { name: "AWS", level: 4, icon: "simple-icons:amazonaws" },
        { name: "Cloudflare", level: 1, icon: "simple-icons:cloudflare" },
        { name: "Terraform", level: 5, icon: "simple-icons:terraform" },
        { name: "Terragrunt", level: 5, icon: "simple-icons:terraform" },
        { name: "Docker", level: 4, icon: "simple-icons:docker" },
        { name: "Kubernetes", level: 2, icon: "simple-icons:kubernetes" },
        { name: "Packer", level: 3, icon: "simple-icons:packer" },
      ],
    },
    {
      name: "Operations",
      skills: [
        { name: "Linux (RHEL)", level: 3, icon: "simple-icons:linux" },
        { name: "Linux (Debian)", level: 3, icon: "simple-icons:linux" },
        { name: "Puppet", level: 5, icon: "simple-icons:puppet" },
        { name: "Jenkins", level: 5, icon: "simple-icons:jenkins" },
        { name: "Ansible", level: 2, icon: "simple-icons:ansible" },
        { name: "Zabbix", level: 5, icon: "simple-icons:zazzle" },
        { name: "Vault", level: 3, icon: "simple-icons:vault" },
      ],
    },
    {
      name: "AI Tools",
      skills: [
        { name: "Claude Code", level: 4, icon: "simple-icons:anthropic" },
        {
          name: "GitHub Copilot",
          level: 4,
          icon: "simple-icons:githubcopilot",
        },
      ],
    },
  ],
};
