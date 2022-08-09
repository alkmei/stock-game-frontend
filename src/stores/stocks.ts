import { defineStore } from 'pinia'
import axios from "axios";

const backend_url = import.meta.env.VITE_BACKEND_URL

interface stock {
    name: string,
    ticker: string
}


export const useStockStore = defineStore({
    id: 'stocks',
    state: () => ({
        stocks: [],
        selectedStock: "null",
        prices: []
    }),
    getters: {
        getUppercaseNames: (state) => {
            return state.stocks.map(
                (item: stock) => {
                    return {
                        ticker: item.ticker,
                        name: item.name.charAt(0).toUpperCase() + item.name.slice(1)
                    }
                },
            )
        }
    },
    actions: {
        async getStocks() {
            const res = await axios.get(`${backend_url}/api/stocks/`)
            this.stocks = res.data
        },
        async getPrices(ticker: string) {
            const res = await axios.get(`${backend_url}/api/stocks/prices/?ticker=${ticker}`)
            this.prices = res.data.price.map((x: number) => x/100)
        }
    }
})
