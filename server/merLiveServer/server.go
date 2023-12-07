package main

import (
	"encoding/json"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"log"
	"math/big"
	"net/http"
	"strconv"
	"strings"
	"sync"

	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/ethereum/go-ethereum/ethclient"
)

var (
	paidSum int
	mutex   sync.Mutex
)

// main function to boot up everything
func main() {
	http.HandleFunc("/pay", payHandler)
	log.Println("Listening on http://localhost:3000/")
	log.Fatal(http.ListenAndServe(":3000", nil))
}

func payHandler(w http.ResponseWriter, r *http.Request) {
	// Infuraを通じてGoerliテストネットに接続
	APIKey := "YOUR_API_KEY"
	client, err := ethclient.Dial("https://goerli.infura.io/v3/" + APIKey)
	if err != nil {
		log.Fatalf("Failed to connect to the Ethereum client: %v", err)
	}

	// 秘密鍵を使ってトランザクションを署名するための認証情報を設定
	privateKey, err := crypto.HexToECDSA("YOUR_PRIVATE_KEY")
	if err != nil {
		log.Fatal(err)
	}

	value, err := strconv.Atoi(r.URL.Query().Get("value"))
	if err != nil {
		// 不正な値が入力された場合はエラーレスポンスを返す
		http.Error(w, "Invalid increment value", http.StatusBadRequest)
		return
	}

	toAddress, err := strconv.Atoi(r.URL.Query().Get("toAddress"))
	if err != nil {
		// 不正な値が入力された場合はエラーレスポンスを返す
		http.Error(w, "Invalid increment value", http.StatusBadRequest)
		return
	}

	auth, err := bind.NewKeyedTransactorWithChainID(privateKey, big.NewInt(5)) // GoerliのチェーンIDは5です
	if err != nil {
		log.Fatal(err)
	}

	// スマートコントラクトのアドレス
	contractAddress := common.HexToAddress("")

	const contractAbi = ``

	// ABI をパース
	parsedAbi, err := abi.JSON(strings.NewReader(contractAbi))
	if err != nil {
		log.Fatal(err)
	}

	// ここでスマートコントラクトのインスタンスを生成し、ミント関数を呼び出します
	// 例: contractInstance, err := NewYourContract(address, client)
	//contractInstance, err := NewYourContract(address, client)

	// スマートコントラクトのインスタンスを生成
	contractInstance := bind.NewBoundContract(contractAddress, parsedAbi, client, client, client)

	// トランザクションを送信するためのコード
	// 例: tx, err := contractInstance.Mint(auth, ...)
	//tx, err := contractInstance.Mint(auth, 100)
	tx, err := contractInstance.Transact(auth, "mint", toAddress, value)
	if err != nil {
		log.Fatalf("Failed to execute transaction: %v", err)
	}
	log.Printf("Tx sent: %s", tx.Hash().Hex())
	mutex.Lock()
	paidSum += value
	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/json")
	response := map[string]int{"status": 1}
	mutex.Unlock()
	err = json.NewEncoder(w).Encode(response)
	if err != nil {
		return
	}
}
