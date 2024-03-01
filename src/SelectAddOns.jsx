import { FormWrapper } from "./FormWrapper";

export function SelectAddOn({ addon, updateFields }) {
  function handleClick(data) {
    updateFields({ addon: data });
  }

  return (
    <FormWrapper title="Select Addon">
      <div
        style={{
          position: "relative",
          width: "200px",
          height: "200px",
          border: "solid 1px black",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            padding: "1rem",
          }}
          onClick={() => handleClick({ option: 1, price: 10.0 })}
        >
          <h4>Title</h4>
          <p>Free addon of glue.</p>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          width: "200px",
          height: "200px",
          border: "solid 1px black",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            padding: "1rem",
          }}
          onClick={() => handleClick({ option: 2, price: 110.0 })}
        >
          <h4>Title</h4>
          <p>Free addon of glue.</p>
        </div>
      </div>
    </FormWrapper>
  );
}
