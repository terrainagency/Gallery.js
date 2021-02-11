import { debounce } from './debounce.js'

export function windowInit() {
    window.addEventListener('DOMContentLoaded', function() {
        // 1. Set queries
        const queries = [
            {name: 'xs', value: '375px'},
            {name: 'sm', value: '425px'},
            {name: 'md', value: '768px'},
            {name: 'lg', value: '1024px'},
            {name: 'xl', value: '1024px'},
            {name: '2xl', value:  '1526px'},
            {name: '3xl', value:  '2000px'},
        ]

        // 2. Define findMatch()
        const findMatch = debounce((ev) => {
            console.log("findmatch()")

            // 1. Find the first matching query
            let result = (() => {
                for(var i = 0; i < queries.length-1; i++) {
                    if(window.matchMedia(`(max-width: ${queries[i].value})`).matches) {
                        return queries[i].name
                    }
                }
            })()

            // 2. If query is out of bounds, set result to largest available query name
            if(result === undefined) {result = queries[queries.length-1].name}

            console.log(result)

            return result
        }, 250);

        // 3. Find initial matching query
        findMatch()
        
        // 3. Debounce findMatch()
        return window.addEventListener('resize', findMatch)
    })
}



export class WindowQuery {
    constructor(queries) {
        this.queries = queries 
        this.init()
    }
    init() {



        
        console.log(this)
    }
}
