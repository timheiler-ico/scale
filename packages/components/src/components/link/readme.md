# scale-link



<!-- Auto Generated Below -->


## Usage

### Link

## Default

<scale-link href="http://example.com">
	Label
</scale-link>

## Target

<scale-link href="http://example.com" target="_blank">
	Label
</scale-link>

## Disabled

<scale-link href="http://example.com" disabled>
	Label
</scale-link>

## Block

<scale-link href="http://example.com" block="true">
	Label
</scale-link>

## No underline

<scale-link href="http://example.com" underline="false">
	Label
</scale-link>

## Icon

<scale-link href="http://example.com" icon="M23.55 9.4c-.25-.7-.85-1.2-1.6-1.25l-6-.45-2.25-5.55C13.4 1.45 12.75 1 12 1s-1.4.45-1.7 1.15L8 7.75 2 8.2c-.75.05-1.35.55-1.6 1.25s0 1.45.55 1.95l4.6 3.9-1.4 5.8c-.15.7.1 1.45.7 1.9.3.25.7.35 1.05.35.35 0 .65-.1.95-.25L12 19.9l5.1 3.2c.65.4 1.4.35 2-.05.6-.45.85-1.2.7-1.9l-1.45-5.85 4.6-3.9c.6-.55.85-1.3.6-2zm-1.5.8l-5.3 4.5 1.65 6.75c.05.2-.05.3-.1.35-.05.05-.2.1-.35 0L12 18.1l-5.9 3.65c-.15.1-.3.05-.35 0-.05-.05-.15-.15-.1-.35l1.65-6.75-5.3-4.5c-.15-.1-.1-.25-.1-.35 0-.05.1-.2.25-.2l6.95-.5 2.65-6.45c.05-.15.15-.15.25-.15s.2.05.3.2l2.65 6.45 6.95.5c.2 0 .25.15.25.2 0 .1 0 .25-.1.35z">
	Label
</scale-link>

## Icon size

<scale-link href="http://example.com" icon-size="16" icon="M23.55 9.4c-.25-.7-.85-1.2-1.6-1.25l-6-.45-2.25-5.55C13.4 1.45 12.75 1 12 1s-1.4.45-1.7 1.15L8 7.75 2 8.2c-.75.05-1.35.55-1.6 1.25s0 1.45.55 1.95l4.6 3.9-1.4 5.8c-.15.7.1 1.45.7 1.9.3.25.7.35 1.05.35.35 0 .65-.1.95-.25L12 19.9l5.1 3.2c.65.4 1.4.35 2-.05.6-.45.85-1.2.7-1.9l-1.45-5.85 4.6-3.9c.6-.55.85-1.3.6-2zm-1.5.8l-5.3 4.5 1.65 6.75c.05.2-.05.3-.1.35-.05.05-.2.1-.35 0L12 18.1l-5.9 3.65c-.15.1-.3.05-.35 0-.05-.05-.15-.15-.1-.35l1.65-6.75-5.3-4.5c-.15-.1-.1-.25-.1-.35 0-.05.1-.2.25-.2l6.95-.5 2.65-6.45c.05-.15.15-.15.25-.15s.2.05.3.2l2.65 6.45 6.95.5c.2 0 .25.15.25.2 0 .1 0 .25-.1.35z">
	Label
</scale-link>



## Properties

| Property   | Attribute  | Description                    | Type      | Default     |
| ---------- | ---------- | ------------------------------ | --------- | ----------- |
| `block`    | `block`    | (optional) Block link          | `boolean` | `false`     |
| `disabled` | `disabled` | (optional) Disabled link       | `boolean` | `false`     |
| `href`     | `href`     | (optional) Link href           | `string`  | `undefined` |
| `styles`   | `styles`   | (optional) Injected CSS styles | `string`  | `undefined` |
| `target`   | `target`   | (optional) Link open a new tag | `string`  | `'_self'`   |
| `variant`  | `variant`  | (optional) Link variant        | `string`  | `''`        |


## Shadow Parts

| Part        | Description |
| ----------- | ----------- |
| `"wrapper"` |             |


## Dependencies

### Used by

 - [scale-data-grid](../data-grid)

### Graph
```mermaid
graph TD;
  scale-data-grid --> scale-link
  style scale-link fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
