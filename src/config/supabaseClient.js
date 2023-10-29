import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lvehxnsnmusbusqmaebn.supabase.co";
const supabaseKey = "YOUR_API_KEY";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
