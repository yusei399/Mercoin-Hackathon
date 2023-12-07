package main

import (
	"encoding/json"
	"log"
	"math"
	"net/http"
	"strconv"
	"sync"
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
	value, err := strconv.Atoi(r.URL.Query().Get("value"))
	if err != nil {
		// 不正な値が入力された場合はエラーレスポンスを返す
		http.Error(w, "Invalid increment value", http.StatusBadRequest)
		return
	}
	mutex.Lock()
	paidSum += value
	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/json")
	response := map[string]float64{"tokenRate": float64(value) / math.Sqrt(float64(paidSum))}
	mutex.Unlock()
	err = json.NewEncoder(w).Encode(response)
	if err != nil {
		return
	}
}
