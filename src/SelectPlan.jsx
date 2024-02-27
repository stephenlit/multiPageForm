import { FormWrapper } from "./FormWrapper";

export function SelectPlan({ plan, updateFields }) {
  const handlePlanChange = (e) => {
    updateFields({ plan: e.target.value });
  };

  return (
    <FormWrapper title="Select Plan">
      <fieldset>
        <legend>Select a Plan:</legend>
        <div>
          <input
            type="radio"
            id="plan1"
            name="plan"
            value="1"
            checked={plan === "1"}
            onChange={handlePlanChange}
          />
          <label htmlFor="plan1">Plan 1</label>
        </div>
        <div>
          <input
            type="radio"
            id="plan2"
            name="plan"
            value="2"
            checked={plan === "2"}
            onChange={handlePlanChange}
          />
          <label htmlFor="plan2">Plan 2</label>
        </div>
        <div>
          <input
            type="radio"
            id="plan3"
            name="plan"
            value="3"
            checked={plan === "3"}
            onChange={handlePlanChange}
          />
          <label htmlFor="plan3">Plan 3</label>
        </div>
      </fieldset>
    </FormWrapper>
  );
}
