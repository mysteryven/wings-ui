import 'jest-extended';
declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png';
