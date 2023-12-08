import Web3 from "web3";

export const executeMint = async (value: number, toAddress: string) => {
  try {
    const response = await fetch(
      `http://localhost:8000/pay?value=${value}&toAddress=${toAddress}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to execute mint: ", error);
    throw error;
  }
};

export const getMetaMaskAddress = async (): Promise<string> => {
  if ((window as any).ethereum) {
    try {
      const accounts = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });

      // MetaMask のアカウントが複数ある場合、最初のアカウントを使用
      const address = accounts[0];

      return address;
    } catch (error) {
      console.error("Failed to get MetaMask address: ", error);
      throw error;
    }
  } else {
    console.error("MetaMask not detected. Please install MetaMask.");
    throw new Error("MetaMask not detected");
  }
};

export const getMetaMaskBalance = async (
  toAddress: string
): Promise<number> => {
  let web3;
  if (typeof window !== "undefined" && window.ethereum) {
    web3 = new Web3(window.ethereum);
  }
  try {
    const balanceWei = await web3.eth.getBalance(toAddress);
    const balanceEther = web3.utils.fromWei(balanceWei, "ether");
    return parseFloat(balanceEther);
  } catch (error) {
    console.error(`Failed to get balance for address ${toAddress}: `, error);
    throw error;
  }
};

export const getMetaMaskTransactions = async (
  toAddress: string
): Promise<number[]> => {
  let web3;
  if (typeof window !== "undefined" && window.ethereum) {
    web3 = new Web3(window.ethereum);
  }

  try {
    const transactions = await web3.eth.getTransactionCount(
      toAddress,
      "latest"
    );
    const transactionList = [];

    for (let i = 0; i < transactions; i++) {
      const transaction = await web3.eth.getTransactionFromBlock("latest", i);
      const valueInEther = web3.utils.fromWei(transaction.value, "ether");
      const value = parseFloat(valueInEther);

      if (value !== 0) {
        transactionList.push(value);
      }
    }
    return transactionList;
  } catch (error) {
    console.error(
      `Failed to get balance and transactions for address ${toAddress}: `,
      error
    );
    throw error;
  }
};
