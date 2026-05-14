export async function handleUpdate(ctx: any) {
  ctx.status = 403
  ctx.body = {
    success: false,
    message: 'Auto update is disabled for this custom build',
  }
}
