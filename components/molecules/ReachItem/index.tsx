interface Props {
  countText: string;
  caption: string;
}

function ReachItem({ countText, caption }: Props) {
  return (
    <div className="me-lg-35">
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
        {countText}
      </p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">
        {caption}
      </p>
    </div>
  );
}

export default ReachItem;
