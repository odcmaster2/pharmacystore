
const BASE_URL =  'http://localhost:5000';

export const DRUGS_URL = BASE_URL + '/api/drugs';
export const DRUGS_TAGS_URL = DRUGS_URL + '/tags';
export const DRUGS_BY_SEARCH_URL = DRUGS_URL + '/search/';
export const DRUGS_BY_TAG_URL = DRUGS_URL + '/tag/';
export const DRUGS_BY_ID_URL = BASE_URL + '/api/drugs/';

export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';

export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
