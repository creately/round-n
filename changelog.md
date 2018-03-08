# v1.0.2 - 2018-03-08

- Add support for negative numbers

```ts
import { roundN, floorN, ceilN } from '@creately/round-n';

roundN(-113, 2.5) // -112.5
ceilN(-113, 2.5) // -112.5
floorN(-113, 2.5) // -115
```

# v1.0.1 - 2018-03-08

- Add `roundN` method

```ts
import { roundN } from '@creately/round-n';

roundN(113, 2.5) // 112.5
roundN(6, Math.PI) // 6.28...
```

- Add `ceilN` method

```ts
import { ceilN } from '@creately/round-n';

ceilN(113, 2.5) // 115
ceilN(6, Math.PI) // 6.28...
```

- Add `floorN` method

```ts
import { ceilN } from '@creately/round-n';

ceilN(113, 2.5) // 112.5
ceilN(6, Math.PI) // 3.14...
```
