[**@lynx-js/react-use**](../README.md)

***

[@lynx-js/react-use](../README.md) / useEventListener

# Function: useEventListener()

> **useEventListener**\<`T`\>(`eventName`, `listener`): `void`

`useEventListener` help you `addListener` as early as possible.

 Note: Renamed from `useLynxGlobalEventListener` in `@lynx-js/react`

## Type Parameters

### T

`T` *extends* (...`args`) => `void`

## Parameters

### eventName

`string`

Event name to listen

### listener

`T`

Event handler

## Returns

`void`

## Example

Use this hooks to listen to event 'exposure' and event 'disexposure'

```jsx
function App() {
  useEventListener('exposure', (e) => {
    console.log("exposure", e)
  })
  useEventListener('disexposure', (e) => {
    console.log("disexposure", e)
  })
  return (
    <view
      style='width: 100px; height: 100px; background-color: red;'
      exposure-id='a'
    />
  )
}
```
