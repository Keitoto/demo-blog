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

export type BlogListType = {
  articles: BlogDetailType[];
  totalArticles: number;
};

export type BlogDetailType = {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: 'https://www.phonearena.com';
  };
};