require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.20",
  networks: {
    arbitrumSepolia: {
      url: "https://arb-sepolia.g.alchemy.com/v2/zfY8pu3mGX07K2ZGnxsjW4xtIji8AeAj", // URL del nodo RPC de Arbitrum Sepolia
      accounts: [`0xf4ae5bf0d01f6145dc345e3ebe63a11fcda6a1417e29b9ba483728f64425a854`] // Clave privada billetera
    }
  }
};


/*

Downloading compiler 0.8.20
Compiled 6 Solidity files successfully (evm target: paris).
Deploying contracts with the account: 0xDCf6804608A260C2313b13D02a77bB8e0600F999
Token deployed to: 0x764692eA4054C15ABB590F847624560D404Fe55b  

*/
