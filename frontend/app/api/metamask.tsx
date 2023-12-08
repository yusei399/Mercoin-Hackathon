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
