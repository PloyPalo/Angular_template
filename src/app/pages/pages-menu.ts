import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Dashboard",
    group: true,
  },
  {
    title: "ภาพรวม",
    icon: "paperplane-outline", //icon
    children: [
      {
        title: "ภาพรวมโรงพยาบาล",
        link: '/pages/forms/inputs',
      },
      {
        title: "ภาพรวมบุคลากร",
        link: '/pages/forms/layouts',
      },
    ],
  },
  // อืทแม
];
