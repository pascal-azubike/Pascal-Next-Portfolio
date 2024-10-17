import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [

    {
      groupLabel: "Contents",
      menus: [
        {
          href: "",
          label: "Products",
          active: pathname.includes("/Admin/products"),
          icon: SquarePen,
          submenus: [
            {
              href: "/Admin/manage-products",
              label: "Manage Products",
              active: pathname === "/Admin/manage-products"
            },
            {
              href: "/Admin/create-product",
              label: "Create Product",
              active: pathname === "/Admin/create-product"
            }
          ]
        },
        {
          href: "",
          label: "Articles",
          active: pathname.includes("/Articles"),
          icon: SquarePen,
          submenus: [
            {
              href: "/Admin/manage-articles",
              label: "Manage Articles",
              active: pathname === "/Admin/manage-articles"
            },
            {
              href: "/Admin/create-article",
              label: "Create Article",
              active: pathname === "/Admin/create-article"
            }
          ]
        },

      ],

    },

    {
      groupLabel: "",
      menus: [
        {
          href: "/Admin/change-password",
          label: "Change Password",
          active: pathname.includes("/Admin/change-password"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },

  ];
}
