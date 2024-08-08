var l=r=>new Promise((s,a)=>{let e=new FileReader;e.readAsDataURL(r),e.onload=()=>s(e.result),e.onerror=a;}),d=async(r,s,{minSize:a,maxSize:e})=>{let i={data:null,isLoading:!0,isError:!1,isValidSize:!1},o=s.includes(r.type),n=r.size/1024,t=n>=a&&n<=e;if(o&&t)try{i.data=await l(r),i.isValidSize=!0;}catch{i.isError=!0;}else i.isError=!0;return i.isLoading=!1,i};

export { d as _64ify };
