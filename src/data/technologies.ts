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
  icon: string | null;
  color?: TechCardColor;
}

export const technologies: Technology[] = [
  {
    name: "PHP",
    icon: phpIcon,
    color: TechCardColor.BLUE,
  },
  {
    name: "Drupal",
    icon: drupalIcon,
    color: TechCardColor.CYAN,
  },
  {
    name: "React",
    icon: reactIcon,
    color: TechCardColor.CYAN,
  },
  {
    name: "jQuery",
    icon: jqueryIcon,
    color: TechCardColor.BLUE,
  },
  {
    name: ".NET",
    icon: dotnetIcon,
    color: TechCardColor.PURPLE,
  },
  {
    name: "MySQL",
    icon: mysqlIcon,
  },
  {
    name: "Microsoft SQL Server",
    icon: mssqlIcon,
  },
];
