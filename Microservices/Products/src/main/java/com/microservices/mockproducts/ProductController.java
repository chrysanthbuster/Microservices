package com.microservices.mockproducts;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")

public class ProductController {


    public ProductStore productStore;
    public ProductController(){
        this.productStore = new ProductStore();
    }

    /**
     * Returns products of productIds, or all products if no productIds is provided.
     *
     * @param productIds the product ids to return
     * @return A List of Product based on productIds
     */
    @GetMapping("/")
    public List<Product> GetProductByIds(@RequestParam(required = false) Long[] productIds){
        if (productIds == null) {
            return productStore.getAllProducts();
        }
        return productStore.getManyProducts(List.of(productIds));
    }


    /**
     * Get a Product by product id
     *
     * @param productId
     * @return A product with id equal to productId
     */
    @GetMapping("/{productId}")
    public Product GetProductById(@PathVariable Long productId) {
        return  productStore.getSingleProduct(productId);
    }

    /*
        @PostMapping("/")
        public List<Product> AddProducts(){
            return null;
        }

        @PutMapping("/{id}")
        public Product UpdateProducts(@PathVariable int id){
            return new Product(id);
        }

        @DeleteMapping({"/{id}"})
        public Product DeleteProducts(@PathVariable int id){
            return new Product(id);
        }
    */


}
