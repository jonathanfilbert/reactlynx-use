[**@lynx-js/react-use**](../README.md)

***

[@lynx-js/react-use](../README.md) / IUseStayTimeReturn

# Interface: IUseStayTimeReturn\<EA\>

## Type Parameters

### EA

`EA` *extends* `Record`\<`string`, `string` \| `number` \| `boolean` \| `undefined`\>

## Properties

### exposureProps

> **exposureProps**: `object` & [`TExposureAttrBag`](../type-aliases/TExposureAttrBag.md) & `EA`

#### Type Declaration

##### binduiappear()?

> `optional` **binduiappear**: (`e`) => `void`

###### Parameters

###### e

###### dataset

\{\[`key`: `string`\]: `any`; \}

The collection of custom attributes starting with data- on the event target.

###### exposure-id

`string`

exposure-id set on the target.

###### exposure-scene

`string`

exposure-scene set on the target.

###### unique-id

`string`

uid of the target

###### Returns

`void`

##### binduidisappear()?

> `optional` **binduidisappear**: (`e`) => `void`

###### Parameters

###### e

###### dataset

\{\[`key`: `string`\]: `any`; \}

The collection of custom attributes starting with data- on the event target.

###### exposure-id

`string`

exposure-id set on the target.

###### exposure-scene

`string`

exposure-scene set on the target.

###### unique-id

`string`

uid of the target

###### Returns

`void`

***

### isRunning

> **isRunning**: `boolean`

***

### pause()

> **pause**: () => `void`

#### Returns

`void`

***

### reset()

> **reset**: () => `void`

#### Returns

`void`

***

### resume()

> **resume**: () => `void`

#### Returns

`void`

***

### stayTimeMs

> **stayTimeMs**: `number`
