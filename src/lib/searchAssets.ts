// interface Tokens {
//      items: any[];
//    }
   
//    const fetchTokens = async (walletAddress: string): Promise => {
//      const url = `https://mainnet.helius-rpc.com/?api-key=`;
//      console.log(
//        `Starting search for tokens for wallet address: ${walletAddress}`
//      );
//      try {
//        const response = await fetch(url, {
//          method: "POST",
//          headers: {
//            "Content-Type": "application/json",
//          },
//          body: JSON.stringify({
//            jsonrpc: "2.0",
//            id: "my-id",
//            method: "searchAssets",
//            params: {
//              ownerAddress: walletAddress,
//              tokenType: "all",
//              displayOptions: {
//                showCollectionMetadata: true,
//              },
//            },
//          }),
//        });
//        const data = await response.json();
//        console.log(
//          `Data returned for wallet address ${walletAddress}:`,
//          data.result
//        );
//        return { items: data.result };
//      } catch (error) {
//        console.error("Error fetching tokens:", error);
//        return { items: [] };
//      }
//    };
   
//    export default fetchTokens;