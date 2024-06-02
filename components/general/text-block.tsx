type TextBlockProps = {
  heading?: string;
  description?: string;
};
export default function TextBlock({ heading, description }: TextBlockProps) {
  return (
    <div>
      {heading && <h3>{heading}</h3>}
      {description && <p className="lg:text-xl">{description}</p>}
    </div>
  );
}
