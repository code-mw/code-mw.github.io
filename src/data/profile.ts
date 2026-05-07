export interface Skill {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface ExperienceRole {
  title: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface ExperienceEntry {
  company: string;
  current?: boolean;
  employmentType?: string;
  totalDuration?: string;
  roles: ExperienceRole[];
}

export interface Profile {
  firstName: string;
  lastName: string;
  handle: string;
  email: string;
  linkedin: string;
  linkedinHandle: string;
  website: string;
  websiteHandle: string;
  tagline: string;
  metaDescription: string;
  about: string[];
  experience: ExperienceEntry[];
  skills: SkillCategory[];
  cvFilename: string;
}

const LEVEL_LABELS = [
  "",
  "Familiar",
  "Intermediate",
  "Proficient",
  "Advanced",
  "Expert",
] as const;

export const levelLabel = (level: number): string => LEVEL_LABELS[level] ?? "";

export const profile: Profile = {
  firstName: "Marcin",
  lastName: "Winogrodzki",
  handle: "code.mw",
  email: "hire@code-mw.pl",
  linkedin: "https://www.linkedin.com/in/winogrodzkimarcin/",
  linkedinHandle: "winogrodzkimarcin",
  website: "https://code-mw.github.io/",
  websiteHandle: "code-mw.github.io",
  tagline: "DevOps/Software Engineer",
  metaDescription:
    "Software and DevOps Engineer with 5+ years of experience designing high-availability systems and reliable delivery pipelines at large-scale organisations. Focused on operational excellence, security, and sustainable infrastructure.",
  cvFilename: "marcin-winogrodzki-cv.pdf",
  about: [
    "Software and DevOps Engineer with 5+ years of commercial experience at large-scale organisations. Works across both sides of the stack: building backend web applications from the ground up, and designing the high-availability infrastructure that runs them in production.",
    "Deeply familiar with the full delivery lifecycle - from application architecture and API design through to CI/CD pipelines, secrets management, and monitoring strategies that surface meaningful signal over noise.",
    "Proven track record of reducing operational toil, improving system reliability, and bridging the gap between development and operations in complex, multi-team environments.",
  ],
  experience: [
    {
      company: "code.mw",
      current: true,
      employmentType: "Self-employed",
      roles: [
        {
          title: "Company Owner",
          period: "Aug 2021 – Present",
          location: "Poznań, Poland",
          bullets: [
            "Delivering cloud infrastructure and backend engineering for US enterprise clients through a commercial partnership with GlobalLogic Poland, operating within distributed delivery teams across time zones.",
            "Designing multi-account AWS environments with Terraform and Terragrunt: VPC architecture, IAM boundary policies, RDS, ECS, S3, and cost governance.",
            "Config management with Puppet, secrets lifecycle with Vault, and infrastructure observability with Zabbix — monitoring, alerting, and SLO-aligned incident response.",
            "Owning CI/CD pipeline design and operation (Jenkins, GitHub Actions), enabling continuous delivery across multi-team environments.",
            "Developing PHP (Symfony 5.4) backend services and REST APIs, containerised with Docker and deployed on ECS.",
          ],
        },
      ],
    },
    {
      company: "Creatuity Corp.",
      employmentType: "Contract",
      roles: [
        {
          title: "Magento Developer",
          period: "Sep 2021 – Oct 2021 · 2 months",
          location: "Szczecin, Poland",
          bullets: [
            "Developed Magento 2.x modules in PHP following PSR standards and Magento best practices.",
            "Delivered template customisation, performance tuning, integration troubleshooting, and security patch rollout.",
          ],
        },
      ],
    },
    {
      company: "METRO SERVICES Sp. z o.o.",
      employmentType: "Full-time",
      totalDuration: "6 years 6 months",
      roles: [
        {
          title: "Senior Automation Developer",
          period: "Jan 2019 – Aug 2021 · 2 years 8 months",
          location: "Szczecin, Poland",
          bullets: [
            "Lead architect of enterprise-grade RPA solutions across multiple business units, delivering double-digit FTE savings.",
            "Owned the full RPA platform lifecycle: environment configuration, deployment processes, and operational monitoring.",
            "Designed automated testing frameworks for RPA processes, reducing regression risk and improving release confidence.",
            "Maintained technical documentation on Confluence; enforced Git-based version control practices across the automation team.",
          ],
        },
        {
          title: "Automation Developer",
          period: "Jan 2017 – Dec 2018 · 2 years",
          location: "Szczecin, Poland",
          bullets: [
            "Built and maintained process automation scripts and tooling across finance, HR, and operations departments.",
            "Operated within Atlassian toolchain (Jira, Confluence) and established day-to-day Git workflows.",
          ],
        },
      ],
    },
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
