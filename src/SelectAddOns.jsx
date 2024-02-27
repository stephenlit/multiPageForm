import { FormWrapper } from "./FormWrapper";

export function SelectAddOn({ updateFields }) {
  return (
    <FormWrapper title="Select Addon">
      <label>Add On 1</label>
      <input
        type="text"
        value="1"
        onChange={(e) => updateFields({ plan: e.target.value })}
      />
      <label>Add On 2</label>
      <input type="text" />
      <label>Add On 3</label>
      <input type="text" />
    </FormWrapper>
  );
}
