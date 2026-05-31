const DISABLED_MESSAGE = 'Auto update is disabled for this custom build'

function disabledPayload(extra: Record<string, any> = {}) {
  return {
    success: false,
    message: DISABLED_MESSAGE,
    ...extra,
  }
}

export async function stopPreviewRuntime(): Promise<void> {
  // Version preview/update runtime is disabled for custom builds.
}

export async function handleUpdate(ctx: any) {
  ctx.status = 403
  ctx.body = disabledPayload()
}

export async function previewStatus(ctx: any) {
  ctx.body = disabledPayload({
    running: false,
    pid: null,
    url: '',
    current_tag: '',
    preview_dir: '',
    logs: '',
    action_logs: '',
  })
}

export async function previewTags(ctx: any) {
  ctx.status = 403
  ctx.body = disabledPayload({ tags: [] })
}

export async function preparePreview(ctx: any) {
  ctx.status = 403
  ctx.body = disabledPayload()
}

export async function installPreview(ctx: any) {
  ctx.status = 403
  ctx.body = disabledPayload()
}

export async function startPreview(ctx: any) {
  ctx.status = 403
  ctx.body = disabledPayload()
}

export async function stopPreview(ctx: any) {
  ctx.body = disabledPayload({ running: false })
}
