//***** Index of various font styles for Fat Slob Plumbing *****//

///// TITLE /////
type TitleProps = {
  content: string;
};
export const Title = ({ content }: TitleProps) => {
  return (
    <>
      <h1>{content}</h1>
    </>
  );
};

///// SUB-HEADER /////
type SubHeaderProps = {
  content: string;
  color?: string;
};
export const SubHeader = ({ content, color }: SubHeaderProps) => {
  return (
    <>
      <div className="subHeader">
        <h2>{content}</h2>
      </div>
      <style jsx>{`
        h2 {
          color: ${color ?? 'var(--clr-text-light)'};
          font-size: clamp(1.25rem, 10vw, 40px);
          font-weight: 900;
          text-align: center;
        }
      `}</style>
    </>
  );
};

///// SECTION TITLE /////
type SectionTitleProps = {
  content?: string;
  color?: string;
};

export const SectionTitle = ({ content, color }: SectionTitleProps) => {
  return (
    <>
      <div className="sectionTitle">
        <h1>{content}</h1>
      </div>

      <style jsx>{`
        h1 {
          display: inline-block;
          font-size: clamp(2rem, 10vw, 80px);
          font-family: var(--ff-primary);
          font-weight: 900;
          letter-spacing: -0.1rem;
          margin: 0px;
          text-align: left;
        }
      `}</style>
    </>
  );
};

///// LEFT-ALIGNED PARAGRAPH /////
type ParaLProps = {
  content: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  padding?: string;
  width?: string;
};
export const ParaL = ({
  content,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  padding,
  width,
}: ParaLProps) => {
  return (
    <>
      <p>{content}</p>
      <style jsx>{`
        p {
          color: ${color ?? 'var(--clr-text-light)'};
          font-size: ${fontSize ?? '1.5rem'};
          font-weight: ${fontWeight ?? '900'};
          line-height: ${lineHeight ?? '2.25rem'};
          padding: ${padding ?? '0'};
          text-align: left;
          width: ${width ?? '100%'};
        }
      `}</style>
    </>
  );
};

///// CENTER ALIGNED PARAGRAPH /////
type ParaCProps = {
  content: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
};

// define Paragraph component
export const ParaC = ({
  content,
  color,
  fontSize,
  fontWeight,
}: ParaCProps) => {
  return (
    <>
      <span>{content}</span>
      <style jsx>{`
        span {
          color: ${color ?? 'var(--clr-text-light)'};
          font-size: ${fontSize ?? '2rem'};
          font-weight: ${fontWeight ?? '700'};
          padding: 1.5rem 0rem;
          text-align: center;
        }
      `}</style>
    </>
  );
};

///// FOOTER TEXT /////
type FooterTextProps = {
  content: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  paddingTop?: string;
};

// define Paragraph component
export const FooterText = ({
  content,
  color,
  fontSize,
  fontWeight,
  paddingTop,
}: FooterTextProps) => {
  return (
    <>
      <span>{content}</span>
      <style jsx>{`
        span {
          color: ${color ?? 'var(--clr-text-secondary)'};
          font-size: ${fontSize ?? '1rem'};
          font-weight: ${fontWeight ?? '500'};
          padding-top: ${paddingTop ?? '0rem'};
          text-align: center;
        }
      `}</style>
    </>
  );
};

///// EXPORTS /////
export const Typography = {
  Title: Title,
  SubHeader: SubHeader,
  SectionTitle: SectionTitle,
  ParaL: ParaL,
  ParaC: ParaC,
  FooterText: FooterText,
};
