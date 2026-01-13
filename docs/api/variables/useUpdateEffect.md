[**@lynx-js/react-use**](../README.md)

***

[@lynx-js/react-use](../README.md) / useUpdateEffect

# Variable: useUpdateEffect()

> `const` **useUpdateEffect**: (`effect`, `deps?`) => `void`

Accepts a function that contains imperative, possibly effectful code.
The effects run after main thread dom update without blocking it.

## Parameters

### effect

`EffectCallback`

Imperative function that can return a cleanup function

### deps?

`DependencyList`

If present, effect will only activate if the values in the list change (using ===).

## Returns

`void`
