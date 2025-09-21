function FormInput({ label, type, name }) {
  return (
    <>
      <fieldset className="fieldset max-lg:text-white">
        <legend  className="fieldset-legend max-lg:text-white">{label}</legend>
        <input  type={type} name={name} className="input max-lg:text-white max-lg:bg-[#1D232A]" placeholder={label} />
      </fieldset>
    </>
  );
}

export default FormInput;
