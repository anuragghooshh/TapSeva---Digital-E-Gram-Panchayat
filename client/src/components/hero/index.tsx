import Hero, { HeroProps } from "./Hero";
import HeroSubTitle, { HeroSubTitleProps } from "./HeroSubTitle";
import HeroTitle, { HeroTitleProps } from "./HeroTitle";

interface HeroComponent extends React.FC<HeroProps> {
    Title: React.FC<HeroTitleProps>;
    SubTitle: React.FC<HeroSubTitleProps>;
}

const ExtendedHero = Hero as HeroComponent;

ExtendedHero.Title = HeroTitle;
ExtendedHero.SubTitle = HeroSubTitle;

export default ExtendedHero;
export { Hero };