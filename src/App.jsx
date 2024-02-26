/* eslint-disable react/jsx-key */
import { useMultistepForm } from './useMultistepForm';
import { PersonalInfo } from './PersonalInfo';
import { SelectPlan } from './SelectPlan';
import { SelectAddOn } from './SelectAddOns';
import { Summary } from './Summary';
import { useState } from 'react';

const INITIAL_DATA = {
    name: '',
    email: '',
    phone: '',
    plan: '',
    addon: '',
};

function App() {
    const [data, setData] = useState(INITIAL_DATA);

    function updateFields(INITIAL_DATA) {
        setData((prev) => {
            return { ...prev, ...INITIAL_DATA };
        });
    }

    const {
        steps,
        currentStepIndex,
        step,
        isFirstStep,
        back,
        next,
        isLastStep,
    } = useMultistepForm([
        <PersonalInfo {...data} updateFields={updateFields} />,
        <SelectPlan {...data} />,
        <SelectAddOn {...data} />,
        <Summary {...data} />,
    ]);

    function onSubmit(e) {
        e.preventDefault();
        next();
    }

    return (
        <div
            style={{
                position: 'relative',
                background: 'white',
                border: '1px solid black',
                padding: '2rem',
                margin: '1rem',
                borderRadius: '.5rem',
                fontFamily: 'Arial',
            }}
        >
            <form>
                <div
                    style={{
                        position: 'absolute',
                        top: '.5rem',
                        right: '.5rem',
                    }}
                >
                    {currentStepIndex + 1} /{steps.length}
                </div>
                {step}
                <div
                    style={{
                        margin: '1rem',
                        display: 'flex',
                        gap: '.5rem',
                        justifyContent: 'flex-end',
                    }}
                >
                    {!isFirstStep && (
                        <button type='button' onClick={back}>
                            Back
                        </button>
                    )}
                    <button type='submit' onClick={onSubmit}>
                        {isLastStep ? 'Finished' : 'Next'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default App;
