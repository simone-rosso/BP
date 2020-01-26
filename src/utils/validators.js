import { isValid, isNIF, isNIE, ctrlChar } from "better-dni";

export const checked = (value, options) => {
  if (value !== true) {
    return options.message || 'must be checked';
  }
};

export default {
  checked
};

export const isPhone = (value) => {
  var str = value.toString().replace(/\s/g, '');
  return str.length === 9 && /^[679]{1}[0-9]{8}$/.test(str);
}

export const isGeneric = (text) => {
  if (text !== '') {
    return /^(?:[^0-9!<>,;?=+()\/\\@#"°*`{}_^$%:¤\[\]|\.。]|[\.。](?:\s|$))*$/u.test(text)
  } else {
    return false
  }
}

export const isAddress = (text) => {
  if (text !== '') {
    return /^[^!<>?=+@{}_$%]*$/u.test(text)
  } else {
    return false
  }
}

export const isCityName = (text) => {

  const provices = [
    'A Coruña',
    'Álava',
    'Albacete',
    'Alicante',
    'Almería',
    'Asturias',
    'Ávila',
    'Badajoz',
    'Baleares',
    'Barcelona',
    'Burgos',
    'Cáceres',
    'Cádiz',
    'Cantabria',
    'Castellón',
    'Ciudad Real',
    'Córdoba',
    'Cuenca',
    'Girona',
    'Gerona',
    'Granada',
    'Guadalajara',
    'Gipuzkoa',
    'Huelva',
    'Huesca',
    'Jaén',
    'La Rioja',
    'Las Palmas',
    'León',
    'Lérida',
    'Lleida',
    'Lugo',
    'Madrid',
    'Málaga',
    'Murcia',
    'Navarra',
    'Ourense',
    'Palencia',
    'Pontevedra',
    'Salamanca',
    'Segovia',
    'Sevilla',
    'Soria',
    'Tarragona',
    'Santa Cruz de Tenerife',
    'Teruel',
    'Toledo',
    'Valencia',
    'Valladolid',
    'Vizcaya',
    'Zamora',
    'Zaragoza']

  if (text !== '') {
    return /^[^!<>;?=+@#"°{}_$%]*$/u.test(text)
  } else {
    return false
  }
}

export const isPostCode = (text) => {
  if (text !== '') {
    return /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/.test(text)
  } else {
    return false
  }
}

export const isDni = (text) => {
  if (isValid(text) || isNIF(text) || isNIE(text)) {
    return true
  }
  return false
}

export const isEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}


export const isPassword = (passwd) => {
  return passwd.length > 5 ? true : false
}
