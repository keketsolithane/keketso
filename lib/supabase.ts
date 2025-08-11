
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseKey) throw new Error("Missing SUPABASE_KEY");
if (!supabaseUrl) throw new Error("Missing SUPABASE_URL");

const supabase = createClient(supabaseUrl, supabaseKey);

