[**@lynx-js/react-use**](../README.md)

***

[@lynx-js/react-use](../README.md) / useMainThreadImperativeHandle

# Function: useMainThreadImperativeHandle()

> **useMainThreadImperativeHandle**\<`T`, `R`\>(`ref`, `createHandle`, `deps`): `void`

Main Thread Version of `useImperativeHandle`, can be used to trigger Component's main thread method.

## Type Parameters

### T

`T`

### R

`R`

## Parameters

### ref

`MainThreadRef`\<`T`\> | `undefined`

### createHandle

() => `R`

### deps

readonly `unknown`[]

## Returns

`void`

## Example

```
function InternalComp({ 'main-thread:ref': MTRef }: { 'main-thread:ref'?: MainThreadRef<InternalCompMTRef | null> }) {
 function start() {
   'main thread'
   console.log('MT Start')
 }
 useMainThreadImperativeHandle(
   MTRef,
   () => {
     'main thread'
     return {
       start: start,
     }
   },
   [],
 )
 return (
   <view>
     <text>Internal Comp</text>
   </view>
 )
}
function App() {
 const internalMTRef = useMainThreadRef<InternalCompMTRef>(null);

 return (
   <view>
     <InternalComp main-thread:ref={internalMTRef}></InternalComp>
     <view
       main-thread:bindtap={() => {
         'main thread'
         internalMTRef.current?.start()
       }}
     >
       <text>Click to Trigger</text>
     </view>
   </view>
 )
}
```
