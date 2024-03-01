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
    plan: 0,
    addon: [],
};

function App() {
    const [data, setData] = useState(INITIAL_DATA);

    function updateFields(data) {
        setData((prev) => {
            return { ...prev, ...data };
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
        <SelectPlan {...data} updateFields={updateFields} />,
        <SelectAddOn {...data} />,
        <Summary {...data} />,
    ]);

    function onSubmit(e) {
        e.preventDefault();
        if (!isLastStep) return next();
        alert('Do somethiing with your data');
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
                maxWidth: 'max-content',
            }}
        >
            <form onSubmit={onSubmit}>
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
                    <button type='submit'>
                        {isLastStep ? 'Finished' : 'Next'}
                    </button>
                </div>
            </form>
            <pre>{JSON.stringify(data)}</pre>
        </div>
    );
}

export default App;
