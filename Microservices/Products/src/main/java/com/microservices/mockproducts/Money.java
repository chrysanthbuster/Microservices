package com.microservices.mockproducts;

import lombok.Data;

@Data
public class Money {
    int amount;
    String currency;

    public Money(int amount, String currency) {
        this.amount = amount;
        this.currency = currency;
    }
}