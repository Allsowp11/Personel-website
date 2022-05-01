# **Lorem ipsum dolor sit amet**
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```
import { useState , useEffect} from "react";
export const Responsivity = () => {    
    const [windowDimenion, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
        })

    const detectSize = () => {
        detectHW({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize)
    return () => {
            window.removeEventListener('resize', detectSize)
    }
    }, [windowDimenion])

``` 

## doloremque laudantium
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, *totam rem aperiam* , eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem `quia` voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui `dolorem` ipsum quia dolor sit amet, consectetur, adipisci velit, [sed-quia][1] non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "sed quia"

>ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.


>sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam

---

- First item
- Second item
- Third item
- Fourth item
---

![fotograf](https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg)