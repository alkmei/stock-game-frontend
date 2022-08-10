import { defineStore } from 'pinia'
import {useUserStore} from "@/stores/user";
import {getCurrentInstance} from "vue";
import axios from "axios";

const backend_url = import.meta.env.VITE_BACKEND_URL

interface stock {
    id: string
    name: string
    ticker: string
}

interface stockWithPrices {
    ticker: string
    price: number
    today_max: number
    today_min: number
}

interface stockCombined {
    id: number
    ticker: string
    name: string
    price: number
    today_max: number
    today_min: number
}

interface stockState {
    stocks: stockCombined[]
    selectedStock: string | null
    prices: number[]
}


export const useStockStore = defineStore({
    id: 'stocks',
    state: (): stockState => ({
        stocks: [],
        selectedStock: null,
        prices: []
    }),
    actions: {
        async createTransaction(type: string, amount: number) {
            await axios.post(`${backend_url}/transactions/`, {
                transaction: {
                    type: type,
                    ticker: this.selectedStock,
                    amount: amount
                },
                req: {
                    ticker: this.selectedStock
                }
            }, {
                headers: {
                    "Authorization": `Bearer ${useUserStore()?.session?.access_token}`
                }
            }).then(async () => {
                await useUserStore().loadPortfolio()
            })
        },
        async setStock(ticker: string) {
            this.selectedStock = ticker
            await axios.post(`${backend_url}/stocks/`, {
                ticker: ticker,
                qtype: "today"
            }).then((res) => {
                this.prices = res.data.map((x: number) => x/100)
            })
        },
        async getStockNow(ticker: string) {
            await axios.post(`${backend_url}/stocks/`, {
                ticker: ticker,
                qtype: "now"
            }).then((res) => {
                this.prices.push(res.data[0]/100)
            })
        },
        async getStocks() {
            const stock_info = await axios.get(`${backend_url}/stocks/`)
            const stock_prices = await axios.get(`${backend_url}/stocks/prices`)
            const list: stockCombined[] = []
            stock_prices.data.forEach((ele: stockWithPrices) => {
                const st = stock_info.data.find((obj: stock) => obj.ticker === ele.ticker)
                list.push({
                    id: st.id,
                    ticker: ele.ticker,
                    name: st.name,
                    price: ele.price / 100,
                    today_max: ele.today_max / 100,
                    today_min: ele.today_min / 100
                })
            })
            this.stocks = list.sort((a, b) => {
                if (a.id < b.id) return -1;
                return 1
            })
            console.log(this.stocks)
        },
    }
})
