import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/api/product.json")
      .then((res) => res.json())
      .then((products) => {
        const found = products.boxes.find((product) => product.slug === slug);
        setProduct(found);
      });
  }, [slug]);

  if (!product) {
    return <h3>Product not found</h3>;
  }
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <h1>{product.title}</h1>

      <h1>User id: {product.id}</h1>

      {product.tags.map((tag) => (
        <div key={tag.id}>
          <code>Unique id:{tag.id}</code>

          <p>
            <b>{tag.label}:</b> {tag.description}
          </p>
        </div>
      ))}
    </div>
  );
}
