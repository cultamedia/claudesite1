# CULTA Media Agency — Vercel Static Ready

Bu paket Vercel-də dependency install problemi yaşamamaq üçün əvvəlcədən build olunub.

## Vercel ayarları

Framework Preset: Other
Install Command: npm ci
Build Command: npm run build
Output Directory: dist

Bu versiyada app artıq build olunub. `npm install` böyük paketlər yükləmir, ona görə Vercel-də `Installing dependencies...` hissəsi uzun çəkməməlidir.

Supabase URL və anon key build-in içinə yazılıb. Frontend Supabase anon key public sayılır; service_role key istifadə olunmayıb.

Admin panel üçün Supabase-də `supabase_setup.sql` işlədilməlidir və `culta-media` adlı public Storage bucket yaradılmalıdır.
