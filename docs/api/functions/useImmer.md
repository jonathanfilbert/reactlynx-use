[**@lynx-js/react-use**](../README.md)

***

[@lynx-js/react-use](../README.md) / useImmer

# Function: useImmer()

> **useImmer**\<`S`\>(`initialValue`): [`ImmerHook`](../type-aliases/ImmerHook.md)\<`S`\>

A hook to use immer as a React hook to manipulate state.

## Type Parameters

### S

`S`

## Parameters

### initialValue

The initial value of the state, or a function that returns the initial value.

`S` | () => `S`

## Returns

[`ImmerHook`](../type-aliases/ImmerHook.md)\<`S`\>

A tuple containing the current state and a function to update the state.

## Example

```tsx
const [person, updatePerson] = useImmer({
  name: "Sarah",
  age: 25
});

function updateName(name) {
  updatePerson(draft => {
    draft.name = name;
  });
}
```
