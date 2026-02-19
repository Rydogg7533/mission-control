# Mission Control

Global visibility dashboard for all projects (ReceiptsFlow, NEXUS, Trading Edge, Solar tracker, etc.)

## Features

- **Tasks Board** — Kanban board for all project tasks
- **Activity Feed** — Timeline of all project activities and logs
- **Calendar** — Scheduled tasks and automation (coming soon)
- **Memory Viewer** — Search across all saved memory files (coming soon)

## Setup

### 1. Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
ADMIN_USER_ID=your-admin-uuid
NEXT_PUBLIC_ADMIN_USER_ID=your-admin-uuid
```

Get these from your Supabase dashboard → Settings → API.

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase

Mission Control uses the same Supabase instance as your other projects. Create these tables:

```sql
-- tasks
create table tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  assigned_to text default 'unassigned',
  status text default 'backlog',
  priority text default 'medium',
  category text default 'feature',
  project text,
  spec_reference text,
  related_tool text,
  due_date timestamp,
  completed_at timestamp,
  created_at timestamp default now(),
  updated_at timestamp default now()
);

-- activity_log
create table activity_log (
  id uuid primary key default gen_random_uuid(),
  actor text not null,
  action_type text not null,
  title text not null,
  project text,
  description text,
  related_task_id uuid,
  related_tool text,
  metadata jsonb,
  created_at timestamp default now()
);

-- scheduled_tasks
create table scheduled_tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  schedule_type text not null,
  cron_expression text,
  schedule_description text,
  category text,
  is_active boolean default true,
  last_run_at timestamp,
  next_run_at timestamp,
  created_at timestamp default now()
);

-- memory_entries
create table memory_entries (
  id uuid primary key default gen_random_uuid(),
  entry_type text not null,
  title text not null,
  content text,
  source_file text,
  tags text[],
  created_at timestamp default now()
);
```

### 4. Run Locally

```bash
npm run dev
```

Visit `http://localhost:3000`

## Logging Activities

From any of your projects, log activities to Mission Control:

```typescript
import { activityLog } from '@/app/utils/log-activity';

// Log a completed task
await activityLog.taskCompleted('Built feature X', 'ReceiptsFlow', taskId);

// Log a deployment
await activityLog.deployed('Deployed v1.2', 'ReceiptsFlow', 'vercel');

// Log an error
await activityLog.error('API timeout', 'NEXUS', 'connection error', { timestamp: Date.now() });

// Log a trade execution
await activityLog.tradeExecuted('Sold 100 shares AAPL', 'NEXUS', { price: 150.25, quantity: 100 });
```

## Deployment

Deploy to Vercel:

1. Push to GitHub: `git push origin main`
2. Create Vercel project pointing to this repo
3. Set environment variables in Vercel
4. Deploy!

Then you'll have Mission Control at `mission-control.vercel.app` (or your custom domain).

## Architecture

- **Framework:** Next.js 14 + React
- **Database:** Supabase (PostgreSQL)
- **Styling:** Tailwind CSS
- **Hosting:** Vercel

All projects log to the same Supabase instance for centralized visibility.
