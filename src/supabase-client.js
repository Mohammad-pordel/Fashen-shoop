import { createClient } from "@supabase/supabase-js";

const supabaseUrl="https://yneoypxtuqytgbzdwymy.supabase.co"

const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluZW95cHh0dXF5dGdiemR3eW15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNzM3NjUsImV4cCI6MjA1Mzg0OTc2NX0.OjfeP-aklLCT2kKYj3bAJT-RSb28MVjgoZ5wjl7P99U"

const supabase=createClient(supabaseUrl,supabaseKey);

export default supabase;
