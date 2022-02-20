export const getFormData = (event: any) => {
  const temp = new FormData(event.target);
  const data: { [key: string]: any }[] = [];
  for (const [k, v] of temp) {
    data.push({ [k]: v });
  }
  return data;
};