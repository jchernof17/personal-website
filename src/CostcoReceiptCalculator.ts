type Item = {
    name: string,
    before_tax_price: number,
    taxable?: boolean,
    after_tax_price?: number
}

type Person = {
    name: string,
    items?: Item[],
}

type Receipt = {
    name?: string,
    people: Person[],
    total: number,
}

function createReceipt(name="New Receipt") {
    receipt: Receipt = {
        
    }
}