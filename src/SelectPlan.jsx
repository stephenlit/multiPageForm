import { FormWrapper } from "./FormWrapper";

export function SelectPlan({ plan, updateFields }) {
  return (
    <FormWrapper title="Select Plan">
      <label>Plan 1</label>
      <input
        type="radio"
        name="plan"
        value="1"
        onClick={(e) => updateFields({ plan: e.target.value })}
      />
      <label>Plan 2</label>
      <input
        type="radio"
        name="plan"
        value="2"
        onClick={(e) => updateFields({ plan: e.target.value })}
      />
      <label>Plan 3</label>
      <input
        type="radio"
        name="plan"
        value="3"
        onClick={(e) => updateFields({ plan: e.target.value })}
      />
    </FormWrapper>
  );
}
