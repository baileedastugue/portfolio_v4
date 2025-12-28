export function formatDate(dateString: string | Date): string {
  let date: Date;
  if (typeof dateString === 'string') {
    const parts = dateString.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    date = new Date(year, month, day);
  } else {
    date = dateString;
  }
  const month = date.toLocaleDateString('en-US', {
    month: 'long',
  });
  const day = date.getDate().toString();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}
