

export type TransactionType = "DEPOSIT" | "TRANSFER" | "EXTERNAL_PAYMENT" | "WITHDRAWAL" | "REFUND" | "OTHER";

export const TransactionType = {
    Deposit: "DEPOSIT",
    Transfer: "TRANSFER",
    ExternalPayment: "EXTERNAL_PAYMENT",
    Withdrawal: "WITHDRAWAL",
    Refund: "REFUND",
    Other: "OTHER",
} as const;
