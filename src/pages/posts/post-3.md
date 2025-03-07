---
layout: ../../layouts/MarkdownPostLayout.astro
title: 我的第三篇博客文章
author: Astro 学习者
description: "我遇到了一些问题，但是在社区里面提问真的很有帮助！"
image:
    url: "https://docs.astro.build/assets/rays.webp"
    alt: "The Astro logo on a dark background with rainbow rays."
pubDate: 2022-07-15
tags: ["astro", "learning in public", "setbacks", "community"]
---
尽管这并不总是一帆风顺，但我很享受使用 Astro 进行搭建。并且，[Discord 社区](https://astro.build/chat)真的很友好而且乐于助人！


```jsx {"1":5} del={"2":7-8} ins={"3":10-12}
// labeled-line-markers.jsx
<button
  role="button"
  {...props}
  value={value}
  className={buttonClassName}
  disabled={disabled}
  active={active}
>
  {children &&
    !active &&
    (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

Math Equation and text : \\(\begin{array}{|l|l|}\hline 
\cellcolor{LightGreen}\text{Hello} & \text{World}\\\hline 
\end{array}\\) , 

Greetings ! 


\\[
\xymatrix{
  A \ar[r]^f \ar[d]\_g & B \ar[d]^h \\
  C \ar[r]\_j & D
}
\\]