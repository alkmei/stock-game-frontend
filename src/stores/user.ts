import { defineStore } from 'pinia'
import supabase from "@/supabase";
import type { User, Session } from "@supabase/supabase-js"
import axios from "axios"

const backend_url = import.meta.env.VITE_BACKEND_URL

interface UserState {
    user: User | null,
    session: Session| null
}

export const useUserStore = defineStore({
    id: 'counter',
    state: (): UserState => ({
        user: null,
        session: null
    }),
    actions: {
        checkIn() {
          this.user = supabase.auth.user();
          this.session = supabase.auth.session();
          console.log(this.user)
          console.log(this.session)
        },
        async signIn(email: string, password: string) {
            const {user, session, error} = await supabase.auth.signIn({
                email: email,
                password: password
            })
            if (error) throw error;
            this.user = user;
            this.session = session;
        },
        async signUp(email: string, password: string, username: string) {
            const {user, session, error} = await supabase.auth.signUp({
                email: email,
                password: password
            }, {
                data: {
                    username: username
                }
            })
            if (error) throw error;
            this.user = user;
            this.session = session;
            if (typeof this.session == null) throw error;
            await axios.post(`${backend_url}/portfolios`, {}, {
                headers: {
                    //@ts-ignore
                    "Authorization": `Bearer ${this.session.access_token}`
                }
            })
        },
        async signOut() {
            const {error} = await supabase.auth.signOut();
            if (error) throw error;
            this.user = null;
            this.session = null;
        }
    }
})
