

/**
 * Network of the wallet
 */
export type WalletNetwork =
    | "BITCOIN"
    | "ETHEREUM"
    | "POLYGON"
    | "BNB_SMART_CHAIN"
    | "BNB_BEACON_CHAIN"
    | "ARBITRUM_L2"
    | "SOLANA"
    | "AVALANCHE_C_CHAIN"
    | "TEZOS"
    | "VICTION"
    | "LITECOIN"
    | "BITCOIN_CASH"
    | "RIPPLE"
    | "STELLAR"
    | "EOS_PUBLIC"
    | "TRON"
    | "CARDANO"
    | "POLKADOT"
    | "NEAR_PROTOCOL"
    | "COSMOS"
    | "DOGECOIN"
    | "OPTIMISM_MAINNET"
    | "FANTOM"
    | "HEDERA"
    | "ALGORAND"
    | "CELESTIA";

export const WalletNetwork = {
    Bitcoin: "BITCOIN",
    Ethereum: "ETHEREUM",
    Polygon: "POLYGON",
    BnbSmartChain: "BNB_SMART_CHAIN",
    BnbBeaconChain: "BNB_BEACON_CHAIN",
    ArbitrumL2: "ARBITRUM_L2",
    Solana: "SOLANA",
    AvalancheCChain: "AVALANCHE_C_CHAIN",
    Tezos: "TEZOS",
    Viction: "VICTION",
    Litecoin: "LITECOIN",
    BitcoinCash: "BITCOIN_CASH",
    Ripple: "RIPPLE",
    Stellar: "STELLAR",
    EosPublic: "EOS_PUBLIC",
    Tron: "TRON",
    Cardano: "CARDANO",
    Polkadot: "POLKADOT",
    NearProtocol: "NEAR_PROTOCOL",
    Cosmos: "COSMOS",
    Dogecoin: "DOGECOIN",
    OptimismMainnet: "OPTIMISM_MAINNET",
    Fantom: "FANTOM",
    Hedera: "HEDERA",
    Algorand: "ALGORAND",
    Celestia: "CELESTIA",
} as const;
