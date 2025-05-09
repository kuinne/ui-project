---
title: Button Demo
lang: en-US
---

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: details
This is a details block.
:::

::: danger STOP
危险区域，请勿继续
:::

::: details 点我查看代码

```js
console.log("Hello, VitePress!");
```

:::

::: raw
Wraps in a `<div class="vp-raw">`
:::

> [!NOTE]
> 强调用户在快速浏览文档时也不应忽略的重要信息。

```js
export default {
  name: "MyComponent",
  // ...
};
```

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```

```js
export default {
  data() {
    return {
      msg: "Highlighted!", // [!code highlight]
    };
  },
};
```

```js
export default {
  data() {
    return {
      msg: "Focused!", // [!code focus]
    };
  },
};
```

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

```js
export default {
  data() {
    return {
      msg: "Error", // [!code error]
      msg: "Warning", // [!code warning]
    };
  },
};
```

```ts:line-numbers=2 {1}
// 行号已启用，并从 2 开始
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```

<<< @/test.ts{1}

<<< @/test.ts#snippet{1}

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
};

export default config;
```

```ts [config.ts]
import type { UserConfig } from "vitepress";

const config: UserConfig = {
  // ...
};

export default config;
```

::: code-group

<<< @/test.ts

<<< @/test.ts#snippet{1,2 ts:line-numbers} [snippet with region]

:::

# Docs

## Basics

<!--@include: ./button1.md{2,}-->

# {{ $frontmatter.title }}

{{ 1 + 1 }}

<span v-for="i in 3">{{ i }}</span>

<!-- <script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

## Markdown Content

Then count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button> -->

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>

<script setup>

import { Button } from "@kuinne/ui-components";
</script>

# Docs

<div>
    <Button size="large">Click Me</Button>
</div>

::: v-pre
{{ This will be displayed as-is }}`
:::

```js-vue
Hello {{ 1 + 1 }}
```
