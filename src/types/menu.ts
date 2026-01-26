export type MenuItem = {
  key: string;
  href?: string;
  children?: MenuItem[];
};

export type MenuData = MenuItem[];
