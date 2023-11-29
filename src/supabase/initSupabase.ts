import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js'

// @ts-ignore
export const supabase = createClient(process.env.SUPA_BASE_URL, process.env.ANON_PUBLIC);