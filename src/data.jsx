import { AiOutlinePieChart, AiOutlineProfile } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { BsFolder } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi";
import { RiFileUserLine, RiProfileLine } from "react-icons/ri";
import { MdPeopleOutline } from "react-icons/md";
import { TbMessages } from "react-icons/tb";

export const statusData = [
  {
    title: "View",
    data: 721000,
    date: "05/01/2023",
  },
  {
    title: "Visits",
    data: 367000,
    date: "05/01/2023",
  },
  {
    title: "New Users",
    data: 1156,
    date: "05/01/2023",
  },
  {
    title: "All Users",
    data: 239000,
    date: "05/01/2023",
  },
];

export const sidebarItems = [
  {
    title: "Dashboards",
    data: [
      {
        icon: <AiOutlinePieChart size={15} style={{ margin: "0 3px" }} />,
        title: "Default",
        data: [],
      },
      {
        icon: <FiShoppingBag size={15} style={{ margin: "0 3px" }} />,
        title: "eCommerce",
        data: [],
      },
      {
        icon: <BsFolder size={15} style={{ margin: "0 3px" }} />,
        title: "Projects",
        data: [],
      },
      {
        icon: <HiOutlineBookOpen size={15} style={{ margin: "0 3px" }} />,
        title: "Online Courses",
        data: [],
      },
    ],
  },
  {
    title: "Pages",
    data: [
      {
        icon: <RiFileUserLine size={15} style={{ margin: "0 3px" }} />,
        title: "User Profile",
        data: [
          {
            title: "Overview",
          },
          {
            title: "Projects",
          },
          {
            title: "Campaigns",
          },
          {
            title: "Documents",
          },
          {
            title: "Followers",
          },
        ],
      },
      {
        icon: <RiProfileLine size={15} style={{ margin: "0 3px" }} />,
        title: "Account",
        data: [
          {
            title: "Overview",
          },
          {
            title: "Projects",
          },
          {
            title: "Campaigns",
          },
          {
            title: "Documents",
          },
          {
            title: "Followers",
          },
        ],
      },
      {
        icon: <MdPeopleOutline size={15} style={{ margin: "0 3px" }} />,
        title: "Corporate",
        data: [
          {
            title: "Overview",
          },
          {
            title: "Projects",
          },
          {
            title: "Campaigns",
          },
          {
            title: "Documents",
          },
          {
            title: "Followers",
          },
        ],
      },
      {
        icon: <AiOutlineProfile size={15} style={{ margin: "0 3px" }} />,
        title: "Blog",
        data: [
          {
            title: "Overview",
          },
          {
            title: "Projects",
          },
          {
            title: "Campaigns",
          },
          {
            title: "Documents",
          },
          {
            title: "Followers",
          },
        ],
      },
      {
        icon: <TbMessages size={15} style={{ margin: "0 3px" }} />,
        title: "Social",
        data: [
          {
            title: "Overview",
          },
          {
            title: "Projects",
          },
          {
            title: "Campaigns",
          },
          {
            title: "Documents",
          },
          {
            title: "Followers",
          },
        ],
      },
    ],
  },
];

export const rightBarItems = [
  {
    title: "Notifications",
    data: [
      {
        type: "bug",
        message: "You have a bug that needs to be fixed.",
        timestamp: "Just now",
      },
      {
        type: "bug",
        message: "New user registered",
        timestamp: "59 minutes ago",
      },
      {
        type: "bug",
        message: "You have a bug that needs to be fixed.",
        timestamp: "12 hours ago",
      },
      {
        type: "bug",
        message: "Andi Lane subscribed to you",
        timestamp: "Today, 11:59 AM",
      },
    ],
  },
  {
    title: "Activities",
    data: [
      {
        message: "Edited the details of Project X",
        timestamp: "Just now",
      },
      {
        message: "Released a new version",
        timestamp: "59 minutes ago",
      },
      {
        message: "Submitted a bug",
        timestamp: "12 hours ago",
      },
      {
        message: "Modified A data in Page X",
        timestamp: "Today, 11:59 AM",
      },
      {
        message: "Deleted a page in Project X",
        timestamp: "Feb 2, 2023",
      },
    ],
  },
  {
    title: "Contacts",
    data: [
      {
        name: "Natail Corig",
      },
      {
        name: "Drew Cano",
      },
      {
        name: "Orlando Diggs",
      },
      {
        name: "Andi Lane",
      },
      {
        name: "Kate Morrison",
      },
      {
        name: "Karray Okumus",
      },
    ],
  },
];
