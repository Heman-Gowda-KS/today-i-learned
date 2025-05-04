import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ympzekddjpmmukimixrh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltcHpla2RkanBtbXVraW1peHJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyNzM2NzYsImV4cCI6MjA2MTg0OTY3Nn0.HYooFYOCiiFU7zJpf-uzmM77lFNb60Kl43-pfRqIlZ4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
