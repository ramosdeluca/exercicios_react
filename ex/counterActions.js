export function inc(){
    return { type: 'INC' }
}
export function dec(){
    return { type: 'DEC' }
}
export function limpar(){
    return { type: 'LIMPAR' }
}
export function stepChanged(e){
    return { type: 'STEP_CHANGED',
             payload: e.target.value
            }
}