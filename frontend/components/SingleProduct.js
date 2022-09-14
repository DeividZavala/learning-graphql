import Head from "next/head";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import DisplayError from "./ErrorMessage";
import styled from "styled-components";

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-height: 800px;
  max-width: var(--maxWidth);
  align-items: center;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
      description
      price
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <ProductStyles>
      <Head>
        <title>Antkeepet | {data?.Product?.name}</title>
      </Head>
      <img
        src={data?.Product?.photo?.image?.publicUrlTransformed}
        alt={data?.Product?.photo.altText}
      />
      <div className="details">
        <h2>{data?.Product?.name}</h2>
        <p>{data?.Product?.description}</p>
      </div>
    </ProductStyles>
  );
}
