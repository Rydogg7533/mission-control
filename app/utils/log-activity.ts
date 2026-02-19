/**
 * Activity Logger
 * Use this to log meaningful actions to Mission Control activity feed
 * Projects can call this to log their own activities
 */

export type ActivityType =
  | 'task_completed'
  | 'task_started'
  | 'deploy'
  | 'cron_run'
  | 'error'
  | 'memory_update'
  | 'file_processed'
  | 'content_generated'
  | 'trade_executed'
  | 'note';

export interface ActivityLogPayload {
  actor: 'tom' | 'ryan' | 'system' | 'cron' | 'bot';
  action_type: ActivityType;
  title: string;
  description?: string;
  project?: string;
  related_task_id?: string;
  related_tool?: string;
  metadata?: Record<string, any>;
}

export async function logActivity(payload: ActivityLogPayload) {
  try {
    const res = await fetch('/api/activity', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error('Failed to log activity:', await res.text());
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error('Error logging activity:', err);
    return null;
  }
}

// Convenience functions
export const activityLog = {
  taskStarted: (title: string, project?: string, taskId?: string) =>
    logActivity({
      actor: 'tom',
      action_type: 'task_started',
      title,
      project,
      related_task_id: taskId,
    }),

  taskCompleted: (title: string, project?: string, taskId?: string) =>
    logActivity({
      actor: 'tom',
      action_type: 'task_completed',
      title,
      project,
      related_task_id: taskId,
    }),

  deployed: (title: string, project?: string, tool?: string, metadata?: any) =>
    logActivity({
      actor: 'system',
      action_type: 'deploy',
      title,
      project,
      related_tool: tool,
      metadata,
    }),

  error: (title: string, project?: string, description?: string, metadata?: any) =>
    logActivity({
      actor: 'system',
      action_type: 'error',
      title,
      project,
      description,
      metadata,
    }),

  note: (title: string, project?: string, description?: string) =>
    logActivity({
      actor: 'tom',
      action_type: 'note',
      title,
      project,
      description,
    }),

  contentGenerated: (title: string, project?: string, tool?: string) =>
    logActivity({
      actor: 'tom',
      action_type: 'content_generated',
      title,
      project,
      related_tool: tool,
    }),

  fileProcessed: (title: string, project?: string, tool?: string, metadata?: any) =>
    logActivity({
      actor: 'tom',
      action_type: 'file_processed',
      title,
      project,
      related_tool: tool,
      metadata,
    }),

  tradeExecuted: (title: string, project?: string, metadata?: any) =>
    logActivity({
      actor: 'bot',
      action_type: 'trade_executed',
      title,
      project,
      metadata,
    }),
};
