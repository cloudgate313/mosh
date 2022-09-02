// Type alias
type Employee = {
  id: number;
  name: string;
  retire: (date: Date) => void
}

// Union types
let weight: number | string = 1;
weight = '1kg';

// Intersection types
type UIWidget = Draggable & Droppable;

// Literal types
type Quantity = 50 | 100;

// Nullable types
let namez: string | null = null;

// Optional chaining (?.)
customer?.birthdate?.getFullYear();
customers?.[0];
log?.('message');

// Nullish coalescing operator
const someValue = undefined;
const value = someValue ?? 30; // value = 30

// Type assertion
// obj as Person;
// <Person>obj;
// The unknown type
function render(document: unknown) { // We have to narrow down to a specific // type before we can perform any operations// on an unknown type.
  if (typeof document === 'string') { }
}
// The never type
function processEvents(): never { // This function never returns because // it has an infinite loop.
  while (true) { }
}
