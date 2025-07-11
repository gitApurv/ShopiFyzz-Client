import { Container, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { getAllProducts } from "../api/products";

const products = Array(8).fill({
  _id: 1,
  imageUrl:
    "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=",
  title: "Book",
  price: 23,
  user: {
    _id: 1,
  },
});

export default function Home() {
  const [products, setProducts] = useState([]);

  const loadAllProducts = async () => {
    const allProducts = await getAllProducts();
    setProducts(allProducts);
  };

  useEffect(() => {
    loadAllProducts();
  }, [products]);

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        {products.map((product) => (
          <Grid
            item
            key={product._id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            sx={{ m: 2 }}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
