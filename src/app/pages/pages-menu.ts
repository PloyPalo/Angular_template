import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Dashboard",
    group: true,
  },
  {
    title: "ภาพรวม",
    icon: "edit-2-outline",
    children: [
      {
        title: "ภาพรวมโรงพยาบาล",
        link: "/pages/forms/form-inputs",
      },
      {
        title: "ภาพรวมบุคลากร",
        link: "/pages/forms/form-layouts",
      },
    ],
  },
  // อืทแม
];
