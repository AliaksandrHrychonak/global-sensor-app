export interface IRoutes {
  path: string,
  exact: boolean,
  component: string,
  name: string
}
export interface IHeaderProps {
  logo: string,
  routes: Array<IRoutes>, 
}