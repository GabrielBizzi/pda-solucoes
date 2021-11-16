/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export interface LinkProps {
  codigoSistemaMenu: number;
  codigoSistema: number;
  menu: string;
  pagina: string;
  ordem: number;
}

export interface PagesProps {
  codigoSistemaMenu: number;
  codigoSistema: number;
  menu: string;
  pagina: string;
  ordem: number;
  initialPage?: string;
  links: Array<LinkProps>;
}

export const declarePages = (array: any) => {
  return array.map((page: PagesProps) => ({
    codigoSistemaMenu: page.codigoSistemaMenu,
    codigoSistema: page.codigoSistema,
    menu: page.menu,
    pagina: page.pagina,
    ordem: page.ordem,
    initialPage: page.initialPage,
    links: page.links,
  }));
};
