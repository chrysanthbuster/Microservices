package com.microservices.mockproducts;

import com.microservices.mockproducts.Attributes.Colors;
import com.microservices.mockproducts.Attributes.Sizes;

import java.util.*;
import java.util.stream.Collectors;

public class ProductStore {

    static Map<Long, Product> productBridgeMock = Collections.synchronizedMap(new HashMap<Long, Product>());

    public ProductStore(){
        //set up mock values
        productBridgeMock.put(1L,
                new Product(1L, "Basic t-shirt", "a quiet t-shirt", 40, "eur",
                    new Sizes("s", "m", "l"),
                    new Colors("red", "blue", "green")
                ));
        productBridgeMock.put(2L,
                new Product(2L, "Fancy t-shirt", "a loud t-shirt", 50, "eur",
                    new Sizes("s", "m", "l", "xl"),
                    new Colors("All", "Batique")));
    }

    public List<Product> getAllProducts() {
        return productBridgeMock.values().parallelStream().collect(Collectors.toCollection(ArrayList::new));
    }

    public List<Product> getManyProducts(List<Long> productIds) {
        return productBridgeMock.values().parallelStream().filter(c -> productIds.contains(c.getProductId())).collect(Collectors.toCollection(ArrayList::new));
    }

    public Product getSingleProduct(Long productId) {
        return productBridgeMock.get(productId);
    }



}
