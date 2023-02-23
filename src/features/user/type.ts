import { GoogleCredentialResponse } from '@react-oauth/google';

export interface DecodedUserDataResponseType {
  name: string;
  given_name: string;
  picture: string;
}
export interface DecodedUserDataType {
  name: string;
  givenName: string;
  picture: string;
}
export type UserType = GoogleCredentialResponse & DecodedUserDataType;
export type BlogType = {
  title: string;
};

// {
//   "iss": "https://accounts.google.com",
//   "nbf": 1677138478,
//   "aud": "1022925141368-qe54mfsevop6958v75ec943h4uenhhin.apps.googleusercontent.com",
//   "sub": "114194056084511604357",
//   "email": "keitasekihara@gmail.com",
//   "email_verified": true,
//   "azp": "1022925141368-qe54mfsevop6958v75ec943h4uenhhin.apps.googleusercontent.com",
//   "name": "関原啓太",
//   "picture": "https://lh3.googleusercontent.com/a/AGNmyxY9_zSTsFzXX4iqt269mx97zd4gYG8Vv3sKpXEi=s96-c",
//   "given_name": "啓太",
//   "family_name": "関原",
//   "iat": 1677138778,
//   "exp": 1677142378,
//   "jti": "e72fb2b30827ed1a8c679be50cea5de091ad89e0"
// }
