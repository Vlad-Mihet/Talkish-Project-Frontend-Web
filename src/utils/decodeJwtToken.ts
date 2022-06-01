import jwtDecode from 'jwt-decode';

const decodeJwtToken = (jwtToken: string) => jwtDecode(jwtToken);

export default decodeJwtToken;
