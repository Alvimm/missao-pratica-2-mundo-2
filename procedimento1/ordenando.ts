
const swap = (arr: any[], index1: number, index2: number) =>{
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

const shuffle = (array: any[], numSwaps: number): void => {
    for (let i = 0; i < numSwaps; i++) {
      const randomIndex1 = Math.floor(Math.random() * array.length);
      const randomIndex2 = Math.floor(Math.random() * array.length);
      [array[randomIndex1], array[randomIndex2]] = [array[randomIndex2], array[randomIndex1]];
    }
  }


  const bubble_sort = (array: number[]): number[] => {
    const n = array.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return array;
  }
  
  const selection_sort = (array: number[]): number[] => {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
      let min = i;
      for (let j = i + 1; j < len; j++) {
        if (array[j] < array[min]) {
          min = j;
        }
      }
      if (min !== i) {
        [array[i], array[min]] = [array[min], array[i]];
      }
    }
    return array;
  }
  const quick_sort = (array: number[], startIndex: number, endIndex: number): void => {
    if (startIndex < endIndex) {
      const partitionIndex = partition(array, startIndex, endIndex);
      quick_sort(array, startIndex, partitionIndex - 1);
      quick_sort(array, partitionIndex + 1, endIndex);
    }
  }
  
  const partition = (array: number[], startIndex: number, endIndex: number): number => {
    const pivotIndex = endIndex;
    let partitionIndex = startIndex;
    
    for (let i = startIndex; i < endIndex; i++) {
      if (array[i] < array[pivotIndex]) {
        [array[i], array[partitionIndex]] = [array[partitionIndex], array[i]];
        partitionIndex++;
      }
    }
  
    [array[pivotIndex], array[partitionIndex]] = [array[partitionIndex], array[pivotIndex]];
    return partitionIndex;
  }
  

function add(): void {
    const valorDigitado: HTMLInputElement = document.getElementById('valor') as HTMLInputElement;
    const lista: HTMLElement = document.getElementById('valores') as HTMLElement;
    const node: HTMLElement = document.createElement('li');
    node.textContent = valorDigitado.value;
    if (parseInt(valorDigitado.value) >= 0) lista.appendChild(node);
}
function ordenar():void {
    const lista: HTMLElement = document.getElementById('valores') as HTMLElement;
    const listaSelecao: HTMLSelectElement  = document.getElementById('selecao') as HTMLSelectElement ;
    

    const valores: number[] = Array.from(lista.children).map((item: Element) => parseInt((item as HTMLElement).innerHTML));

  const algoritmo: string = listaSelecao.options[listaSelecao.selectedIndex].value;
  switch (algoritmo) {
    case 'BubbleSort': 
    bubble_sort(valores);
      break;
    case 'SelectionSort': 
    selection_sort(valores);
      break;
    case 'QuickSort': 
    quick_sort(valores, 0, valores.length - 1);
      break;
    default:
      break;
  }

  // Passo e
  const novoConteudo: string = valores.map((valor: number) => `<li>${valor}</li>`).reduce((acumulador: string, item: string) => acumulador + item, '');
  lista.innerHTML = novoConteudo;
} 


function misturar() {
    const lista: HTMLElement = document.getElementById('valores') as HTMLElement;
    const numeros: number[] = Array.from(lista.children)
    .map(item => parseInt(item.innerHTML))
    .filter(numero => !isNaN(numero));

  shuffle(numeros, numeros.length);

  lista.innerHTML = numeros.map(numero => `<li>${numero}</li>`).join('');
} 