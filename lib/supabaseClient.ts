// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

// Use environment variables properly, do NOT pass literal strings in createClient
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
