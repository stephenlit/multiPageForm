/* eslint-disable react/prop-types */
import { FormWrapper } from './FormWrapper';

export function PersonalInfo({
    name,
    email,
    phone,
    updateFields,
}) {
    return (
        <FormWrapper title='Personal Info'>
            <label>Name:</label>
            <input
                autoFocus
                type='text'
                required
                value={name}
                onChange={(e) =>
                    updateFields({ name: e.target.value })
                }
            />
            <label>Email:</label>
            <input
                required
                type='email'
                value={email}
                onChange={(e) =>
                    updateFields({ email: e.target.value })
                }
            />
            <label>Phone:</label>
            <input
                required
                type='number'
                value={phone}
                onChange={(e) =>
                    updateFields({ phone: e.target.value })
                }
            />
        </FormWrapper>
    );
}
