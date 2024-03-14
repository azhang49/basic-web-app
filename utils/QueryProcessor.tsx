export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
        "annazhan"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return ("azhang");
  }

  if (query.toLowerCase().includes("largest")) {

  }

  if (query.toLowerCase().includes("plus")) {
    const arr = query.split(" ");
    const res = parseInt(arr[2]) + parseInt(arr[4]);
    return res.toString();
  }

  return "";
}
