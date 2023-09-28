type TextGradientProps = {
  text: string;
  from?: string;
  via?: string;
  to?: string;
  fontStyle?: string;
};

export default function TextGradient(props: TextGradientProps) {
  const from = props.from || "from-strong-azure";
  const via = props.via || "via-yellow-gold";
  const to = props.to || "to-strong-azure";
  const fontStyle =
    props.fontStyle ||
    "md:text-5xl text-2xl font-semibold max-w-2xl mx-auto p-1";
  return (
    <span
      className={`bg-gradient-to-r ${from} ${via} ${to} ${fontStyle} text-transparent bg-clip-text bg-300% animate-gradient`}
    >
      {props.text}
    </span>
  );
}
