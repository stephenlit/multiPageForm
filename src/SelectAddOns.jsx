import { FormWrapper } from './FormWrapper';

export function SelectAddOn({ addon, updateFields }) {
    return (
        <FormWrapper title='Select Addon'>
            <label>Add On 1</label>
            <input
                type='checkbox'
                value='1'
                onChange={(e) =>
                    updateFields({ addon: e.target.value })
                }
            />
            <label>Add On 2</label>
            <input type='checkbox' />
            <label>Add On 3</label>
            <input
                type='checkbox'
                onChange={(e) =>
                    updateFields({ addon: e.target.value })
                }
            />
        </FormWrapper>
    );
}
