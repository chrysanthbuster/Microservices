package com.microservices.mockproducts.Attributes;

import java.util.List;
import lombok.Data;

@Data
public class Sizes extends Attribute{
    public List<String> sizes;

    public Sizes(String... sizes) {
        this.sizes = List.of(sizes);
    }
}
