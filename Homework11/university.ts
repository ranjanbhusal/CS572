class University {

     constructor(private name: String, private dept: String) {}

     graduation (year: number) {
         console.log(`Graduating $(this.dept) $(year) students`);
     }
}
export default University;