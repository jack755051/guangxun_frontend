export interface CardItemHeaderFaIcon {
  icon: string;
  color: string;
}

export interface CardItemHeaderImage {
  link: string;
  alt: string;
}

export type CardItemHeaderAvatar = CardItemHeaderFaIcon | CardItemHeaderImage;
