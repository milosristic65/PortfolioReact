import phpIcon from "../assets/TechStack/php.svg";
import drupalIcon from "../assets/TechStack/drupal.svg";
import reactIcon from "../assets/TechStack/react.svg";
import jqueryIcon from "../assets/TechStack/jquery.svg";
import dotnetIcon from "../assets/TechStack/dotnet.svg";
import mysqlIcon from "../assets/TechStack/mysql.svg";
import mssqlIcon from "../assets/TechStack/mssql.svg";
import { TechCardColor } from "../components/TechCard/types";

export interface Technology {
  name: string;
  snippet: string;
  icon: string | null;
  color?: TechCardColor;
}

export const technologies: Technology[] = [
  {
    name: "PHP",
    snippet:
      "A popular server-side scripting language especially suited for web development.",
    icon: phpIcon,
    color: TechCardColor.BLUE,
  },
  {
    name: "Drupal",
    snippet:
      "A flexible, open-source CMS built on PHP, used for complex websites and digital experiences.",
    icon: drupalIcon,
    color: TechCardColor.CYAN,
  },
  {
    name: "React",
    snippet:
      "A modern JavaScript library for building fast, interactive user interfaces.",
    icon: reactIcon,
    color: TechCardColor.CYAN,
  },
  {
    name: "jQuery",
    snippet:
      "A fast, small, and feature-rich JavaScript library for DOM manipulation and event handling.",
    icon: jqueryIcon,
    color: TechCardColor.BLUE,
  },
  {
    name: ".NET",
    snippet:
      "A Microsoft framework for building cross-platform applications and services.",
    icon: dotnetIcon,
    color: TechCardColor.PURPLE,
  },
  {
    name: "MySQL",
    snippet:
      "An open-source relational database management system known for speed and reliability.",
    icon: mysqlIcon,
  },
  {
    name: "Microsoft SQL Server",
    snippet:
      "A Microsoft-developed enterprise relational database management system.",
    icon: mssqlIcon,
  },
];
