

import { PiSecurityCameraFill } from "react-icons/pi";
import { IconType } from "react-icons";


import { TbReport } from "react-icons/tb";
import { FaBuildingCircleArrowRight } from "react-icons/fa6";

import { GiSpanner } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { FaRoute } from "react-icons/fa6";

import { GiGasPump } from "react-icons/gi";
import { GiSteeringWheel } from "react-icons/gi";

// Define the type for a FleetCards
interface FleetCard {
  icon: IconType;
  title: string;
  description: string;

}

// Define the FleetCards array with type annotations
export const FleetCards: FleetCard[] = [
  {
    icon: FaLocationDot,
    title: "FleetCard_card.tracking.title",//"Real-Time Vehicle Tracking",
    description:"FleetCard_card.tracking.desc",
      //"Monitor fleet movements with GPS-based tracking for enhanced visibility",
  },
  {
    icon: FaRoute,
    title: "FleetCard_card.route.title",//"Route Optimization",
    description: "FleetCard_card.route.desc",
     // "Reduce fuel consumption and travel time with AI-powered route planning",
  },
  {
    icon: GiGasPump,
    title:  "FleetCard_card.fuel.title",//"Fuel Management",
    description:  "FleetCard_card.fuel.desc",//"Track fuel usage, prevent fraud, and optimize costs",
  },
  {
    icon: GiSteeringWheel,
    title: "FleetCard_card.driver.title",//"Driver Behavior Monitoring",
    description: "FleetCard_card.driver.desc",//"Ensure safety and efficiency by analyzing driving patterns",
  },
  {
    icon: GiSpanner,
    title: "FleetCard_card.predictive.title",//"Predictive Maintenance",
    description: "FleetCard_card.predictive.desc",//"Prevent breakdowns with AI-driven maintenance alerts",
  },
  {
    icon: TbReport,
    title: "FleetCard_card.compliance.title",//"Compliance & Reporting",
    description: "FleetCard_card.compliance.desc",//"Automate regulatory compliance and generate detailed reports",
  },
  {
    icon: PiSecurityCameraFill,
    title: "FleetCard_card.security.title",//"Fleet Security",
    description:"FleetCard_card.security.desc",
      //"Geofencing, remote immobilization, and theft prevention solutions",
  },
  {
    icon: FaBuildingCircleArrowRight,
    title: "FleetCard_card.inventory.title",//"Inventory & Asset Management",
    description:"FleetCard_card.inventory.desc",
      //"Keep track of vehicle equipment, spare parts, and onboard assets to ensure efficient utilization and reduce losses",
  },
];
