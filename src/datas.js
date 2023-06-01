import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const infos = [
  {
    id: 1,
    title: "The Best Dashboard Admin",
    element: <StarIcon color="primary" fontSize="large" />,
  },
  {
    id: 2,
    title: "Easy Management",
    element: <ElectricBoltIcon color="primary" fontSize="large" />,
  },
  {
    id: 3,
    title: "24 Hours Support",
    element: <InfoIcon color="primary" fontSize="large" />,
  },
  {
    id: 4,
    title: "Premium Plan",
    element: <WorkspacePremiumIcon color="primary" fontSize="large" />,
  },
];

const chartData = [
  {
    weekDay: "Saturday",
    "Sign Up Count": 2,
  },
  {
    weekDay: "Sunday",
    "Sign Up Count": 5,
  },
  {
    weekDay: "Monday",
    "Sign Up Count": 6,
  },
  {
    weekDay: "Tuesday",
    "Sign Up Count": 3,
  },
  {
    weekDay: "Wednesday",
    "Sign Up Count": 1,
  },
  {
    weekDay: "Thursday",
    "Sign Up Count": 10,
  },
  {
    weekDay: "Friday",
    "Sign Up Count": 12,
  },
];

export { infos, chartData };
