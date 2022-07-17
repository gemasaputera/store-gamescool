interface Props {
  icon: string;
  title: string;
  description1: string;
  description2: string;
}

function StepItem({ icon, title, description1, description2 }: Props) {
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <img
          height={80}
          width={80}
          className="mb-30"
          src={`/icon/${icon}.svg`}
          alt="icon step"
        />

        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {description1}
          <br />
          {description2}
        </p>
      </div>
    </div>
  );
}

export default StepItem;
