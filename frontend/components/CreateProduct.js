import useForm from "../lib/useForm";

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: "",
    price: 0,
    description: "",
  });

  return (
    <form>
      <label>
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Price
        <input
          type="number"
          id="price"
          name="price"
          placeholder="price"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>
      <label>
        <textarea
          type="text"
          id="description"
          name="description"
          placeholder="description"
          value={inputs.description}
          onChange={handleChange}
        />
      </label>

      <button type="button" onClick={clearForm}>
        Clear form
      </button>
      <button type="button" onClick={resetForm}>
        Reset form
      </button>
    </form>
  );
}
