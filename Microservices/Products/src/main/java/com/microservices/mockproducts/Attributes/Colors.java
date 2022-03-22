package com.microservices.mockproducts.Attributes;

import java.util.List;
import lombok.Data;

@Data
public class Colors extends Attribute {
    public List<String> colors;

    public Colors(String... colors) {
        this.colors = List.of(colors);
    }
}
