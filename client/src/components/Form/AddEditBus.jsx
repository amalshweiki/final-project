const AddEditBus = ({ title, fields, onSubmit }) => {
  return (
    <div>
      <h1>{title}</h1>

      {fields.map((field) => (
        <div key={field.name}>
          <label className="label">{field.label} :</label>
          <input
            className="form-input"
            name={field.name}
            value={field.value}
            placeholder={field.placeholder}
            onChange={field.onChange}
          />
        </div>
      ))}

      <button type="submit" onClick={onSubmit} className="button-88">
        {title === "Add Bus" ? "Add Bus" : "Save Update"}
      </button>
    </div>
  );
};

export default AddEditBus;
