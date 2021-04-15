function bubble_sort(vetor) {
  console.log("vetor bagunçado");
  console.log(vetor);

  var tamanho = vetor.length;
  console.log("tamanho do vetor: ", tamanho);

  for (var i = 0; i < tamanho; i++) {
    for (var j = i + 1; j < tamanho; j++) {
      console.log("Eu vou comparar o " + vetor[i] + " com " + vetor[j]);
      console.log(vetor[i] + " é maior que " + vetor[j] + "?");
      if (vetor[i] > vetor[j]) {
        console.log("SIM!!! é Maior! Então vai trocar!");
        var aux = vetor[i];
        vetor[i] = vetor[j];
        vetor[j] = aux;
        console.log("Trocô!");
      }else{
        console.log("Não!!! Segue o baba!!");

      }
      console.log("Vetor parcial");
      console.log(vetor);
    }
    console.warn("Proxima rodadada do i!");
    console.warn(vetor);
  }
}