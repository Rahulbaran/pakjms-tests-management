export default function modifyDateString(date) {
  const ar = date.split("-");
  return `${ar[2]}/${ar[1]}/${ar[0]}`;
}
