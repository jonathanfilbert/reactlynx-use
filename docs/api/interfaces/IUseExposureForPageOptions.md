[**@lynx-js/react-use**](../README.md)

***

[@lynx-js/react-use](../README.md) / IUseExposureForPageOptions

# Interface: IUseExposureForPageOptions\<EA\>

## Type Parameters

### EA

`EA` *extends* `Record`\<`string`, `string` \| `number` \| `boolean` \| `undefined`\>

## Properties

### ~~admissionMs?~~

> `optional` **admissionMs**: `number`

#### Deprecated

Use admissionTimeMs

***

### admissionTimeMs?

> `optional` **admissionTimeMs**: `number`

***

### attrs?

> `optional` **attrs**: `Omit`\<[`TExposureAttrBag`](../type-aliases/TExposureAttrBag.md), `"exposure-id"`\> & `EA`

***

### onAppear()?

> `optional` **onAppear**: (`e`, `info`) => `void`

#### Parameters

##### e

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

##### info

###### exposureId?

`string`

###### exposureScene?

`string`

#### Returns

`void`

***

### onChange()?

> `optional` **onChange**: (`e`, `info`) => `void`

#### Parameters

##### e

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

##### info

###### exposureId?

`string`

###### exposureScene?

`string`

###### isInView

`boolean`

#### Returns

`void`

***

### onDisappear()?

> `optional` **onDisappear**: (`e`, `info`) => `void`

#### Parameters

##### e

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

##### info

###### exposureId?

`string`

###### exposureScene?

`string`

#### Returns

`void`
