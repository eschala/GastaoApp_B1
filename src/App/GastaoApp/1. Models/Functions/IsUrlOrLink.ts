export function IsLink(valor: string | any): boolean {
    let evaluate: boolean;
    evaluate = (valor.startsWith("http://") || valor.startsWith("https://") || valor.includes("http"))
    return evaluate;
}

let valor = "ftp://www.example.com";
if (IsLink(valor)) {
    console.log("Es un link o URL");
}