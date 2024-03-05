class Student extends User { 
   constructor(name,password,nickname) {  
      super(name,password); 
      this.nickname = nickname;
   };
   getCourses() {
       return ['math','info....'];
   }
}
