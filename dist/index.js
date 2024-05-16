var u=async(i,r,{minSize:n,maxSize:a})=>{let e={data:null,isLoading:!0,isError:!1,isValidSize:!1};try{let l=s=>[...r].includes(s.type),t=s=>{let o=s.size/1024;return o>=n&&o<=a};if(l(i)&&t(i)){e.isLoading=!0;let s=await d(i);e.isLoading=!1,e.data=s,e.isValidSize=!0,e.isError=!1;}else e.data=null,e.isLoading=!1,e.isValidSize=!1,e.isError=!0;}catch{e.data=null,e.isLoading=!1,e.isValidSize=!1,e.isError=!0;}return e},d=i=>new Promise((r,n)=>{let a=new FileReader;a.readAsDataURL(i),a.onload=()=>{let e=a.result;r(e);},a.onerror=e=>n(e);});

export { u as _64ify };
