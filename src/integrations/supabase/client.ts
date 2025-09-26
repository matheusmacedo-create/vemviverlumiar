import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://wixvoerzuzystcpwasdx.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpeHZvZXJ6dXp5c3RjcHdhc2R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MTUwNTUsImV4cCI6MjA3NDQ5MTA1NX0.-NhKEcLg3KFajbKyUncBYeqmPpXOV1QMeTxnC7yk37M';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);