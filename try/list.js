let cpu = { 
   "producerOfCPU":'AMD',
   "price":'250$',
   "family":'AMD Ryzen 7', 
   "modelName":' Ryzen 7 3700X',
} 

let memory = { 
   "producerOfMemory":'Hynix', 
   "amount":'60$', 
   "memory":'2048', 
   "name":'Hynix DDR4-2666',
   "familyOfMemory":'DDR4',  
   __proto__:cpu,
} 

cpu.img = 'https://media.istockphoto.com/id/1397047877/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9-%D0%BC%D0%B8%D0%BA%D1%80%D0%BE%D1%87%D0%B8%D0%BF-%D0%BD%D0%B0-%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B9-%D0%BF%D0%BB%D0%B0%D1%82%D0%B5.jpg?s=2048x2048&w=is&k=20&c=SJD8KMgM_cTyHfAGJB4Zm8OttSWR1fF38UjzR3ZQcS8='; 
console.log(memory);
