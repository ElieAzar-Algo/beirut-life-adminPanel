import {
  IoCartOutline,
  IoChatbubbleOutline,
  IoCashOutline,
  IoEyeOutline,
  IoHomeOutline,
  IoLogoApple,
  IoLogOutOutline,
  IoSettingsOutline,
  IoBarChartOutline,
  IoNotificationsOutline,
  IoAnalyticsOutline,
} from 'react-icons/io5';

const iconSize = 30;
export const cards = [
  {
    id: 1,
    value: '234',
    title: 'Daily Views',
    icon: <IoEyeOutline size={iconSize} className="icon-style" />,
  },
  {
    id: 2,
    value: '$80',
    title: 'Sales',
    icon: <IoCartOutline size={iconSize} className="icon-style" />,
  },
  {
    id: 3,
    value: '234',
    title: 'Comments',
    icon: <IoChatbubbleOutline size={iconSize} className="icon-style" />,
  },
  {
    id: 4,
    value: '$7,500',
    title: 'Earnings',
    icon: <IoCashOutline size={iconSize} className="icon-style" />,
  },
];

export const sidebarItems = [
  // {
  //   id: 1,
  //   icon: <IoLogoApple size={iconSize} className="icon-style" />,
  //   path: '/',
  //   title: 'Brand Name',
  // },
  {
    id: 2,
    icon: <IoHomeOutline size={iconSize} className="icon-style" />,
    path: '/',
    title: 'Dashboard',
  },
  {
    id: 3,
    icon: <IoBarChartOutline size={iconSize} className="icon-style" />,
    path: '/revenues',
    title: 'Revenues',
  },
  {
    id: 4,
    icon: <IoNotificationsOutline size={iconSize} className="icon-style" />,
    path: '/notifications',
    title: 'Notifications',
  },
  {
    id: 5,
    icon: <IoAnalyticsOutline size={iconSize} className="icon-style" />,
    path: '/analytics',
    title: 'Analytics',
  },
  {
    id: 6,
    icon: <IoSettingsOutline size={iconSize} className="icon-style" />,
    path: '/settings',
    title: 'Settings',
  },
  // {
  //   id: 7,
  //   icon: <IoLogOutOutline size={iconSize} className="icon-style" />,
  //   path: '/signout',
  //   title: 'Sign Out',
  // },
];
