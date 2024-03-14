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
    const arr = query.split(", ");
    const num1 = arr[0].split(": ")[1];
    const num2 = arr[1];
    const num3 = arr[2].split("?")[0];
    const res = Math.max(Math.max(parseInt(num1), parseInt(num2)), parseInt(num3));
    return res.toString();
  }

  if (query.toLowerCase().includes("plus")) {
    const arr = query.split(" ");
    if (arr.length == 5) {
        const res = parseInt(arr[2]) + parseInt(arr[4]);
        return res.toString();
    } else {
        const res = parseInt(arr[2]) + parseInt(arr[4]) + parseInt(arr[6])
        return res.toString();
    }
  }

  if (query.toLowerCase().includes("multiplied")) {
    const arr = query.split(" ");
    const res = parseInt(arr[2]) * parseInt(arr[5]);
    return res.toString();
  }

  if (query.toLowerCase().includes("square") && query.toLowerCase().includes("cube")) {
    const arr = query.split(" ");
    const num1 = arr[12].split(",")[0];
    const num2 = arr[13].split(",")[0];
    const num3 = arr[14].split(",")[0];
    const num4 = arr[15].split(",")[0];
    const num5 = arr[16].split(",")[0];
    const num6 = arr[17].split(",")[0];
    const num7 = arr[18].split("?")[0];

    const arr2 = [num1, num2, num3, num4, num5, num6, num7];
    for (let i = 0; i < 7; i++) {
        if (Number.isInteger(Math.sqrt(parseInt(arr2[i]))) && Number.isInteger(Math.cbrt(parseInt(arr2[i])))) {
            return arr2[i];
        }
    }
  }

  return "";
}
