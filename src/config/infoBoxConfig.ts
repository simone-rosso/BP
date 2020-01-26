import { ICardInfo } from "../models";

const infoBoxConfig: ICardInfo[] = [
  {
    title: 'Primeros pasos',
    href: '/primeros_pasos',
    text: 'Explicación de que aquí encontrará explicación de cómo funciona.',
    titleColors: ['#ffbc02', '#ffeab3'],
    backgroundColor: 'inherit'
  },
  {
    title: 'FAQ',
    href: '/FAQ',
    text: 'Explicación de que aquí podrá resolver dudas que tenga.',
    titleColors: ['#40c940', '#d7f4d7'],
    backgroundColor: 'inherit'
  },
  {
    href: 'https://www.bluephage.com/',
    logo: '/images/logos/bp.white.svg',
    text: 'Lorem ipsum explicación de que es un acceso directo a su web.',
    backgroundColor: '#322f78'
  },
  {
    href: 'https://en.wikipedia.org/wiki/Coliphage',
    logo: '%PUBLIC_URL%/images/logo192.png',
    text: 'Lorem ipsum explicación de que es un acceso directo a su web.',
    backgroundColor: '#668b76'
  }
]

export default infoBoxConfig