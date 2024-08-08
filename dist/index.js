var t=i=>new Promise((s,r)=>{let e=new FileReader;e.readAsDataURL(i),e.onload=()=>s(e.result),e.onerror=r;}),l=async(i,{allowedTypes:s,allowedSizes:r})=>{let e={data:null,isLoading:!0,isError:!1,isValidSize:!1},n=s.includes(i.type),a=i.size/1024,o=a>=r.minSize&&a<=r.maxSize;if(n&&o)try{e.data=await t(i),e.isValidSize=!0;}catch{e.isError=!0;}else e.isError=!0;return e.isLoading=!1,e};

export { l as _64ify };
