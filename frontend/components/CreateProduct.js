import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import useForm from "../lib/useForm";
import DisplayError from "./ErrorMessage";
import { ALL_PRODUCTS_QUERY } from "./Products";
import Form from "./styles/Form";

const ADD_PRODUCT_MUTATION = gql`
  mutation ADD_PRODUCT_MUTATION(
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      name
      description
      price
    }
  }
`;

export default function CreateProduct() {
  const { inputs, handleChange, clearForm } = useForm({
    image: "",
    name: "",
    price: 0,
    description: "",
  });

  const [createProduct, { loading, error, data }] = useMutation(
    ADD_PRODUCT_MUTATION,
    { variables: inputs, refetchQueries: [{ query: ALL_PRODUCTS_QUERY }] }
  );

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        await createProduct();
        clearForm();
      }}
    >
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
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
