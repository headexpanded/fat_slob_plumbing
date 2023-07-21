
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
      <h2>{content}</h2>
      <style jsx>{`
        p {
          color: ${color ?? 'var(--defaultLight'};
          font-size: 2.5rem;
          font-weight: 700;
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
        h2 {
          color: var(--defaultDark);
          font-size: clamp(1rem, 30vw, 60px);
          letter-spacing: -0.1rem;
        }
      `}</style>
    </>
  );
};

///// LEFT-ALIGNED PARAGRAPH /////
type ParagraphLProps = {
  content: string;
  color?: string;
  fontWeight?: string;
  width?: string;
};
export const ParagraphL = ({
  content,
  color,
  fontWeight,
  width,
}: ParagraphLProps) => {
  return (
    <>
      <p>{content}</p>
      <style jsx>{`
        p {
          color: ${color ?? ''};
          font-size: 1.5rem;
          font-weight: ${fontWeight ?? '700'};
          text-align: left;
          width: ${width ?? '100%'};
          line-height: 2.25rem;
        }
      `}</style>
    </>
  );
};

///// CENTER ALIGNED PARAGRAPH /////
type ParagraphCProps = {
  content: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
};

// define Paragraph component
export const ParagraphC = ({
  content,
  color,
  fontSize,
  fontWeight,
}: ParagraphCProps) => {
  return (
    <>
      <span>{content}</span>
      <style jsx>{`
        span {
          color: ${color ?? ''};
          font-size: ${fontSize ?? '2rem'};
          font-weight: ${fontWeight ?? '700'};
          padding-top: 0.8rem;
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
          color: ${color ?? ''};
          font-size: ${fontSize ?? '2rem'};
          font-weight: ${fontWeight ?? '700'};
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
  ParaL: ParagraphL,
  ParaC: ParagraphC,
  FooterText: FooterText,
};

