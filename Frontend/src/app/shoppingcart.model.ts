export interface ShoppingCart {
    ProductName: string;
    Price: Money;
}

interface Money {
    Currency: string;
    Amount: number;
}
