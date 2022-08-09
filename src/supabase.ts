import {createClient } from "@supabase/supabase-js";

const url = "https://eqvleepjksjjwztghhwx.supabase.co"
const api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxdmxlZXBqa3Nqand6dGdoaHd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk5MzE0ODcsImV4cCI6MTk3NTUwNzQ4N30.-Fc7Ko05Q68-HFJA8xeBNpCkRzOhBB4Pk5dxyN_0KZg"

const supabase = createClient(url, api_key)

export default supabase;
