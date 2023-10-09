interface IProps {
    name: string
}

interface IFavorityCityProps extends IProps {}

interface IHomeProps extends IProps {}

type RouteNameType = IFavorityCityProps | IHomeProps | undefined

interface IRouteName {
    [index: string]: RouteNameType
    Home: IHomeProps
    FavoriteCity: IFavorityCityProps
}