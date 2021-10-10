# Run Length

Simple run length compression

## Install

1. Clone the repository
2. Install dependencies `yarn install`

## Compressing

```
yarn compress original.txt
```

Should log:

```
✓ Texto comprimido com sucesso:
a2b3c
```

## Uncompressing

```
yarn uncompress compressed.txt
```

Should log:

```
✓ Texto descomprimido com sucesso:
abbccc
```
