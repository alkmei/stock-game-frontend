import { defineStore } from 'pinia'
import supabase from "@/supabase";
import type { User, Session } from "@supabase/supabase-js"
import axios from "axios"

const backend_url = import.meta.env.VITE_BACKEND_URL

interface PortfolioStocks {
    ticker: string
    bought: number
    shorted: number
}


interface Portfolio {
    money: number
    stocks: PortfolioStocks[]
    username: string
}

interface UserState {
    user: User | null
    session: Session | null
    portfolio: Portfolio | null
}

export const useUserStore = defineStore({
    id: 'counter',
    state: (): UserState => ({
        user: null,
        session: null,
        portfolio: null
    }),
    actions: {
        async loadPortfolio() {
            await axios.get(`${backend_url}/portfolios/me`, {
                headers: {
                    //@ts-ignore
                    "Authorization": `Bearer ${this.session.access_token}`
                }
            })
                .then((res) => {
                    this.portfolio = res.data
                })
        },
        checkIn() {
          this.user = supabase.auth.user();
          this.session = supabase.auth.session();
          if (this.user !== null || this.session !== null) {
            this.loadPortfolio()
          }
        }
        ,
        async signIn(email: string, password: string) {
            const {user, session, error} = await supabase.auth.signIn({
                email: email,
                password: password
            })
            if (error) throw error;
            this.user = user;
            this.session = session;
            if (this.user !== null || this.session !== null) {
                this.loadPortfolio()
            }
        },
        async signUp(email: string, password: string, username: string) {
            const {user, session, error} = await supabase.auth.signUp({
                email: email,
                password: password
            })
            if (error) throw error;
            this.user = user;
            this.session = session;
            if (typeof this.session == null) throw error;
            await axios.post(`${backend_url}/portfolios`, {"username": username}, {
                headers: {
                    //@ts-ignore
                    "Authorization": `Bearer ${this.session.access_token}`
                }
            })
            if (this.user !== null || this.session !== null) {
                this.loadPortfolio()
            }
        },
        async signOut() {
            const {error} = await supabase.auth.signOut();
            if (error) throw error;
            this.user = null;
            this.session = null;
        }
    }
})
