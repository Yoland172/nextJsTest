export interface InlineSpinnerProps {
  size?: number;
}

const InlineSpinner = (props: InlineSpinnerProps) => {
  return (
    <div
      className="inline-block border-4 border-white rounded-full border-t-blue-800 animate-spin"
      style={{ height: `${props.size}px`, width: `${props.size}px` }}
    />
  );
};

export default InlineSpinner;
