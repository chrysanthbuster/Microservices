package com.microservices.mockproducts;

import com.microservices.mockproducts.Attributes.Attribute;
import lombok.Data;

import java.util.List;

@Data
public class Product {

    private Long productId;
    private String productName;
    private String productDescription;
    private Money price;
    private List<Attribute> attributes;

    public Product(Long productId, String productName, String productDescription, int amount, String currency, Attribute... attributes) {
        this.productId = productId;
        this.productName = productName;
        this.productDescription = productDescription;
        this.price = new Money(amount, currency);
        this.attributes = List.of(attributes);
    }

    public String toString() {
        return "Product object with productId = " + productId;
    }
}