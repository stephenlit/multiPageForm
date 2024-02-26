import { FormWrapper } from './FormWrapper';

export function SelectPlan() {
    return (
        <FormWrapper title='Select Plan'>
            <label>Plan 1</label>
            <input type='radio' name='plan' />
            <label>Plan 2</label>
            <input type='radio' name='plan' />
            <label>Plan 3</label>
            <input type='radio' name='plan' />
        </FormWrapper>
    );
}
