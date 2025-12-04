export interface IntroInterface {
  title: string;
  subtitle: {
    span: string;
    text: string;
  };
  image: {
    src: string;
    alt: string;
    author: string;
  };
  news: {
    openText: string;
  };
  video: {
    url: string;
    title: string;
    author: string;
  }
}