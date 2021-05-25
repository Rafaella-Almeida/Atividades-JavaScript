
const pessoas = [
   {
     nome: "pessoa1",
     maca: 14
   },

   {
     nome: "pessoa2",
     maca: 10
   },

   {
    nome: "pessoa3",
    maca: 20
  },

  {
    nome: "pessoa4",
    maca: 8
  }
]

const valorTotal = pessoas.map((i) => {
    let valorMaca = 1.30;
    const quantidadeMaca = i.maca;
    if (quantidadeMaca >= 12 ) {
      valorMaca = 1 ;
      const total = quantidadeMaca * valorMaca;
      console.log(`A ${i.nome} irá pagar um valor total de ${total} reais`)
    } else{
        const total = quantidadeMaca * valorMaca;
        console.log(`A ${i.nome} irá pagar um valor total de ${total} reais`) 
    }

})
