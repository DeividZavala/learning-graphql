import useForm from "../lib/useForm";
import Form from "./styles/Form";

export default function CreateProduct() {
  const { inputs, handleChange } = useForm({
    name: "",
    price: 0,
    description: "",
  });

  return (
    <Form>
      <fieldset>
        <label>
          Image
          <input type="file" id="image" name="image" onChange={handleChange} />
        </label>
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
          Description
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
      </fieldset>

      <button type="submit">+ Add product</button>
    </Form>
  );
}
