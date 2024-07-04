export function showErrorMessage(
  data: Array<{ field: string; message: string }>,
  field: string
): string | undefined {
  const value = data?.find((value) => value.field === field);
  return value?.message;
}
