import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex350Cb, useFlex351Cb, useFlex352Cb, useFlex353Cb, useFlex354Cb, useTextBox271Cb, useTextBox272Cb, useTextBox273Cb, useTextBox274Cb, useTextBox275Cb, useImage116Cb, useButton59Cb, useButton60Cb } from "../page-cbs/about";
import "../page-css/about.css";
import "../custom/about";

export default function About() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex350Props = useStore((state)=>state["about"]["Flex350"]);
const Flex350IoProps = useIoStore((state)=>state["about"]["Flex350"]);
const Flex350Cb = useFlex350Cb()
const Flex351Props = useStore((state)=>state["about"]["Flex351"]);
const Flex351IoProps = useIoStore((state)=>state["about"]["Flex351"]);
const Flex351Cb = useFlex351Cb()
const Flex352Props = useStore((state)=>state["about"]["Flex352"]);
const Flex352IoProps = useIoStore((state)=>state["about"]["Flex352"]);
const Flex352Cb = useFlex352Cb()
const Flex353Props = useStore((state)=>state["about"]["Flex353"]);
const Flex353IoProps = useIoStore((state)=>state["about"]["Flex353"]);
const Flex353Cb = useFlex353Cb()
const Flex354Props = useStore((state)=>state["about"]["Flex354"]);
const Flex354IoProps = useIoStore((state)=>state["about"]["Flex354"]);
const Flex354Cb = useFlex354Cb()
const TextBox271Props = useStore((state)=>state["about"]["TextBox271"]);
const TextBox271IoProps = useIoStore((state)=>state["about"]["TextBox271"]);
const TextBox271Cb = useTextBox271Cb()
const TextBox272Props = useStore((state)=>state["about"]["TextBox272"]);
const TextBox272IoProps = useIoStore((state)=>state["about"]["TextBox272"]);
const TextBox272Cb = useTextBox272Cb()
const TextBox273Props = useStore((state)=>state["about"]["TextBox273"]);
const TextBox273IoProps = useIoStore((state)=>state["about"]["TextBox273"]);
const TextBox273Cb = useTextBox273Cb()
const TextBox274Props = useStore((state)=>state["about"]["TextBox274"]);
const TextBox274IoProps = useIoStore((state)=>state["about"]["TextBox274"]);
const TextBox274Cb = useTextBox274Cb()
const TextBox275Props = useStore((state)=>state["about"]["TextBox275"]);
const TextBox275IoProps = useIoStore((state)=>state["about"]["TextBox275"]);
const TextBox275Cb = useTextBox275Cb()
const Image116Props = useStore((state)=>state["about"]["Image116"]);
const Image116IoProps = useIoStore((state)=>state["about"]["Image116"]);
const Image116Cb = useImage116Cb()
const Button59Props = useStore((state)=>state["about"]["Button59"]);
const Button59IoProps = useIoStore((state)=>state["about"]["Button59"]);
const Button59Cb = useButton59Cb()
const Button60Props = useStore((state)=>state["about"]["Button60"]);
const Button60IoProps = useIoStore((state)=>state["about"]["Button60"]);
const Button60Cb = useButton60Cb()

  return (<>
  <Flex1 className="p-about Flex350 bpt" {...Flex350Props} {...Flex350Cb} {...Flex350IoProps}>
<Flex1 className="p-about Flex351 bpt" {...Flex351Props} {...Flex351Cb} {...Flex351IoProps}>
<TextBox1 className="p-about TextBox274 bpt" {...TextBox274Props} {...TextBox274Cb} {...TextBox274IoProps}/>
<TextBox1 className="p-about TextBox271 bpt" {...TextBox271Props} {...TextBox271Cb} {...TextBox271IoProps}/>
<TextBox1 className="p-about TextBox272 bpt" {...TextBox272Props} {...TextBox272Cb} {...TextBox272IoProps}/>
<TextBox1 className="p-about TextBox273 bpt" {...TextBox273Props} {...TextBox273Cb} {...TextBox273IoProps}/>
<TextBox1 className="p-about TextBox275 bpt" {...TextBox275Props} {...TextBox275Cb} {...TextBox275IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex352 bpt" {...Flex352Props} {...Flex352Cb} {...Flex352IoProps}>
<Image1 className="p-about Image116 bpt" {...Image116Props} {...Image116Cb} {...Image116IoProps}/>
</Flex1>
<Flex1 className="p-about Flex353 bpt" {...Flex353Props} {...Flex353Cb} {...Flex353IoProps}>
<Flex1 className="p-about Flex354 bpt" {...Flex354Props} {...Flex354Cb} {...Flex354IoProps}>
<Button1 className="p-about Button59 bpt" {...Button59Props} {...Button59Cb} {...Button59IoProps}/>
<Button1 className="p-about Button60 bpt" {...Button60Props} {...Button60Cb} {...Button60IoProps}/>
</Flex1>
</Flex1>
  </>);
}
