type Prop = { label: string; type: string; placeholder: string };

const InputField = (props: Prop) => {
  return (
    <div>
      <label className=" text-sm  text-heading flex align-item-center font-Chocolates font-light">
        {props.label}
      </label>
      <input
        type={props.type}
        name="name"
        className="mt-2 w-full p-3 pb-4 border-b-1 border-b-text-heading font-Chocolates font-light focus:outline-none focus:ring-0 focus:ring-green-900"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputField;
