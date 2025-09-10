// src/api/supabaseClient.js

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yrpqijcrjmiapsjnaamz.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlycHFpamNyam1pYXBzam5hYW16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4NjkyMTcsImV4cCI6MjA3MTQ0NTIxN30.SnELRgGmqtUQkQTDXpfvVVxFhGL7e9Nlk2swRHUcKs8'

export const supabase = createClient(supabaseUrl, supabaseKey)