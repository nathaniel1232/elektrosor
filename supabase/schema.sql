-- ============================================================
-- Elektro Sør – Supabase schema
-- Run this once in Supabase → SQL Editor → New query → Run.
-- It is safe to re-run (uses IF NOT EXISTS).
-- ============================================================

-- ---------- Tables ----------

create table if not exists public.bestilling (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  status        text not null default 'new',
    -- 'new' | 'contacted' | 'scheduled' | 'done' | 'cancelled'
  name          text not null,
  email         text not null,
  phone_number  text not null,
  address       text,
  city          text,
  postal_code   text,
  service_type  text,
  description   text not null,
  internal_notes text
);

create table if not exists public.contact_message (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  status      text not null default 'new',
  first_name  text not null,
  last_name   text,
  email       text not null,
  message     text not null
);

create table if not exists public.job_application (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),
  status          text not null default 'new',
  position_id     text not null,           -- 'industri' | 'service' | 'laerling'
  position_title  text not null,
  name            text not null,
  email           text not null,
  phone           text,
  message         text
);

create table if not exists public.chat_conversation (
  id                uuid primary key default gen_random_uuid(),
  created_at        timestamptz not null default now(),
  session_id        text not null,
  user_message      text not null,
  assistant_reply   text not null,
  history           jsonb
);

-- ---------- Indexes ----------

create index if not exists bestilling_created_idx
  on public.bestilling (created_at desc);

create index if not exists contact_message_created_idx
  on public.contact_message (created_at desc);

create index if not exists job_application_created_idx
  on public.job_application (created_at desc);

create index if not exists chat_conversation_session_idx
  on public.chat_conversation (session_id, created_at);

-- ---------- Row-Level Security ----------
-- Vi bruker den publishable (anon) nøkkelen i appen.
-- Anon får KUN lov til å INSERT i de fire skjema-tabellene — ingen SELECT/UPDATE/DELETE.
-- Det betyr: selv om nøkkelen lekker, kan en angriper bare sende inn søppel,
-- ikke lese eksisterende henvendelser eller slette data.
-- Eier ser alt via Supabase-dashboardet (som bruker en annen, autentisert rolle).

alter table public.bestilling         enable row level security;
alter table public.contact_message    enable row level security;
alter table public.job_application    enable row level security;
alter table public.chat_conversation  enable row level security;

drop policy if exists "anon insert"  on public.bestilling;
drop policy if exists "anon insert"  on public.contact_message;
drop policy if exists "anon insert"  on public.job_application;
drop policy if exists "anon insert"  on public.chat_conversation;

create policy "anon insert" on public.bestilling
  for insert to anon with check (true);

create policy "anon insert" on public.contact_message
  for insert to anon with check (true);

create policy "anon insert" on public.job_application
  for insert to anon with check (true);

create policy "anon insert" on public.chat_conversation
  for insert to anon with check (true);
