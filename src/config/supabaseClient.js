import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lvehxnsnmusbusqmaebn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2ZWh4bnNubXVzYnVzcW1hZWJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NDE1NDEsImV4cCI6MTk5MjAxNzU0MX0.9FIagetOnY5NPukK71-JKO42TtdxR7vlh3W6B0aUojo";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
