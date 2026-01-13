[**@lynx-js/react-use**](../README.md)

***

[@lynx-js/react-use](../README.md) / IUseExposureForNodeOptions

# Interface: IUseExposureForNodeOptions\<EA\>

## Extended by

- [`IUseStayTimeOptions`](IUseStayTimeOptions.md)

## Type Parameters

### EA

`EA` *extends* `Record`\<`string`, `string` \| `number` \| `boolean` \| `undefined`\>

## Properties

### admissionTimeMs?

> `optional` **admissionTimeMs**: `number`

***

### attrs?

> `optional` **attrs**: [`TExposureAttrBag`](../type-aliases/TExposureAttrBag.md) & `EA`

***

### onAppear()?

> `optional` **onAppear**: (`e`) => `void`

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

###### isInView

`boolean`

#### Returns

`void`

***

### onDisappear()?

> `optional` **onDisappear**: (`e`) => `void`

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

#### Returns

`void`
