import 'styled-components';

// extend module
declare module 'styled-components' {
   export interface DefaultTheme {
      colors: {
         white: string;
         lightGrey: string;
         grey: string;
         darkGrey: string;
         black: string;
         success: string;
         error: string;
         warning: string;
         darkPurple: string;
         lightPurple:string
      },
      fontSize: {
         xxl: string,
         xl: string,
         l: string,
         m: string,
         s: string
      }
   }
}