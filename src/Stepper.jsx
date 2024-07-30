import { useState } from 'react';

const Stepper = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <div className="container">
        {steps.map((step, index) => {
          return (
            <div className="step-container">
              <div
                className={`number-container ${
                  currentStep > index ? 'active' : ''
                }`}
              >
                {index + 1}
                {steps.length !== index + 1 && (
                  <div
                    className={`line ${currentStep > index ? 'active' : ''}`}
                  />
                )}
              </div>
              <div className="step-label">{step.label}</div>
            </div>
          );
        })}
      </div>
      <div className="buttons-container">
        <button
          onClick={() => {
            if (currentStep > 0) {
              setCurrentStep((s) => s - 1);
            }
          }}
        >
          prev
        </button>
        <button
          onClick={() => {
            if (currentStep < 5) {
              setCurrentStep((s) => s + 1);
            }
          }}
        >
          next
        </button>
      </div>
    </>
  );
};

export default Stepper;
