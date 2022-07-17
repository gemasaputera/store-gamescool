import { useState } from 'react';
import Steps from '../../../constants/steps';
import StepItem from '../../molecules/StepItem';

function TransactionStep() {
  const [steps] = useState(Steps);

  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br /> Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          {steps.map((step) => (
            <StepItem {...step} key={step.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TransactionStep;
