function FormInput({ label, type, name }) {
  return (
    <>
      <fieldset className="fieldset">
        <legend  className="max-lg:text-white  fieldset-legend">{label}</legend>
        <input  type={type} name={name} className="input text-black" placeholder={label} />
      </fieldset>
    </>
  );
}

export default FormInput;
