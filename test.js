let state = {
    price: 0,
    names: ["asd", "dee", "kek"]
}

const foo = () => {
    state = { 
        ...state, 
        price: state.price += 1, 
        names: [...state.names, "bar"] 
    } 
}
// foo()
for (let i = 0; i < 3; i++) {
   foo() 
}
console.log(state)