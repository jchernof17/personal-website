const TAX: number = 1.09;
type Item = {
    name: string,
    before_tax_price: number,
    is_taxable: boolean,
    after_tax_price: number,
}

interface Person {
    name: string,
    items: Item[],
    total: number,
}

interface Receipt {
    name?: string,
    people: Person[],
    total: number,
    tax: number,
}

function createReceipt(name="New Receipt"): Receipt {
    let receipt: Receipt = {
        name,
        people: [],
        total: 0,
        tax: TAX,
    };
    return receipt;
}

function addPersonIfNotExists(receipt: Receipt, name: string): Person {
    receipt.people.forEach(person => {
        if(person.name === name) {
            return person;
        }
    });

    let person = {
        name,
        items: [],
        total: 0,
    };
    receipt.people.push(person);
    return person;
}

function createItem(name: string, before_tax_price: number, is_taxable: boolean): Item {
    let after_tax_price;
    if (is_taxable) {
        after_tax_price = TAX * before_tax_price;
    }
    else {
        after_tax_price = before_tax_price;
    }
    return {
        name,
        before_tax_price,
        is_taxable,
        after_tax_price
    };
}

function assignItemToPerson(receipt: Receipt, item: Item, name: string): void {
    let person = addPersonIfNotExists(receipt, name);
    person.items.push(item);
    receipt.total += item.after_tax_price;
    person.total += item.after_tax_price;
}

function getPersonTotal(receipt: Receipt, name: string): number {
    let person = addPersonIfNotExists(receipt, name);
    return getPersonTotalFromPerson(receipt, person);
}

function getPersonTotalFromPerson(receipt: Receipt, person: Person): number {
    return person.total;
}

function getReceiptTotal(receipt: Receipt): number {
    return receipt.total;
}

export { TAX, getPersonTotal, getPersonTotalFromPerson, getReceiptTotal, addPersonIfNotExists, assignItemToPerson, createItem, createReceipt };
