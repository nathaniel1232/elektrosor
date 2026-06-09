-- Lagrer ordre-ID-en vi får tilbake fra Installer når en bestilling sendes videre.
-- Kolonnen er nullable fordi Installer-integrasjonen kan være avslått eller feile —
-- bestillingen skal fortsatt lagres lokalt selv om videresending ikke gikk gjennom.
alter table public.bestilling
  add column if not exists installer_order_id text;
