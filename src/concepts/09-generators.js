
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {

    // const myGenerator = myFirtsGeneratorFunction();

    // console.log( myGenerator.next() );
    // console.log( myGenerator.next() );
    // console.log( myGenerator.next() );
    // console.log( myGenerator.next() );

    const genId = idGenerator();

    const buttun = document.createElement('button');
    buttun.innerText = 'Click me';
    element.append( buttun );

    const renderButton = () => {
        const { value } = genId.next();

        buttun.innerText = `Click ${ value }`;
    }

    buttun.addEventListener('click', renderButton);

}

function* idGenerator() {
    let currentId = 0;
    while (true){
        yield ++currentId;
    }
}


function* myFirtsGeneratorFunction() {

    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';


    return 'No hay valores';
}