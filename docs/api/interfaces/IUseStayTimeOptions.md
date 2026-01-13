[**@lynx-js/react-use**](../README.md)

***

[@lynx-js/react-use](../README.md) / IUseStayTimeOptions

# Interface: IUseStayTimeOptions\<EA\>

## Extends

- [`IUseExposureForNodeOptions`](IUseExposureForNodeOptions.md)\<`EA`\>

## Type Parameters

### EA

`EA` *extends* `Record`\<`string`, `string` \| `number` \| `boolean` \| `undefined`\>

## Properties

### admissionTimeMs?

> `optional` **admissionTimeMs**: `number`

#### Inherited from

[`IUseExposureForNodeOptions`](IUseExposureForNodeOptions.md).[`admissionTimeMs`](IUseExposureForNodeOptions.md#admissiontimems)

***

### attrs?

> `optional` **attrs**: [`TExposureAttrBag`](../type-aliases/TExposureAttrBag.md) & `EA`

#### Inherited from

[`IUseExposureForNodeOptions`](IUseExposureForNodeOptions.md).[`attrs`](IUseExposureForNodeOptions.md#attrs)

***

### isStaying?

> `optional` **isStaying**: `boolean`

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

#### Inherited from

[`IUseExposureForNodeOptions`](IUseExposureForNodeOptions.md).[`onAppear`](IUseExposureForNodeOptions.md#onappear)

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

#### Inherited from

[`IUseExposureForNodeOptions`](IUseExposureForNodeOptions.md).[`onChange`](IUseExposureForNodeOptions.md#onchange)

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

#### Inherited from

[`IUseExposureForNodeOptions`](IUseExposureForNodeOptions.md).[`onDisappear`](IUseExposureForNodeOptions.md#ondisappear)

***

### onRunningChange()?

> `optional` **onRunningChange**: (`info`) => `void`

#### Parameters

##### info

###### isRunning

`boolean`

###### stayTimeMs

`number`

#### Returns

`void`
