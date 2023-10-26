 // this is a document to practice my logical skills

/*
The elves bought a gift-wrapping machine this year. But it's not programmed! We need to create an algorithm that helps it in the task.

The machine receives an array of gifts. Each gift is a string. We need the machine to wrap each gift in wrapping paper and place it in an array of wrapped gifts.

The wrapping paper is the * symbol, and in order to wrap a gift, you need to place it surrounding the string. For example:

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
    "*****\n*cat*\n*****",
    "******\n*game*\n******",
    "*******\n*socks*\n*******"
] */
/*
As you can see, the wrapping paper wraps the string. On top and bottom, so as not to leave any gaps, the corners are also covered with wrapping paper.

Note: The \n represents a line break.

Watch out! Make sure you put the right number of * symbols to wrap completely the string. But not too many! Just enough to cover the string.

Ah, and do not mutate the original array!

*/ 


// my first solution 

function wrapping(gifts) {
    let wrappedGifts = []
    let wrappingMaterial = "*"
    for (let i = 0; i < gifts.length; i++){
       wrappedGifts.push( "\n" + wrappingMaterial.repeat(gifts[i].length + 2) +"\n"+ "*" + gifts[i] + "*" + "\n" +  wrappingMaterial.repeat(gifts[i].length + 2))
  }
   
  return wrappedGifts
  
  }


// then i refactorized that dirty code to... 


function wrapping(gifts){
    const wrappingMaterial = "*"
     return gifts.map(item => { 
      const builtWrappingMaterial =  wrappingMaterial.repeat(item.length + 2)
      const wrappedGifts = `\n${builtWrappingMaterial}\n*${item}*\n${builtWrappingMaterial}`
       return wrappedGifts;
      }); 
  }
  

    const gifts = ['cat', 'game', 'socks', 'mask']
    const wrapped = wrapping(gifts)
    console.log(wrapped)


/*
te result code 

[ '
*****
*cat*
*****', '
******
*game*
******', '
*******
*socks*
*******', '
******
*mask*
******' ]
*/